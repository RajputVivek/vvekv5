/* =============================================
   VIVEK K — PORTFOLIO JS
   ============================================= */
'use strict';

/* ── LOADER ── */
(function () {
  const loader = document.getElementById('loader');
  document.body.classList.add('locked');

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('out');
      document.body.classList.remove('locked');
      // Reveal hero elements with stagger
      document.querySelectorAll('#hero .reveal-up, #hero .reveal-right').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), 200 + i * 130);
      });
    }, 1500);
  });
})();

/* ── CUSTOM CURSOR ── */
(function () {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function animRing() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  // Expand ring on interactive elements
  document.body.addEventListener('mouseover', e => {
    if (e.target.closest('a,button,.skill-card,.proj-card,.val-card,.stat-card,.principle-card,.demo-card,.tools-chips span,.soc-link,.btn,.cs-card,.cs-expand-btn')) {
      ring.classList.add('big');
    }
  });
  document.body.addEventListener('mouseout', e => {
    if (e.target.closest('a,button,.skill-card,.proj-card,.val-card,.stat-card,.principle-card,.demo-card,.tools-chips span,.soc-link,.btn,.cs-card,.cs-expand-btn')) {
      ring.classList.remove('big');
    }
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
})();

/* ── NAVBAR ── */
(function () {
  const nav   = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');
  const secs  = document.querySelectorAll('section[id]');

  function update() {
    nav.classList.toggle('solid', window.scrollY > 50);

    let active = '';
    secs.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) active = s.id;
    });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + active));
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ── HAMBURGER ── */
(function () {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
})();

/* ── PARTICLES CANVAS ── */
(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COUNT    = 50;
  const MAX_DIST = 115;
  let W, H, particles = [];
  let mx = null, my = null;

  function resize() {
    W = canvas.width  = canvas.parentElement.offsetWidth  || window.innerWidth;
    H = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
  }

  function Particle() {
    this.reset = function () {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.r  = Math.random() * 1.6 + 0.5;
      this.a  = Math.random() * 0.4 + 0.12;
    };
    this.reset();
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  // Track mouse only over hero section
  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    });
    hero.addEventListener('mouseleave', () => { mx = null; my = null; });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      if (mx !== null) {
        const dx = p.x - mx, dy = p.y - my;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 140) {
          const f = (140 - d) / 140 * 0.7;
          p.x += (dx / d) * f;
          p.y += (dy / d) * f;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(108,99,255,${p.a})`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(108,99,255,${(1 - dist / MAX_DIST) * 0.2})`;
          ctx.lineWidth   = 0.7;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  setTimeout(resize, 60);
  draw();
})();


/* ── SCROLL REVEAL ── */
(function () {
  const els = Array.from(
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
  ).filter(el => !el.closest('#hero'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -55px 0px' });

  els.forEach(el => io.observe(el));
})();

/* ── ANIMATED COUNTERS ── */
(function () {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = +el.getAttribute('data-count');
      const t0     = performance.now();
      const dur    = 1600;

      (function step(now) {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(step);
      })(t0);

      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => io.observe(el));
})();

/* ── SKILL BARS ── */
(function () {
  const bars = document.querySelectorAll('.sk-bar[data-w]');
  const io   = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const fill = e.target.querySelector('.sk-fill');
      const w    = e.target.getAttribute('data-w');
      setTimeout(() => { fill.style.width = w + '%'; }, 80);
      io.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  bars.forEach(b => io.observe(b));
})();

/* ── ORB PARALLAX (mouse) ── */
(function () {
  const orbs = document.querySelectorAll('.orb');
  if (!orbs.length) return;
  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    orbs.forEach((o, i) => {
      const f = (i + 1) * 16;
      o.style.transform = `translate(${dx * f}px, ${dy * f}px)`;
    });
  });
})();

/* ── 3D TILT ON CARDS ── */
(function () {
  document.querySelectorAll('.skill-card, .val-card, .principle-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      const rx = -(e.clientY - cy) / (r.height / 2) * 5;
      const ry =  (e.clientX - cx) / (r.width  / 2) * 5;
      card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
})();

/* ── CASE STUDY MOUSE SPOTLIGHT ── */
(function () {
  document.querySelectorAll('.cs-card').forEach(cs => {
    cs.addEventListener('mousemove', e => {
      const r = cs.getBoundingClientRect();
      cs.style.background = `radial-gradient(700px at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(108,99,255,0.06) 0%, transparent 75%), var(--bg-card)`;
    });
    cs.addEventListener('mouseleave', () => { cs.style.background = ''; });
  });
})();

/* ── CASE STUDY MODALS ── */
(function () {
  const overlay = document.getElementById('cs-modal-overlay');
  if (!overlay) return;

  // Open
  document.querySelectorAll('.cs-expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const modal    = document.getElementById(targetId);
      if (!modal) return;

      // Hide all modals first
      overlay.querySelectorAll('.cs-modal').forEach(m => m.classList.remove('visible'));

      overlay.classList.add('open');
      modal.classList.add('visible');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close via overlay click or close button
  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target.closest('[data-close]')) {
      closeModals();
    }
  });

  // Close via Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModals();
  });

  function closeModals() {
    overlay.classList.remove('open');
    overlay.querySelectorAll('.cs-modal').forEach(m => m.classList.remove('visible'));
    document.body.style.overflow = '';
  }
})();

/* ── CONTACT FORM ── */
(function () {
  try {
  const form = document.getElementById('contact-form');
  if (!form) return;
  console.log('[contact] initializing handler');

  const btn   = document.getElementById('form-btn');
  const sText = btn.querySelector('.s-text');
  const sLoad = btn.querySelector('.s-load');
  const sDone = btn.querySelector('.s-done');

  form.addEventListener('submit', async e => {
    console.log('[contact] submit event');
    e.preventDefault();

    let ok = true;
    form.querySelectorAll('[required]').forEach(f => {
      f.style.borderColor = '';
      if (!f.value.trim()) { f.style.borderColor = '#ff5edf'; ok = false; }
    });
    if (!ok) {
      const kf = [
        { transform: 'translateX(-5px)' }, { transform: 'translateX(5px)'  },
        { transform: 'translateX(-3px)' }, { transform: 'translateX(3px)'  },
        { transform: 'translateX(0)'    },
      ];
      form.animate(kf, { duration: 300, easing: 'ease-in-out' });
      return;
    }
    // UI: show loading
    sText.style.display = 'none';
    sLoad.style.display = 'inline-flex';
    btn.disabled = true;

    // EmailJS configuration
    const EMAILJS_USER_ID = 'ibdPGGKPPyd5cSbLS';
    const EMAILJS_SERVICE_ID = 'service_niqjdvl';
    const EMAILJS_TEMPLATE_ID = 'template_j4ruanv';

    // Dynamically load EmailJS SDK if needed
    function loadEmailJSSDK() {
      if (window.emailjs && window.emailjs.sendForm) return Promise.resolve();
      return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error('Failed to load EmailJS SDK'));
        document.head.appendChild(s);
      });
    }

    try {
      await loadEmailJSSDK();
      if (!window.emailjs) throw new Error('EmailJS not available');
      // Initialize with user id if provided
      if (EMAILJS_USER_ID && !EMAILJS_USER_ID.includes('YOUR_')) {
        try { window.emailjs.init(EMAILJS_USER_ID); } catch (e) { /* ignore */ }
      }

      // If user didn't configure IDs, fallback to UX-only simulation
      if (EMAILJS_SERVICE_ID.includes('YOUR_') || EMAILJS_TEMPLATE_ID.includes('YOUR_')) {
        await new Promise(r => setTimeout(r, 1200));
      } else {
        const res = await window.emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, '#contact-form');
        // emailjs returns a promise; no additional handling required
      }

      sLoad.style.display = 'none';
      sDone.style.display = 'inline-flex';
      btn.style.background = 'linear-gradient(135deg,#28c840,#00d4ff)';

      setTimeout(() => {
        form.reset();
        sDone.style.display = 'none';
        sText.style.display = 'inline-flex';
        btn.disabled = false;
        btn.style.background = '';
      }, 2200);

    } catch (err) {
      console.error('Contact (EmailJS) error:', err);
      sLoad.style.display = 'none';
      sText.style.display = 'inline-flex';
      btn.disabled = false;
      alert('Sorry — message failed to send. Please email hello@vvek.dev instead.');
    }
  });

  form.querySelectorAll('input, textarea').forEach(f => {
    f.addEventListener('input', () => { if (f.value.trim()) f.style.borderColor = ''; });
  });

  } catch (initErr) { console.error('[contact] init error', initErr); }
})();

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
  });
});

/* ── LOGO GLITCH ── */
(function () {
  const logo = document.querySelector('.nav-logo');
  if (!logo) return;
  const style = document.createElement('style');
  style.textContent = `
    @keyframes glitch {
      0%  { text-shadow: none; transform: none; }
      20% { text-shadow: 2px 0 #ff5edf, -2px 0 #00d4ff; transform: skewX(-3deg); }
      40% { text-shadow: -2px 0 #ff5edf, 2px 0 #00d4ff; transform: skewX(2deg); }
      70% { text-shadow: 1px 0 #6c63ff; transform: skewX(-1deg); }
      100%{ text-shadow: none; transform: none; }
    }`;
  document.head.appendChild(style);
  logo.addEventListener('mouseenter', () => {
    logo.style.animation = 'glitch 0.38s ease forwards';
  });
  logo.addEventListener('animationend', () => { logo.style.animation = ''; });
})();

/* ── FOOTER YEAR ── */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ==============================================
   INTERACTIVE UI DEMO SECTION
   ============================================== */

/* ─ Dashboard Widget ─ */
(function () {
  const container = document.getElementById('demo-dashboard');
  if (!container) return;

  const DATA = {
    week:  { applied: 247, assessed: 164, shortlisted: 43 },
    month: { applied: 1820, assessed: 1140, shortlisted: 312 },
  };

  let current = 'week';

  function animateNum(el, from, to) {
    const dur = 500;
    const t0  = performance.now();
    (function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * ease).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  function updateDashboard(period) {
    const d = DATA[period];
    const max = d.applied;

    animateNum(document.getElementById('dw-applied'),    +document.getElementById('dw-applied').textContent.replace(/,/g,'') || 0,    d.applied);
    animateNum(document.getElementById('dw-assessed'),   +document.getElementById('dw-assessed').textContent.replace(/,/g,'') || 0,   d.assessed);
    animateNum(document.getElementById('dw-shortlisted'),+document.getElementById('dw-shortlisted').textContent.replace(/,/g,'') || 0,d.shortlisted);

    // Update bars
    const fills = container.querySelectorAll('.dw-bar-fill');
    const labels = container.querySelectorAll('.dw-bar-row > span:last-child');
    const vals = [d.applied, d.assessed, d.shortlisted];
    fills.forEach((f, i) => {
      const pct = Math.round((vals[i] / max) * 100);
      f.style.width = pct + '%';
    });
    labels.forEach((l, i) => { l.textContent = vals[i].toLocaleString(); });
  }

  container.querySelectorAll('.dw-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.dw-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      current = tab.getAttribute('data-period');
      updateDashboard(current);
    });
  });
})();

/* ─ Skill Slider ─ */
(function () {
  const slider  = document.getElementById('skill-slider');
  if (!slider) return;
  const valEl   = document.getElementById('sl-value');
  const labelEl = document.getElementById('sl-label');
  const descEl  = document.getElementById('sl-desc');
  const compFill= document.getElementById('sl-comp-fill');
  const compMark= document.getElementById('sl-comp-marker');

  const levels = [
    { min: 0,  max: 24,  label: 'Beginner',  desc: 'Just getting started. This is where every expert once stood — the important thing is to be curious and consistent.' },
    { min: 25, max: 49,  label: 'Learning',  desc: 'Building foundational knowledge. You can follow tutorials and understand basic patterns. Keep shipping small projects.' },
    { min: 50, max: 69,  label: 'Proficient', desc: 'You understand the core concepts and can work independently on standard tasks. Ready for real team contribution.' },
    { min: 70, max: 84,  label: 'Advanced',  desc: "You're comfortable with hooks, component patterns, and state management. You understand the why behind the how." },
    { min: 85, max: 100, label: 'Expert',    desc: 'Deep mastery. You can design systems, mentor others, debug edge cases, and make architectural decisions confidently.' },
  ];

  function getLevel(v) {
    return levels.find(l => v >= l.min && v <= l.max) || levels[0];
  }

  function updateSlider(val) {
    const lv = getLevel(val);
    valEl.textContent   = val;
    labelEl.textContent = lv.label;
    descEl.textContent  = lv.desc;
    compFill.style.width  = val + '%';
    compMark.style.left   = val + '%';

    // Update track gradient
    slider.style.background = `linear-gradient(90deg, var(--purple) 0%, var(--cyan) ${val}%, rgba(255,255,255,0.07) ${val}%)`;
  }

  slider.addEventListener('input', () => updateSlider(+slider.value));
  updateSlider(+slider.value);
})();

/* ─ Sortable Table ─ */
(function () {
  const tbody = document.getElementById('dt-body');
  if (!tbody) return;

  const rawData = [
    { name: 'Priya Sharma',   score: 87, time: '22m', status: 'pass' },
    { name: 'Rahul Gupta',    score: 54, time: '38m', status: 'fail' },
    { name: 'Ananya Singh',   score: 92, time: '18m', status: 'pass' },
    { name: 'Kiran Mehta',    score: 71, time: '29m', status: 'pass' },
    { name: 'Aditya Kumar',   score: 48, time: '41m', status: 'pend' },
  ];

  let data = [...rawData];
  let sortCol = null;
  let sortDir = 1; // 1 = asc, -1 = desc
  let searchQ  = '';

  const statusMap = { pass: 'Passed', fail: 'Failed', pend: 'Pending' };

  function timeToMin(t) { return parseInt(t); }

  function renderTable() {
    let filtered = data.filter(r => r.name.toLowerCase().includes(searchQ.toLowerCase()));
    const countEl = document.getElementById('dt-count');
    if (countEl) countEl.textContent = `${filtered.length} of ${data.length}`;

    tbody.innerHTML = filtered.map(r => `
      <tr>
        <td>${r.name}</td>
        <td>${r.score}%</td>
        <td>${r.time}</td>
        <td><span class="dt-badge dt-${r.status}">${statusMap[r.status]}</span></td>
      </tr>
    `).join('');
  }

  function sortBy(col) {
    if (sortCol === col) sortDir *= -1;
    else { sortCol = col; sortDir = 1; }

    data.sort((a, b) => {
      let va = a[col], vb = b[col];
      if (col === 'time') { va = timeToMin(va); vb = timeToMin(vb); }
      if (typeof va === 'string') return va.localeCompare(vb) * sortDir;
      return (va - vb) * sortDir;
    });

    // Update header icons
    document.querySelectorAll('.dt-th.sortable').forEach(th => {
      th.classList.remove('sort-asc', 'sort-desc');
      if (th.getAttribute('data-col') === col) {
        th.classList.add(sortDir === 1 ? 'sort-asc' : 'sort-desc');
      }
    });

    renderTable();
  }

  // Header click sort
  document.querySelectorAll('.dt-th.sortable').forEach(th => {
    th.addEventListener('click', () => sortBy(th.getAttribute('data-col')));
  });

  // Search
  const searchEl = document.getElementById('dt-search');
  if (searchEl) {
    searchEl.addEventListener('input', e => {
      searchQ = e.target.value;
      renderTable();
    });
  }

  renderTable();
})();

/* ─ Micro-interactions ─ */
(function () {

  // Like button
  const likeBtn = document.getElementById('micro-like');
  const likeCount = document.getElementById('like-count');
  if (likeBtn && likeCount) {
    let liked = false;
    let count = 24;
    likeBtn.addEventListener('click', () => {
      liked = !liked;
      count = liked ? count + 1 : count - 1;
      likeBtn.classList.toggle('liked', liked);
      likeCount.textContent = count;

      // Burst animation
      if (liked) {
        const icon = likeBtn.querySelector('i');
        icon.animate([
          { transform: 'scale(1)' },
          { transform: 'scale(1.6)' },
          { transform: 'scale(1.3)' },
        ], { duration: 380, easing: 'cubic-bezier(0.4,0,0.2,1)' });
      }
    });
  }

  // Copy button
  const copyBtn  = document.getElementById('micro-copy');
  const copyIcon = document.getElementById('micro-copy-icon');
  if (copyBtn && copyIcon) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('npm install vivek-ui').then(() => {
        copyBtn.classList.add('copied');
        copyIcon.className = 'fas fa-check';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyIcon.className = 'fas fa-copy';
        }, 2000);
      }).catch(() => {
        // Fallback: just show visual
        copyBtn.classList.add('copied');
        copyIcon.className = 'fas fa-check';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyIcon.className = 'fas fa-copy';
        }, 2000);
      });
    });
  }

  // Progress button
  const progBtn = document.getElementById('micro-progress');
  if (progBtn) {
    let running = false;
    progBtn.addEventListener('click', () => {
      if (running) return;
      running = true;
      const bar  = progBtn.querySelector('.mpb-bar');
      const text = progBtn.querySelector('.mpb-text');

      text.textContent = 'Deploying…';
      bar.style.transition = 'width 1.8s linear';
      bar.style.width = '100%';

      setTimeout(() => {
        text.textContent = '✓ Deployed!';
        progBtn.style.background = 'linear-gradient(135deg,#28c840,#00d4ff)';
      }, 1850);

      setTimeout(() => {
        bar.style.transition = 'none';
        bar.style.width = '0';
        text.textContent = 'Deploy UI';
        progBtn.style.background = '';
        running = false;
      }, 3400);
    });
  }

  // Toggle already works via CSS — no JS needed for visual,
  // but we can add a console signal if desired
  const toggle = document.getElementById('micro-toggle-input');
  if (toggle) {
    toggle.addEventListener('change', () => {
      // visual only — CSS handles the rest
    });
  }
})();

/* ── BUILDING CARD SPOTLIGHT ── */
(function () {
  const card = document.querySelector('.building-card');
  if (!card) return;
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.background = `radial-gradient(900px at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(108,99,255,0.05) 0%, transparent 70%), var(--bg-card)`;
  });
  card.addEventListener('mouseleave', () => { card.style.background = ''; });
})();

/* ── IMPACT BADGES ANIMATE-IN ── */
(function () {
  const badges = document.querySelectorAll('.imp-badge');
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), idx * 100);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  badges.forEach(b => io.observe(b));
})();

(function () {
  const technologyCards = document.getElementById('technological-skills');
  const skillCards = document.getElementById('technical-skills');

  // Hide skillCards by-default, show technologyCards
  if (technologyCards && skillCards) {
    skillCards.style.display = 'none';
    technologyCards.style.display = 'grid';

    // Add click listeners to toggle between them
    const techTab = document.getElementById('tab-technology');
    const skillTab = document.getElementById('tab-skills');

    if (techTab && skillTab) {
      techTab.addEventListener('click', () => {
        techTab.classList.add('active');
        skillTab.classList.remove('active');
        technologyCards.style.display = 'grid';
        skillCards.style.display = 'none';
      });

      skillTab.addEventListener('click', () => {
        skillTab.classList.add('active');
        techTab.classList.remove('active');
        skillCards.style.display = 'grid';
        technologyCards.style.display = 'none';
      });
    }
  }
})();
