# Vivek K — Senior UI Developer Portfolio

A recruiter-ready, dark-premium portfolio website showcasing 4+ years of production UI development experience at Select10X, with structured case studies, interactive live demos, measurable impact metrics, and an AI SaaS side project.

---

## 🎯 Project Goals

- Impress interview panels and recruiters with credible, product-focused content
- Demonstrate frontend craft through live, interactive UI components (not just screenshots)
- Tell a story of real production ownership, not just side projects
- Present measurable impact alongside every achievement

---

## ✅ Sections & Features Completed

### Navigation
- Fixed navbar with backdrop blur, active-section highlighting, mobile hamburger menu
- Smooth-scroll to all sections; logo glitch animation on hover

### Hero
- Typing animation cycling through 5 role phrases (pre-filled, no empty start)
- Real profile photo with morphing blob mask + rotating rings + floating tech tags
- "Available for new opportunities" pulsing badge
- **Impact bar**: 40% bundle reduction · 20+ modules shipped · 4+ years in production
- Particle canvas with mouse-repulsion effect
- CTA buttons + social icon row

### About (01)
- 4-paragraph narrative bio
- Animated stat counters: 4+ Years · 20+ Projects · 40% Bundle Reduction · 100% Ownership
- Personality trait tag chips

### How I Think (02) — NEW
- 6 principle cards with gradient top-bar reveal on hover and 3D tilt animation:
  1. Clarity over visual noise
  2. Systems over one-offs
  3. UX driven by real usage
  4. Performance as design
  5. Build for the next person
  6. Ship, then refine
- Category tags per principle (UX / Engineering / Product)

### Skills (03)
- 8 skill cards with animated progress bars (triggered on scroll)
- Tool chip row: Figma, Tailwind, SASS, npm, GitHub, Vite, REST APIs, Postman, VS Code, Chrome DevTools

### Experience (04)
- Vertical timeline with gradient line
- **Metrics & Impact badges** per role:
  - 40% bundle size reduction
  - 10,000+ candidates served
  - 60% faster render after React migration
  - Average PageSpeed 92+ for freelance sites
- Bullet achievements with quantified outcomes

### Case Studies (05) — NEW SYSTEM
Full structured case study cards replacing the old project grid. Each card contains:
- Project title + one-line summary
- Role badge + date + company
- Problem Statement · Constraints · My Approach blocks
- "What I Built" bullet list
- Outcome/Impact metrics row (cm-num + cm-label)
- Tech stack chips
- **"Full Case Study" button** → opens modal overlay

**Case studies:**
1. **Candidate Assessment Player** — Featured (10k+ completions, ~35% drop-off reduction, 6 weeks)
2. **Question Bank & Assessment Manager** — (5k+ questions, ~70% faster setup, <200ms filters)
3. **HR Analytics Dashboard** — (8+ chart types, ~45% faster decisions, CSV export)

**Mockup previews** inside each case study right panel:
- Assessment Player: interactive MCQ question UI
- Question Bank: filterable admin table
- Analytics: mini bar chart dashboard

**Performance side-stats** (CSS-animated bars): Performance 91 · Accessibility 88 · Best Practices 95

### Interactive UI Demo (06) — NEW
Four live, interactive frontend components:

| Demo | Interaction |
|------|-------------|
| Dashboard Widget | Click Week/Month tabs → animated data transitions |
| Skill Slider | Drag range input → live label, description, visual bar update |
| Sortable Table | Click column headers to sort (asc/desc) · type to filter · status badges |
| Micro-interactions | Like button with burst animation · Copy-to-clipboard · Progress deploy button · Dark mode toggle |

### Currently Building (07) — NEW
**RecastAI** — AI-powered content repurposing SaaS
- Problem / What's built / Next milestone breakdown cards
- Tech stack: React · Tailwind CSS · OpenAI API · Node.js · Supabase
- Animated product mockup with shimmer generate button + animated output lines
- "Get Notified" CTA → links to contact section

### Education (08)
- BCA degree card
- Self-directed learning card

### Why Hire Me (09)
- 4 value-proposition cards with 3D tilt

### Contact (10)
- Contact info panel (email, portfolio, location, response time)
- Social links
- Animated form with validation shake, loading spinner, success state, auto-reset

### Footer
- Logo · copyright · nav links · dynamic year

---

## 🗂 File Structure

```
index.html          — Main single-page portfolio (68 KB, 10 sections)
css/
  style.css         — Complete design system + all section styles (~1,350 lines)
js/
  main.js           — All interactions, animations, demo logic (~420 lines)
images/
  vivek-photo.jpg   — Profile photo (real photo, morphing blob mask)
README.md           — This file
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#080810` |
| Surface | `#0e0e1c` |
| Card | `#121220` |
| Accent Purple | `#6c63ff` |
| Accent Cyan | `#00d4ff` |
| Accent Pink | `#ff5edf` |
| Gradient | `135deg, #6c63ff → #00d4ff` |
| Primary Text | `#f0f0f8` |
| Secondary Text | `#a8a8c8` |
| Heading Font | Space Grotesk |
| Body Font | Inter |
| Mono Font | JetBrains Mono |

**Glassmorphism**: `backdrop-filter: blur(18px)` on navbar and modal overlay  
**Glow effects**: `box-shadow: 0 0 40px rgba(108,99,255,0.22)` on hover  
**Transitions**: `0.35s cubic-bezier(0.4,0,0.2,1)` standard · `0.18s ease` fast

---

## 🔗 Entry Points / Anchor Links

| Section | URL Fragment |
|---------|-------------|
| Hero | `#hero` |
| About | `#about` |
| How I Think | `#thinking` |
| Skills | `#skills` |
| Experience | `#experience` |
| Case Studies | `#projects` |
| UI Demo | `#demo` |
| Currently Building | `#building` |
| Education | `#education` |
| Why Hire Me | `#value` |
| Contact | `#contact` |

---

## 📋 Pre-Publish Checklist

Before deploying, update the following placeholders:

- [ ] **GitHub URL** — replace `https://github.com/` with real profile URL (appears in hero socials, contact section)
- [ ] **LinkedIn URL** — replace `https://linkedin.com/in/` with real profile URL
- [ ] **Twitter URL** — replace `https://twitter.com/` with real handle URL
- [ ] **Resume PDF** — link `href="#"` on "Download Resume" button to actual PDF
- [ ] **Project live links** — update `href="#"` on all case study action buttons
- [ ] **Contact form** — integrate EmailJS (https://www.emailjs.com/) or Formspree (https://formspree.io/) to receive messages
- [ ] **RecastAI URL** — update "Get Notified" link when waitlist is live

---

## 🚀 Deployment

Go to the **Publish tab** to deploy with one click. The Publish tab handles all hosting and provides a live URL automatically.

---

## 🔮 Recommended Next Steps

1. **Add real project screenshots** as image overlays on case study mockups
2. **Connect contact form** via EmailJS (free tier handles 200 emails/month)
3. **Add a testimonials section** — even 2 brief quotes from stakeholders adds significant credibility
4. **Add resume PDF download** — recruiters expect it; link it prominently
5. **Real GitHub/LinkedIn links** — placeholder URLs undermine credibility when reviewers check
6. **Add Open Graph meta tags** — for clean social sharing previews when you share the link in job applications
7. **Consider adding a blog/writing section** — writing demonstrates product thinking and attracts inbound opportunities

---

*Built with vanilla HTML5, CSS3, and JavaScript — no frameworks, no build step, instant load.*
