/* ═══════════════════════════════════════════════════════════
   SELECT10X — Assessment Result Page · Premium Enterprise JS
   Candidate: Omkar Almale · Score: 76/106 · Attempt #1
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ────────────────────────────────────────────────────────────
   0.  MOCK DATA — 25 questions across 7 types
────────────────────────────────────────────────────────────── */
const QUESTIONS = [

  /* ══ 1. MCQ — Correct ══ */
  {
    id: 1, type: 'mcq', section: 'JavaScript', difficulty: 'medium',
    result: 'correct', marks: 4, scored: 4, timeSpent: 72,
    text: 'Which of the following correctly describes the behavior of <code>async/await</code> in JavaScript?',
    options: [
      { id: 'a', text: 'It makes JavaScript truly multi-threaded by running code in parallel.' },
      { id: 'b', text: 'It is syntactic sugar over Promises and allows writing asynchronous code in a synchronous style.', correct: true },
      { id: 'c', text: 'It blocks the main thread until the awaited Promise resolves.' },
      { id: 'd', text: 'It requires the function to return a callback.' },
    ],
    selected: 'b',
  },

  /* ══ 2. MRQ — Partial ══ */
  {
    id: 2, type: 'mrq', section: 'React', difficulty: 'hard',
    result: 'partial', marks: 6, scored: 4, timeSpent: 134,
    text: 'Select ALL React hooks that are part of the official React API and can be used to manage state or side effects:',
    options: [
      { id: 'a', text: 'useState', correct: true },
      { id: 'b', text: 'useEffect', correct: true },
      { id: 'c', text: 'useSubscription', correct: false },
      { id: 'd', text: 'useReducer', correct: true },
      { id: 'e', text: 'useData', correct: false },
      { id: 'f', text: 'useCallback', correct: true },
    ],
    selected: ['a', 'b', 'd'],
  },

  /* ══ 3. Coding — Correct ══ */
  {
    id: 3, type: 'coding', section: 'Algorithms', difficulty: 'hard',
    result: 'correct', marks: 10, scored: 10, timeSpent: 480,
    text: 'Implement a function <code>twoSum(nums, target)</code> that returns indices of the two numbers in the array that add up to target.',
    lang: 'JavaScript',
    candidateCode: `<span class="tok-cmt">// O(n) time, O(n) space</span>
<span class="tok-kw">function</span> <span class="tok-fn">twoSum</span><span class="tok-punct">(</span><span class="tok-var">nums</span><span class="tok-punct">,</span> <span class="tok-var">target</span><span class="tok-punct">) {</span>
  <span class="tok-kw">const</span> <span class="tok-var">map</span> <span class="tok-op">=</span> <span class="tok-kw">new</span> <span class="tok-type">Map</span><span class="tok-punct">();</span>
  <span class="tok-kw">for</span> <span class="tok-punct">(</span><span class="tok-kw">let</span> <span class="tok-var">i</span> <span class="tok-op">=</span> <span class="tok-num">0</span><span class="tok-punct">;</span> <span class="tok-var">i</span> <span class="tok-op">&lt;</span> <span class="tok-var">nums</span><span class="tok-punct">.</span><span class="tok-prop">length</span><span class="tok-punct">;</span> <span class="tok-var">i</span><span class="tok-op">++</span><span class="tok-punct">) {</span>
    <span class="tok-kw">const</span> <span class="tok-var">complement</span> <span class="tok-op">=</span> <span class="tok-var">target</span> <span class="tok-op">-</span> <span class="tok-var">nums</span><span class="tok-punct">[</span><span class="tok-var">i</span><span class="tok-punct">];</span>
    <span class="tok-kw">if</span> <span class="tok-punct">(</span><span class="tok-var">map</span><span class="tok-punct">.</span><span class="tok-fn">has</span><span class="tok-punct">(</span><span class="tok-var">complement</span><span class="tok-punct">)) {</span>
      <span class="tok-kw">return</span> <span class="tok-punct">[</span><span class="tok-var">map</span><span class="tok-punct">.</span><span class="tok-fn">get</span><span class="tok-punct">(</span><span class="tok-var">complement</span><span class="tok-punct">),</span> <span class="tok-var">i</span><span class="tok-punct">];</span>
    <span class="tok-punct">}</span>
    <span class="tok-var">map</span><span class="tok-punct">.</span><span class="tok-fn">set</span><span class="tok-punct">(</span><span class="tok-var">nums</span><span class="tok-punct">[</span><span class="tok-var">i</span><span class="tok-punct">],</span> <span class="tok-var">i</span><span class="tok-punct">);</span>
  <span class="tok-punct">}</span>
  <span class="tok-kw">return</span> <span class="tok-punct">[];</span>
<span class="tok-punct">}</span>`,
    testCases: [
      { input: '[2,7,11,15], 9',   output: '[0,1]',  expected: '[0,1]',  status: 'pass', time: '0ms' },
      { input: '[3,2,4], 6',       output: '[1,2]',  expected: '[1,2]',  status: 'pass', time: '0ms' },
      { input: '[3,3], 6',         output: '[0,1]',  expected: '[0,1]',  status: 'pass', time: '0ms' },
      { input: '[1,5,8,2,9], 10',  output: '[1,3]',  expected: '[1,3]',  status: 'pass', time: '1ms' },
    ],
    complexity: { time: 'O(n)', space: 'O(n)' },
    aiReview: 'Excellent hash map approach. The solution correctly handles all edge cases with optimal time complexity. Clean, readable code with consistent naming conventions.',
  },

  /* ══ 4. MCQ — Correct ══ */
  {
    id: 4, type: 'mcq', section: 'Node.js', difficulty: 'easy',
    result: 'correct', marks: 2, scored: 2, timeSpent: 38,
    text: 'What is the primary purpose of the <code>package.json</code> file in a Node.js project?',
    options: [
      { id: 'a', text: 'It stores the compiled output of the project.' },
      { id: 'b', text: 'It contains project metadata, dependencies, scripts, and configuration.', correct: true },
      { id: 'c', text: 'It acts as the main entry file of the application.' },
      { id: 'd', text: 'It is used only for publishing packages to npm.' },
    ],
    selected: 'b',
  },

  /* ══ 5. Video — Correct ══ */
  {
    id: 5, type: 'video', section: 'System Design', difficulty: 'hard',
    result: 'correct', marks: 15, scored: 14, timeSpent: 312,
    text: 'Design a URL shortening service like bit.ly. Explain the system architecture, database choices, and how you would handle 100M daily requests.',
    videoUrl: null, duration: '5:12', resolution: '1080p', audioClarity: 'Clear',
    transcript: `"I'd approach this as a distributed system. First, the core service needs a <mark>unique key generation</mark> strategy — I'd use base62 encoding on a counter to keep URLs short and readable. For the database, I'd split the concern: <mark>Redis for hot URL cache</mark> with sub-millisecond reads, and <mark>Cassandra for persistent storage</mark> since write throughput matters more than complex queries here. The application tier would be stateless Node.js services behind a load balancer. For 100M daily requests that's roughly 1,200 requests per second average, with maybe 3-4x spike capacity needed. CDN edge caching for popular short URLs gets us 80% cache hit rate..."`,
    evalCriteria: [
      { label: 'System Thinking',       score: 95 },
      { label: 'Communication',         score: 90 },
      { label: 'Technical Depth',       score: 88 },
      { label: 'Scalability Reasoning', score: 92 },
      { label: 'Trade-off Analysis',    score: 85 },
    ],
  },

  /* ══ 6. Tabular — Correct ══ */
  {
    id: 6, type: 'tabular', section: 'Databases', difficulty: 'medium',
    result: 'correct', marks: 8, scored: 8, timeSpent: 95,
    text: 'Match each SQL query operation with its correct Big-O time complexity assuming a B-tree index exists on the queried column:',
    columns: ['Operation', 'Your Answer', 'Expected'],
    rows: [
      { label: 'SELECT with indexed column (WHERE id = ?)', candidate: 'O(log n)',    expected: 'O(log n)',    correct: true },
      { label: 'Full table scan (no index)',                candidate: 'O(n)',         expected: 'O(n)',        correct: true },
      { label: 'INSERT into indexed table',                 candidate: 'O(log n)',    expected: 'O(log n)',    correct: true },
      { label: 'ORDER BY on unindexed column',              candidate: 'O(n log n)',  expected: 'O(n log n)', correct: true },
      { label: 'COUNT(*) on entire table',                  candidate: 'O(n)',        expected: 'O(n)',        correct: true },
    ],
  },

  /* ══ 7. FITB — Correct ══ */
  {
    id: 7, type: 'fitb', section: 'JavaScript', difficulty: 'easy',
    result: 'correct', marks: 4, scored: 4, timeSpent: 52,
    text: 'Complete the following sentences about JavaScript closures and event loop:',
    blanks: [
      { before: 'A closure is a function that has access to its outer scope even after the outer function has', candidate: 'returned', correct: 'returned', isCorrect: true, after: '.' },
      { before: 'The JavaScript event loop processes tasks from the', candidate: 'callback queue', correct: 'callback queue', isCorrect: true, after: 'after the call stack is empty.' },
      { before: 'Promises are resolved in the', candidate: 'microtask queue', correct: 'microtask queue', isCorrect: true, after: ', which has higher priority than the macrotask queue.' },
    ],
  },

  /* ══ 8. Descriptive — Correct ══ */
  {
    id: 8, type: 'descriptive', section: 'Architecture', difficulty: 'hard',
    result: 'correct', marks: 12, scored: 11, timeSpent: 385,
    text: 'Explain the key differences between monolithic and microservices architectures. When would you choose one over the other?',
    candidateResponse: `A monolithic architecture packages all application functionality into a single deployable unit. While this simplifies development and deployment initially, it becomes problematic as the codebase grows — any change requires redeploying the entire application, scaling is all-or-nothing, and different teams can create coupling issues.

Microservices break the application into small, independently deployable services each owning its domain. Benefits include independent scaling (scale only the checkout service during sales), technology flexibility (use Python for ML, Go for high-throughput APIs), team autonomy, and fault isolation.

I'd choose monolithic for: early-stage startups where speed matters, small teams, or when domain boundaries aren't clear yet. Microservices make sense when: you have clear domain boundaries, multiple teams that need autonomy, different scaling requirements per service, or when you need to adopt different tech stacks for different problems.

The main challenges with microservices are distributed tracing, eventual consistency, and network latency — you're trading simplicity for flexibility.`,
    rubricRows: [
      { criterion: 'Definition accuracy',   max: 3, scored: 3 },
      { criterion: 'Trade-off analysis',    max: 3, scored: 3 },
      { criterion: 'Practical examples',    max: 2, scored: 2 },
      { criterion: 'When to use each',      max: 2, scored: 2 },
      { criterion: 'Challenges mentioned',  max: 2, scored: 1 },
    ],
    feedback: 'Excellent answer covering core concepts, trade-offs, and practical decision criteria. Could have elaborated more on the operational challenges of microservices like service discovery and distributed transactions.',
  },

  /* ══ 9. MCQ — Wrong ══ */
  {
    id: 9, type: 'mcq', section: 'Databases', difficulty: 'medium',
    result: 'wrong', marks: 4, scored: 0, timeSpent: 68,
    text: 'Which isolation level in SQL prevents "phantom reads" but allows "non-repeatable reads"?',
    options: [
      { id: 'a', text: 'READ UNCOMMITTED' },
      { id: 'b', text: 'READ COMMITTED', correct: false },
      { id: 'c', text: 'REPEATABLE READ', correct: true },
      { id: 'd', text: 'SERIALIZABLE' },
    ],
    selected: 'b',
  },

  /* ══ 10. Coding — Correct ══ */
  {
    id: 10, type: 'coding', section: 'React', difficulty: 'medium',
    result: 'correct', marks: 8, scored: 8, timeSpent: 340,
    text: 'Create a custom React hook <code>useDebounce(value, delay)</code> that debounces a value by the given delay in milliseconds.',
    lang: 'TypeScript',
    candidateCode: `<span class="tok-kw">import</span> <span class="tok-punct">{</span> <span class="tok-prop">useState</span><span class="tok-punct">,</span> <span class="tok-prop">useEffect</span> <span class="tok-punct">}</span> <span class="tok-kw">from</span> <span class="tok-str">'react'</span><span class="tok-punct">;</span>

<span class="tok-kw">function</span> <span class="tok-fn">useDebounce</span><span class="tok-punct">&lt;</span><span class="tok-type">T</span><span class="tok-punct">&gt;(</span><span class="tok-var">value</span><span class="tok-punct">:</span> <span class="tok-type">T</span><span class="tok-punct">,</span> <span class="tok-var">delay</span><span class="tok-punct">:</span> <span class="tok-type">number</span><span class="tok-punct">):</span> <span class="tok-type">T</span> <span class="tok-punct">{</span>
  <span class="tok-kw">const</span> <span class="tok-punct">[</span><span class="tok-var">debouncedValue</span><span class="tok-punct">,</span> <span class="tok-var">setDebouncedValue</span><span class="tok-punct">]</span> <span class="tok-op">=</span>
    <span class="tok-fn">useState</span><span class="tok-punct">&lt;</span><span class="tok-type">T</span><span class="tok-punct">&gt;(</span><span class="tok-var">value</span><span class="tok-punct">);</span>

  <span class="tok-fn">useEffect</span><span class="tok-punct">(() =&gt; {</span>
    <span class="tok-kw">const</span> <span class="tok-var">timer</span> <span class="tok-op">=</span> <span class="tok-fn">setTimeout</span><span class="tok-punct">(() =&gt; {</span>
      <span class="tok-fn">setDebouncedValue</span><span class="tok-punct">(</span><span class="tok-var">value</span><span class="tok-punct">);</span>
    <span class="tok-punct">},</span> <span class="tok-var">delay</span><span class="tok-punct">);</span>
    <span class="tok-kw">return</span> <span class="tok-punct">() =&gt;</span> <span class="tok-fn">clearTimeout</span><span class="tok-punct">(</span><span class="tok-var">timer</span><span class="tok-punct">);</span>
  <span class="tok-punct">},</span> <span class="tok-punct">[</span><span class="tok-var">value</span><span class="tok-punct">,</span> <span class="tok-var">delay</span><span class="tok-punct">]);</span>

  <span class="tok-kw">return</span> <span class="tok-var">debouncedValue</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>

<span class="tok-kw">export default</span> <span class="tok-var">useDebounce</span><span class="tok-punct">;</span>`,
    testCases: [
      { input: '"search", 300ms',            output: 'Returns "search" after 300ms', expected: 'Debounced value', status: 'pass', time: '2ms' },
      { input: 'Rapid updates within 300ms', output: 'Only last value emitted',      expected: 'Last value only', status: 'pass', time: '1ms' },
      { input: 'Cleanup on unmount',         output: 'Timer cleared',                expected: 'No memory leak',  status: 'pass', time: '0ms' },
    ],
    complexity: { time: 'O(1)', space: 'O(1)' },
    aiReview: 'Clean, idiomatic TypeScript with proper generic typing. Cleanup function correctly prevents memory leaks. Handles edge cases well.',
  },

  /* ══ 11. MCQ — Correct ══ */
  {
    id: 11, type: 'mcq', section: 'CSS', difficulty: 'easy',
    result: 'correct', marks: 2, scored: 2, timeSpent: 29,
    text: 'In CSS Flexbox, which property controls the alignment of items along the cross axis?',
    options: [
      { id: 'a', text: 'justify-content' },
      { id: 'b', text: 'align-content' },
      { id: 'c', text: 'align-items', correct: true },
      { id: 'd', text: 'flex-direction' },
    ],
    selected: 'c',
  },

  /* ══ 12. Tabular — Correct ══ */
  {
    id: 12, type: 'tabular', section: 'Node.js', difficulty: 'medium',
    result: 'correct', marks: 6, scored: 6, timeSpent: 88,
    text: 'Fill in the correct HTTP status codes for the scenarios below:',
    columns: ['Scenario', 'Your Answer', 'Expected'],
    rows: [
      { label: 'Resource successfully created (POST)',    candidate: '201', expected: '201', correct: true },
      { label: 'Resource not found',                      candidate: '404', expected: '404', correct: true },
      { label: 'Unauthorized (not authenticated)',        candidate: '401', expected: '401', correct: true },
      { label: 'Forbidden (authenticated but no access)', candidate: '403', expected: '403', correct: true },
      { label: 'Request body validation failed',          candidate: '422', expected: '422', correct: true },
      { label: 'Internal server error',                   candidate: '500', expected: '500', correct: true },
    ],
  },

  /* ══ 13. MRQ — Correct ══ */
  {
    id: 13, type: 'mrq', section: 'React', difficulty: 'medium',
    result: 'correct', marks: 6, scored: 6, timeSpent: 98,
    text: 'Which of the following are valid ways to pass data from a parent component to a child component in React?',
    options: [
      { id: 'a', text: 'Props (direct property passing)', correct: true },
      { id: 'b', text: 'Context API',                     correct: true },
      { id: 'c', text: 'Using window.globalVar',          correct: false },
      { id: 'd', text: 'Redux store (via Provider)',       correct: true },
      { id: 'e', text: 'Directly mutating child state from parent', correct: false },
    ],
    selected: ['a', 'b', 'd'],
  },

  /* ══ 14. FITB — Correct ══ */
  {
    id: 14, type: 'fitb', section: 'CSS', difficulty: 'easy',
    result: 'correct', marks: 3, scored: 3, timeSpent: 44,
    text: 'Fill in the CSS Grid properties:',
    blanks: [
      { before: 'To create a 3-column grid with equal width columns, you would use:', candidate: 'grid-template-columns: repeat(3, 1fr)', correct: 'grid-template-columns: repeat(3, 1fr)', isCorrect: true, after: '.' },
      { before: 'The shorthand property for both row and column gaps in a grid is', candidate: 'gap', correct: 'gap', isCorrect: true, after: '.' },
    ],
  },

  /* ══ 15. MCQ — Correct ══ */
  {
    id: 15, type: 'mcq', section: 'JavaScript', difficulty: 'medium',
    result: 'correct', marks: 4, scored: 4, timeSpent: 55,
    text: 'What will <code>console.log(typeof null)</code> output in JavaScript?',
    options: [
      { id: 'a', text: '"null"' },
      { id: 'b', text: '"undefined"' },
      { id: 'c', text: '"object"', correct: true },
      { id: 'd', text: '"symbol"' },
    ],
    selected: 'c',
  },

  /* ══ 16. Coding — Correct ══ */
  {
    id: 16, type: 'coding', section: 'Algorithms', difficulty: 'medium',
    result: 'correct', marks: 8, scored: 8, timeSpent: 290,
    text: 'Implement a function <code>deepClone(obj)</code> that performs a deep clone of a JavaScript object (handle nested objects, arrays, and primitive types).',
    lang: 'JavaScript',
    candidateCode: `<span class="tok-kw">function</span> <span class="tok-fn">deepClone</span><span class="tok-punct">(</span><span class="tok-var">obj</span><span class="tok-punct">) {</span>
  <span class="tok-cmt">// Handle primitives and null</span>
  <span class="tok-kw">if</span> <span class="tok-punct">(</span><span class="tok-var">obj</span> <span class="tok-op">===</span> <span class="tok-kw">null</span> <span class="tok-op">||</span> <span class="tok-kw">typeof</span> <span class="tok-var">obj</span> <span class="tok-op">!==</span> <span class="tok-str">'object'</span><span class="tok-punct">)</span> <span class="tok-kw">return</span> <span class="tok-var">obj</span><span class="tok-punct">;</span>
  <span class="tok-kw">if</span> <span class="tok-punct">(</span><span class="tok-type">Array</span><span class="tok-punct">.</span><span class="tok-fn">isArray</span><span class="tok-punct">(</span><span class="tok-var">obj</span><span class="tok-punct">))</span>
    <span class="tok-kw">return</span> <span class="tok-var">obj</span><span class="tok-punct">.</span><span class="tok-fn">map</span><span class="tok-punct">(</span><span class="tok-var">item</span> <span class="tok-op">=&gt;</span> <span class="tok-fn">deepClone</span><span class="tok-punct">(</span><span class="tok-var">item</span><span class="tok-punct">));</span>
  <span class="tok-kw">if</span> <span class="tok-punct">(</span><span class="tok-var">obj</span> <span class="tok-kw">instanceof</span> <span class="tok-type">Date</span><span class="tok-punct">)</span>
    <span class="tok-kw">return</span> <span class="tok-kw">new</span> <span class="tok-type">Date</span><span class="tok-punct">(</span><span class="tok-var">obj</span><span class="tok-punct">.</span><span class="tok-fn">getTime</span><span class="tok-punct">());</span>
  <span class="tok-kw">const</span> <span class="tok-var">clone</span> <span class="tok-op">=</span> <span class="tok-punct">{};</span>
  <span class="tok-kw">for</span> <span class="tok-punct">(</span><span class="tok-kw">const</span> <span class="tok-var">key</span> <span class="tok-kw">in</span> <span class="tok-var">obj</span><span class="tok-punct">) {</span>
    <span class="tok-kw">if</span> <span class="tok-punct">(</span><span class="tok-type">Object</span><span class="tok-punct">.</span><span class="tok-prop">prototype</span><span class="tok-punct">.</span><span class="tok-fn">hasOwnProperty</span><span class="tok-punct">.</span><span class="tok-fn">call</span><span class="tok-punct">(</span><span class="tok-var">obj</span><span class="tok-punct">,</span> <span class="tok-var">key</span><span class="tok-punct">)) {</span>
      <span class="tok-var">clone</span><span class="tok-punct">[</span><span class="tok-var">key</span><span class="tok-punct">]</span> <span class="tok-op">=</span> <span class="tok-fn">deepClone</span><span class="tok-punct">(</span><span class="tok-var">obj</span><span class="tok-punct">[</span><span class="tok-var">key</span><span class="tok-punct">]);</span>
    <span class="tok-punct">}</span>
  <span class="tok-punct">}</span>
  <span class="tok-kw">return</span> <span class="tok-var">clone</span><span class="tok-punct">;</span>
<span class="tok-punct">}</span>`,
    testCases: [
      { input: '{ a: 1, b: { c: 2 } }',              output: 'New object, same values', expected: 'Deep clone',       status: 'pass', time: '0ms' },
      { input: '[1, [2, 3], {d: 4}]',                 output: 'Deep cloned array',       expected: 'Deep clone',       status: 'pass', time: '0ms' },
      { input: 'Mutate original → clone unchanged',   output: 'Clone unaffected',        expected: 'No reference share', status: 'pass', time: '0ms' },
    ],
    complexity: { time: 'O(n)', space: 'O(n)' },
    aiReview: 'Well-structured recursive approach with correct handling of arrays, dates, and objects. Good use of hasOwnProperty for safety.',
  },

  /* ══ 17. Descriptive — Correct ══ */
  {
    id: 17, type: 'descriptive', section: 'Security', difficulty: 'medium',
    result: 'correct', marks: 8, scored: 8, timeSpent: 210,
    text: 'Explain what Cross-Site Scripting (XSS) is, the different types, and how to prevent it in a React/Node.js application.',
    candidateResponse: `XSS is a security vulnerability where attackers inject malicious scripts into web pages viewed by other users. There are three main types:

1. Reflected XSS: Malicious script is reflected from the server in the HTTP response (e.g., from URL params). Not stored.
2. Stored XSS: Malicious script is stored in the database and served to every user who views the content.
3. DOM-based XSS: Vulnerability exists entirely in client-side code without server involvement.

Prevention in React/Node.js:
- React automatically escapes JSX expressions, preventing most XSS
- Never use dangerouslySetInnerHTML unless absolutely necessary, and sanitize with DOMPurify if you must
- On the backend, use helmet.js for security headers including Content-Security-Policy
- Validate and sanitize all inputs server-side using libraries like express-validator
- Use HttpOnly cookies to prevent JavaScript access to session tokens
- Implement CSP headers to restrict which scripts can execute`,
    rubricRows: [
      { criterion: 'XSS definition',             max: 2, scored: 2 },
      { criterion: 'Types (Reflected/Stored/DOM)',max: 2, scored: 2 },
      { criterion: 'React-specific prevention',   max: 2, scored: 2 },
      { criterion: 'Backend prevention',          max: 2, scored: 2 },
    ],
    feedback: 'Comprehensive answer covering all three XSS types with correct explanations. Practical prevention strategies are well-articulated and framework-specific.',
  },

  /* ══ 18. MCQ — Correct ══ */
  {
    id: 18, type: 'mcq', section: 'JavaScript', difficulty: 'medium',
    result: 'correct', marks: 4, scored: 4, timeSpent: 47,
    text: 'What is the output of: <code>console.log(0.1 + 0.2 === 0.3)</code>?',
    options: [
      { id: 'a', text: 'true' },
      { id: 'b', text: 'false', correct: true },
      { id: 'c', text: 'NaN' },
      { id: 'd', text: 'undefined' },
    ],
    selected: 'b',
  },

  /* ══ 19. Tabular — Correct ══ */
  {
    id: 19, type: 'tabular', section: 'React', difficulty: 'medium',
    result: 'correct', marks: 6, scored: 6, timeSpent: 76,
    text: 'Match each React lifecycle concept to its hook equivalent:',
    columns: ['Lifecycle Concept', 'Your Answer', 'Expected'],
    rows: [
      { label: 'componentDidMount',    candidate: 'useEffect(fn, [])',           expected: 'useEffect(fn, [])',       correct: true },
      { label: 'componentDidUpdate',   candidate: 'useEffect(fn, [deps])',       expected: 'useEffect(fn, [deps])',   correct: true },
      { label: 'componentWillUnmount', candidate: 'useEffect(() => () => {}, [])', expected: 'useEffect cleanup fn', correct: true },
      { label: 'shouldComponentUpdate',candidate: 'React.memo / useMemo',        expected: 'React.memo',             correct: true },
    ],
  },

  /* ══ 20. FITB — Correct ══ */
  {
    id: 20, type: 'fitb', section: 'Node.js', difficulty: 'medium',
    result: 'correct', marks: 4, scored: 4, timeSpent: 63,
    text: 'Fill in the blanks about Node.js core concepts:',
    blanks: [
      { before: 'Node.js uses a single-threaded', candidate: 'event loop', correct: 'event loop', isCorrect: true, after: 'to handle concurrent operations.' },
      { before: 'The', candidate: 'libuv', correct: 'libuv', isCorrect: true, after: 'library provides Node.js with asynchronous I/O capabilities.' },
      { before: 'CPU-intensive tasks should be offloaded to', candidate: 'worker threads', correct: 'worker threads', isCorrect: true, after: 'to avoid blocking the event loop.' },
    ],
  },

  /* ══ 21. MCQ — Wrong ══ */
  {
    id: 21, type: 'mcq', section: 'Databases', difficulty: 'hard',
    result: 'wrong', marks: 4, scored: 0, timeSpent: 82,
    text: 'In Redis, which data structure is most efficient for implementing a leaderboard that requires range queries by score?',
    options: [
      { id: 'a', text: 'Hash' },
      { id: 'b', text: 'List' },
      { id: 'c', text: 'Set' },
      { id: 'd', text: 'Sorted Set (ZSET)', correct: true },
    ],
    selected: 'c',
  },

  /* ══ 22. MRQ — Correct ══ */
  {
    id: 22, type: 'mrq', section: 'Security', difficulty: 'medium',
    result: 'correct', marks: 6, scored: 6, timeSpent: 104,
    text: 'Which of the following are valid techniques to prevent SQL Injection attacks?',
    options: [
      { id: 'a', text: 'Using prepared statements / parameterized queries', correct: true },
      { id: 'b', text: 'Input validation and sanitization',                 correct: true },
      { id: 'c', text: 'Using an ORM (like Prisma or Sequelize)',           correct: true },
      { id: 'd', text: 'Storing passwords in plain text',                   correct: false },
      { id: 'e', text: 'Least privilege database accounts',                 correct: true },
    ],
    selected: ['a', 'b', 'c', 'e'],
  },

  /* ══ 23. Video — Correct ══ */
  {
    id: 23, type: 'video', section: 'Behavioral', difficulty: 'medium',
    result: 'correct', marks: 10, scored: 9, timeSpent: 245,
    text: 'Describe a challenging technical problem you solved in your previous role. Walk us through your debugging process and the outcome.',
    videoUrl: null, duration: '4:05', resolution: '720p', audioClarity: 'Good',
    transcript: `"In my last role we had a <mark>memory leak in production</mark> that was causing our Node.js servers to restart every 3 hours. I first used the Chrome DevTools heap profiler to take snapshots before and after a suspected memory-intensive operation. The diff showed that <mark>event listeners weren't being cleaned up</mark> after WebSocket disconnections. The fix was straightforward once identified — adding proper removeListener calls in the disconnect handler. We also implemented automated heap monitoring with alerts. The server restarts stopped completely after deployment."`,
    evalCriteria: [
      { label: 'Problem Clarity',   score: 92 },
      { label: 'Debug Methodology', score: 95 },
      { label: 'Solution Quality',  score: 88 },
      { label: 'Communication',     score: 85 },
      { label: 'Learnings',         score: 80 },
    ],
  },

  /* ══ 24. Coding — Correct ══ */
  {
    id: 24, type: 'coding', section: 'JavaScript', difficulty: 'medium',
    result: 'correct', marks: 6, scored: 6, timeSpent: 198,
    text: 'Implement <code>Promise.allSettled()</code> from scratch without using the native method.',
    lang: 'JavaScript',
    candidateCode: `<span class="tok-kw">function</span> <span class="tok-fn">allSettled</span><span class="tok-punct">(</span><span class="tok-var">promises</span><span class="tok-punct">) {</span>
  <span class="tok-kw">return</span> <span class="tok-kw">new</span> <span class="tok-type">Promise</span><span class="tok-punct">((</span><span class="tok-var">resolve</span><span class="tok-punct">) =&gt; {</span>
    <span class="tok-kw">const</span> <span class="tok-var">results</span> <span class="tok-op">=</span> <span class="tok-punct">[];</span>
    <span class="tok-kw">let</span> <span class="tok-var">settled</span> <span class="tok-op">=</span> <span class="tok-num">0</span><span class="tok-punct">;</span>
    <span class="tok-kw">if</span> <span class="tok-punct">(</span><span class="tok-var">promises</span><span class="tok-punct">.</span><span class="tok-prop">length</span> <span class="tok-op">===</span> <span class="tok-num">0</span><span class="tok-punct">)</span> <span class="tok-kw">return</span> <span class="tok-fn">resolve</span><span class="tok-punct">([]);</span>
    <span class="tok-var">promises</span><span class="tok-punct">.</span><span class="tok-fn">forEach</span><span class="tok-punct">((</span><span class="tok-var">p</span><span class="tok-punct">,</span> <span class="tok-var">i</span><span class="tok-punct">) =&gt; {</span>
      <span class="tok-type">Promise</span><span class="tok-punct">.</span><span class="tok-fn">resolve</span><span class="tok-punct">(</span><span class="tok-var">p</span><span class="tok-punct">)</span>
        <span class="tok-punct">.</span><span class="tok-fn">then</span><span class="tok-punct">(</span><span class="tok-var">value</span> <span class="tok-op">=&gt;</span> <span class="tok-punct">{</span>
          <span class="tok-var">results</span><span class="tok-punct">[</span><span class="tok-var">i</span><span class="tok-punct">]</span> <span class="tok-op">=</span> <span class="tok-punct">{</span> <span class="tok-prop">status</span><span class="tok-punct">:</span> <span class="tok-str">'fulfilled'</span><span class="tok-punct">,</span> <span class="tok-var">value</span> <span class="tok-punct">};</span>
        <span class="tok-punct">})</span>
        <span class="tok-punct">.</span><span class="tok-fn">catch</span><span class="tok-punct">(</span><span class="tok-var">reason</span> <span class="tok-op">=&gt;</span> <span class="tok-punct">{</span>
          <span class="tok-var">results</span><span class="tok-punct">[</span><span class="tok-var">i</span><span class="tok-punct">]</span> <span class="tok-op">=</span> <span class="tok-punct">{</span> <span class="tok-prop">status</span><span class="tok-punct">:</span> <span class="tok-str">'rejected'</span><span class="tok-punct">,</span> <span class="tok-var">reason</span> <span class="tok-punct">};</span>
        <span class="tok-punct">})</span>
        <span class="tok-punct">.</span><span class="tok-fn">finally</span><span class="tok-punct">(() =&gt; {</span>
          <span class="tok-kw">if</span> <span class="tok-punct">(++</span><span class="tok-var">settled</span> <span class="tok-op">===</span> <span class="tok-var">promises</span><span class="tok-punct">.</span><span class="tok-prop">length</span><span class="tok-punct">)</span> <span class="tok-fn">resolve</span><span class="tok-punct">(</span><span class="tok-var">results</span><span class="tok-punct">);</span>
        <span class="tok-punct">});</span>
    <span class="tok-punct">});</span>
  <span class="tok-punct">});</span>
<span class="tok-punct">}</span>`,
    testCases: [
      { input: '[resolved, rejected, resolved]', output: 'Array of 3 settlement objects', expected: 'All 3 settled',  status: 'pass', time: '2ms' },
      { input: 'Empty array []',                 output: '[]',                             expected: '[]',             status: 'pass', time: '0ms' },
      { input: 'All rejected',                   output: 'All with rejected status',       expected: 'Never throws',   status: 'pass', time: '1ms' },
    ],
    complexity: { time: 'O(n)', space: 'O(n)' },
    aiReview: 'Correct implementation with proper index tracking and edge case handling for empty arrays. Clean use of .finally() for counter increment.',
  },

  /* ══ 25. Descriptive — Correct ══ */
  {
    id: 25, type: 'descriptive', section: 'DevOps', difficulty: 'medium',
    result: 'correct', marks: 8, scored: 6, timeSpent: 160,
    text: 'Describe the key stages of a CI/CD pipeline for a full-stack Node.js + React application. What tools would you use at each stage?',
    candidateResponse: `A typical CI/CD pipeline for a Node.js + React app would include:

1. Source Control Trigger: GitHub/GitLab webhook triggers pipeline on PR or push to main.
2. Build Stage: Run npm install, build React app (npm run build), compile TypeScript if used.
3. Test Stage: Unit tests (Jest), integration tests, end-to-end tests (Playwright/Cypress), code coverage report.
4. Code Quality: ESLint, Prettier checks, SonarQube for code quality gates.
5. Security Scan: npm audit, Snyk for dependency vulnerabilities, SAST scanning.
6. Docker Build: Build and tag Docker image, push to registry (ECR or Docker Hub).
7. Deploy to Staging: Deploy via Kubernetes or ECS, run smoke tests.
8. Deploy to Production: Blue-green or rolling deployment, health checks, automatic rollback on failure.
9. Monitoring: Datadog or New Relic alerts post-deploy.`,
    rubricRows: [
      { criterion: 'Stage identification',    max: 3, scored: 3 },
      { criterion: 'Tool knowledge',          max: 2, scored: 2 },
      { criterion: 'Testing strategy',        max: 2, scored: 1 },
      { criterion: 'Deployment strategies',   max: 1, scored: 0 },
    ],
    feedback: 'Good overview of CI/CD stages with relevant tooling. Missing depth on deployment strategies (blue-green, canary) and rollback mechanisms. Security scanning stage is a great addition.',
  },
];

/* ────────────────────────────────────────────────────────────
   1.  STATE
────────────────────────────────────────────────────────────── */
const S = {
  activeTab:   'questions',
  qFilter:     'all',
  typeFilter:  'all',
  searchQuery: '',
};

/* ────────────────────────────────────────────────────────────
   2.  DOM READY
────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initScoreRing();
  initKPICounters();
  renderSkillBars();
  renderQNavigator();
  renderQuestions();
  initTabSwitcher();
  initQuestionFilters();
  renderSnapsPreview();
  initViewSnapshotsBtn();
  initPrintShare();
  console.log('✓ Select10X Assessment Result — Premium Edition loaded');
});

/* ────────────────────────────────────────────────────────────
   3.  SCROLL PROGRESS BAR
────────────────────────────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  }, { passive: true });
}

/* ────────────────────────────────────────────────────────────
   4.  SCORE RING ANIMATION
   SVG radius = 56  →  circumference = 2 × π × 56 ≈ 351.86 ≈ 352
────────────────────────────────────────────────────────────── */
function initScoreRing() {
  const ring  = document.getElementById('ringFill');
  const valEl = document.getElementById('ringVal');
  const pctEl = document.getElementById('ringPct');
  if (!ring) return;

  const targetScore   = 76;
  const maxScore      = 106;
  const circumference = 352;  // 2π × 56
  const targetOffset  = circumference - (targetScore / maxScore) * circumference;

  // Trigger fill animation via double-rAF (ensures transition fires)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ring.style.strokeDashoffset = targetOffset;
    });
  });

  // Counter animations
  if (valEl) animateCounter(valEl, 0, targetScore, 1400);
  if (pctEl) {
    setTimeout(() => {
      animateCounter(pctEl, 0, 71, 1500, '', () => {
        pctEl.textContent = '71.7%';
      });
    }, 100);
  }
}

/* ────────────────────────────────────────────────────────────
   5.  KPI COUNTER ANIMATIONS
   Targets: #kpiCorrect (data-count=12), #kpiWrong (data-count=5),
            #kpiPct (data-count=76 data-suffix="%")
────────────────────────────────────────────────────────────── */
function initKPICounters() {
  const targets = [
    { id: 'kpiCorrect', count: 12, suffix: '' },
    { id: 'kpiWrong',   count: 5,  suffix: '' },
    { id: 'kpiPct',     count: 76, suffix: '%' },
  ];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const cfg = targets.find(t => t.id === el.id);
      if (cfg) animateCounter(el, 0, cfg.count, 1200, cfg.suffix);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  targets.forEach(t => {
    const el = document.getElementById(t.id);
    if (el) observer.observe(el);
  });
}

/* ────────────────────────────────────────────────────────────
   UTILITY: animateCounter
   onComplete callback is optional, fires when animation ends
────────────────────────────────────────────────────────────── */
function animateCounter(el, from, to, duration, suffix = '', onComplete) {
  const startTime = performance.now();
  const easeOut   = t => 1 - Math.pow(1 - t, 3);
  function tick(now) {
    const t = Math.min((now - startTime) / duration, 1);
    el.textContent = Math.round(from + (to - from) * easeOut(t)) + suffix;
    if (t < 1) {
      requestAnimationFrame(tick);
    } else if (onComplete) {
      onComplete();
    }
  }
  requestAnimationFrame(tick);
}

/* ────────────────────────────────────────────────────────────
   6.  QUESTION NAVIGATOR (sidebar)
────────────────────────────────────────────────────────────── */
const TYPE_COLORS = {
  mcq: '#2563EB', mrq: '#7C3AED', coding: '#F97316',
  video: '#DC2626', tabular: '#0891B2', fitb: '#D97706', descriptive: '#16A34A',
};

function renderQNavigator() {
  const nav = document.getElementById('qNavigator');
  if (!nav) return;

  const tipMap = {
    mcq: 'MCQ', mrq: 'Multiple Response', coding: 'Coding',
    video: 'Video', tabular: 'Tabular', fitb: 'Fill in Blank', descriptive: 'Descriptive',
  };

  nav.innerHTML = QUESTIONS.map(q => `
    <button class="qnav-btn ${q.result}" data-qid="${q.id}"
            title="Q${q.id} · ${tipMap[q.type]}">
      ${q.id}
      <span class="type-dot" style="background:${TYPE_COLORS[q.type]}"></span>
    </button>`).join('');

  nav.addEventListener('click', e => {
    const btn = e.target.closest('.qnav-btn');
    if (!btn) return;

    // Activate tab-questions first if not active
    if (S.activeTab !== 'questions') switchTab('questions');

    nav.querySelectorAll('.qnav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const qid   = parseInt(btn.dataset.qid, 10);
    const qCard = document.getElementById('q-card-' + qid);
    if (qCard) {
      qCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      qCard.classList.add('highlight-flash');
      setTimeout(() => qCard.classList.remove('highlight-flash'), 1600);
    }
  });
}

/* ────────────────────────────────────────────────────────────
   7.  SKILL BARS (sidebar)
────────────────────────────────────────────────────────────── */
const SKILLS = [
  { name: 'React / Frontend',  pct: 95, tier: 'high' },
  { name: 'Node.js / Backend', pct: 92, tier: 'high' },
  { name: 'JavaScript Core',   pct: 90, tier: 'high' },
  { name: 'Algorithms & DS',   pct: 88, tier: 'high' },
  { name: 'System Design',     pct: 86, tier: 'high' },
  { name: 'Security',          pct: 82, tier: 'high' },
  { name: 'Databases',         pct: 74, tier: 'mid'  },
  { name: 'DevOps / CI-CD',    pct: 68, tier: 'low'  },
];

function renderSkillBars() {
  const container = document.getElementById('skillBars');
  if (!container) return;

  container.innerHTML = SKILLS.map(s => `
    <div class="skill-bar-item">
      <div class="skill-bar-top">
        <span class="skill-bar-name">${s.name}</span>
        <span class="skill-bar-pct">${s.pct}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill ${s.tier}" style="width:0%" data-target="${s.pct}%"></div>
      </div>
    </div>`).join('');

  // Animate fills with IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.skill-bar-fill').forEach(f => {
        const target = f.dataset.target;
        requestAnimationFrame(() => {
          f.style.transition = 'width 0.9s cubic-bezier(0.4,0,0.2,1)';
          f.style.width = target;
        });
      });
      observer.unobserve(e.target);
    });
  }, { threshold: 0.2 });

  observer.observe(container);
}

/* ────────────────────────────────────────────────────────────
   8.  SNAP MINI PREVIEW (sidebar integrity widget)
   Renders 6 placeholder thumbnails into #snapsPreview
────────────────────────────────────────────────────────────── */
function renderSnapsPreview() {
  const container = document.getElementById('snapsPreview');
  if (!container) return;

  // Show first 6 snapshots from generated list
  const preview = SNAPSHOTS.slice(0, 6);
  container.innerHTML = preview.map((s, idx) => `
    <div class="snap-mini" style="animation-delay:${idx * 60}ms"
         title="Snapshot ${s.id} · ${s.timestamp}">
      <div class="snap-mini-img"></div>
    </div>`).join('');
}

/* ────────────────────────────────────────────────────────────
   9.  VIEW ALL SNAPSHOTS BUTTON
────────────────────────────────────────────────────────────── */
function initViewSnapshotsBtn() {
  const btn = document.getElementById('viewSnapshotsBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    switchTab('snapshots');
    // Scroll to tabs bar
    const tabsBar = document.getElementById('resultTabs');
    if (tabsBar) tabsBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ────────────────────────────────────────────────────────────
   10. QUESTION RENDERING
────────────────────────────────────────────────────────────── */
function getFilteredQuestions() {
  return QUESTIONS.filter(q => {
    const passResult = S.qFilter === 'all' || q.result === S.qFilter;
    const passType   = S.typeFilter === 'all' || q.type === S.typeFilter;
    const passSearch = !S.searchQuery || q.text.toLowerCase().includes(S.searchQuery.toLowerCase());
    return passResult && passType && passSearch;
  });
}

function renderQuestions() {
  const list = document.getElementById('questionList');
  if (!list) return;
  const qs = getFilteredQuestions();

  if (qs.length === 0) {
    list.innerHTML = `<div class="q-empty-state">
      <i class="fa-solid fa-circle-question"></i>
      <p>No questions match the current filters.</p>
    </div>`;
    return;
  }

  list.innerHTML = qs.map((q, idx) => buildQuestionCard(q, idx)).join('');
}

function buildQuestionCard(q, idx) {
  const typeLabel = {
    mcq: 'MCQ', mrq: 'Multiple Response', coding: 'Coding',
    video: 'Video', tabular: 'Tabular', fitb: 'Fill in Blank', descriptive: 'Descriptive',
  }[q.type];

  const scoreIcon = q.result === 'correct' ? 'fa-check' : q.result === 'wrong' ? 'fa-xmark' : 'fa-minus';
  const timeStr   = q.timeSpent >= 60
    ? `${Math.floor(q.timeSpent / 60)}m ${q.timeSpent % 60}s`
    : `${q.timeSpent}s`;

  return `<div class="q-card ${q.result}" id="q-card-${q.id}" style="animation-delay:${idx * 25}ms">
    <div class="q-card-head">
      <div class="q-num">${q.id}</div>
      <div class="q-head-meta">
        <div class="q-type-row">
          <span class="q-type-chip qtc-${q.type}">
            <i class="${typeIcon(q.type)}"></i> ${typeLabel}
          </span>
          <span class="q-difficulty ${q.difficulty}">${capFirst(q.difficulty)}</span>
          <span class="q-section-tag">${q.section}</span>
        </div>
        <p class="q-text">${q.text}</p>
        <div class="q-score-row">
          <span class="q-score-badge ${q.result}">
            <i class="fa-solid ${scoreIcon}"></i>
            ${q.scored} / ${q.marks} pts
          </span>
          <span class="q-time-taken">
            <i class="fa-regular fa-clock"></i> ${timeStr}
          </span>
        </div>
      </div>
    </div>
    <div class="q-card-body">
      ${buildQuestionBody(q)}
    </div>
  </div>`;
}

function typeIcon(type) {
  return {
    mcq:         'fa-solid fa-circle-dot',
    mrq:         'fa-solid fa-square-check',
    coding:      'fa-solid fa-code',
    video:       'fa-solid fa-video',
    tabular:     'fa-solid fa-table',
    fitb:        'fa-solid fa-pen-to-square',
    descriptive: 'fa-solid fa-align-left',
  }[type] || 'fa-solid fa-question';
}

function capFirst(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

/* ── Per-type body builders ── */
function buildQuestionBody(q) {
  switch (q.type) {
    case 'mcq':         return buildMCQ(q);
    case 'mrq':         return buildMRQ(q);
    case 'coding':      return buildCoding(q);
    case 'video':       return buildVideo(q);
    case 'tabular':     return buildTabular(q);
    case 'fitb':        return buildFITB(q);
    case 'descriptive': return buildDescriptive(q);
    default: return '';
  }
}

/* ── MCQ ── */
function buildMCQ(q) {
  const optionsHTML = q.options.map(opt => {
    let cls = '', marker = '';
    if (opt.id === q.selected && opt.correct) {
      cls    = 'selected-correct';
      marker = `<span class="option-marker correct-mark"><i class="fa-solid fa-check"></i> Correct</span>`;
    } else if (opt.id === q.selected && !opt.correct) {
      cls    = 'selected-wrong';
      marker = `<span class="option-marker wrong-mark"><i class="fa-solid fa-xmark"></i> Your answer</span>`;
    } else if (opt.correct && q.selected !== opt.id) {
      cls    = 'correct-answer';
      marker = `<span class="option-marker correct-mark"><i class="fa-solid fa-check"></i> Correct answer</span>`;
    }
    const dotIcon = cls === 'selected-correct' || cls === 'correct-answer'
      ? `<i class="fa-solid fa-check"></i>`
      : cls === 'selected-wrong' ? `<i class="fa-solid fa-xmark"></i>` : '';

    return `<div class="mcq-option ${cls}">
      <div class="mcq-radio">${dotIcon}</div>
      <span class="mcq-option-text">${opt.text}</span>
      ${marker}
    </div>`;
  }).join('');

  return `<div class="mcq-options">${optionsHTML}</div>`;
}

/* ── MRQ ── */
function buildMRQ(q) {
  const correctSet  = new Set(q.options.filter(o => o.correct).map(o => o.id));
  const selectedSet = new Set(q.selected);

  const optionsHTML = q.options.map(opt => {
    const isSelected = selectedSet.has(opt.id);
    const isCorrect  = correctSet.has(opt.id);
    let cls = '', note = '';

    if (isSelected && isCorrect)       { cls = 'selected-correct'; }
    else if (isSelected && !isCorrect) { cls = 'selected-wrong';  note = `<span class="mrq-note extra">Extra selection</span>`; }
    else if (!isSelected && isCorrect) { cls = 'missed-correct';  note = `<span class="mrq-note missed">Missed</span>`; }

    const checkIcon = cls === 'selected-correct' || cls === 'missed-correct'
      ? `<i class="fa-solid fa-check"></i>` : `<i class="fa-solid fa-xmark"></i>`;

    return `<div class="mrq-option ${cls}">
      <div class="mrq-checkbox">${cls ? checkIcon : ''}</div>
      <span style="flex:1">${opt.text}</span>
      ${note}
    </div>`;
  }).join('');

  const selectedCorrect = [...selectedSet].filter(id => correctSet.has(id)).length;

  return `<div class="mrq-options">${optionsHTML}</div>
    <div class="mrq-breakdown">
      <span>✅ <strong>${selectedCorrect}/${correctSet.size}</strong> correct answers selected</span>
      <span>📊 Score: <strong>${q.scored}/${q.marks}</strong> pts (partial credit applied)</span>
    </div>`;
}

/* ── Coding ── */
function buildCoding(q) {
  const testRowsHTML = q.testCases.map((tc, i) => `
    <div class="tc-row">
      <span class="tc-num">#${i + 1}</span>
      <span class="tc-io"><strong>In:</strong> ${tc.input}</span>
      <span class="tc-io"><strong>Out:</strong> ${tc.output}</span>
      <span class="tc-status-badge ${tc.status}">
        <i class="fa-solid ${tc.status === 'pass' ? 'fa-check' : tc.status === 'tle' ? 'fa-clock' : 'fa-xmark'}"></i>
        ${tc.status.toUpperCase()} · ${tc.time}
      </span>
    </div>`).join('');

  return `<div class="coding-block">
    <div class="code-header">
      <div class="code-dots">
        <div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div>
      </div>
      <div class="code-lang"><div class="code-lang-dot"></div>${q.lang}</div>
    </div>
    <div class="code-body">${q.candidateCode}</div>
  </div>
  <div class="test-cases">
    <div class="test-cases-head">
      <i class="fa-solid fa-flask-vial"></i> Test Cases — ${q.testCases.filter(t => t.status === 'pass').length}/${q.testCases.length} Passed
    </div>
    <div class="tc-list">${testRowsHTML}</div>
  </div>
  <div class="complexity-row">
    <div class="complexity-item"><i class="fa-solid fa-gauge-high"></i> <strong>Time:</strong> ${q.complexity.time}</div>
    <div class="complexity-item"><i class="fa-solid fa-memory"></i> <strong>Space:</strong> ${q.complexity.space}</div>
  </div>
  <div class="ai-code-review">
    <div class="ai-review-head"><i class="fa-solid fa-wand-magic-sparkles"></i> AI Code Review</div>
    <p class="ai-review-text">${q.aiReview}</p>
  </div>`;
}

/* ── Video ── */
function buildVideo(q) {
  const criteriaHTML = q.evalCriteria.map(c => `
    <div class="vai-row">
      <span class="vai-label">${c.label}</span>
      <div class="vai-bar-track"><div class="vai-bar-fill" style="width:${c.score}%"></div></div>
      <span class="vai-score">${c.score}%</span>
    </div>`).join('');

  return `<div class="video-player-mock">
    <div class="video-thumb-placeholder">
      <div class="video-play-btn"><i class="fa-solid fa-play"></i></div>
      <span class="video-duration">${q.duration}</span>
    </div>
  </div>
  <div class="video-meta-row">
    <span class="video-meta-item"><i class="fa-solid fa-clock"></i> Duration: ${q.duration}</span>
    <span class="video-meta-item"><i class="fa-solid fa-film"></i> ${q.resolution}</span>
    <span class="video-meta-item"><i class="fa-solid fa-microphone"></i> Audio: ${q.audioClarity}</span>
  </div>
  <div class="video-transcript">
    <div class="vt-head"><i class="fa-solid fa-closed-captioning"></i> Transcript (Auto-generated)</div>
    <p class="vt-text">${q.transcript}</p>
  </div>
  <div class="video-ai-eval">
    <div class="vai-head"><i class="fa-solid fa-robot"></i> AI Evaluation Criteria</div>
    <div class="vai-criteria">${criteriaHTML}</div>
  </div>`;
}

/* ── Tabular ── */
function buildTabular(q) {
  const rowsHTML = q.rows.map(row => {
    const cls  = row.correct ? 'correct' : 'wrong';
    const icon = row.correct ? 'fa-check' : 'fa-xmark';
    return `<tr>
      <td class="row-label">${row.label}</td>
      <td>
        <div class="tabular-cell">
          <span class="tc-candidate ${cls}">${row.candidate}</span>
          <i class="fa-solid ${icon}" style="color:var(--${row.correct ? 'green' : 'red'});font-size:0.75rem"></i>
        </div>
      </td>
      <td>
        <div class="tabular-cell">
          <span class="tc-expected"><i class="fa-solid fa-bullseye"></i>${row.expected}</span>
        </div>
      </td>
    </tr>`;
  }).join('');

  return `<div class="tabular-wrap">
    <table class="tabular-table">
      <thead><tr>${q.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
      <tbody>${rowsHTML}</tbody>
    </table>
  </div>`;
}

/* ── Fill in the Blank ── */
function buildFITB(q) {
  const sentencesHTML = q.blanks.map(b => {
    const slotCls  = b.isCorrect ? 'correct' : 'wrong';
    const slotIcon = b.isCorrect ? 'fa-check'  : 'fa-xmark';
    const correction = !b.isCorrect
      ? `<span class="fitb-correction"><i class="fa-solid fa-arrow-right"></i> ${b.correct}</span>` : '';

    return `<div class="fitb-sentence">
      ${b.before}
      <span class="fitb-blank">
        <span class="blank-slot ${slotCls}">
          <i class="fa-solid ${slotIcon}"></i>
          ${b.candidate}
        </span>
        ${correction}
      </span>
      ${b.after || ''}
    </div>`;
  }).join('');

  const correct = q.blanks.filter(b => b.isCorrect).length;
  const allCorrect = correct === q.blanks.length;

  return `${sentencesHTML}
    <div class="fitb-legend">
      <div class="fitb-legend-item">
        <span class="blank-slot correct" style="min-width:auto;padding:2px 8px;font-size:0.68rem">
          <i class="fa-solid fa-check"></i> Correct
        </span>
        Matches expected answer
      </div>
      <div class="fitb-legend-item">
        <span class="blank-slot wrong" style="min-width:auto;padding:2px 8px;font-size:0.68rem">
          <i class="fa-solid fa-xmark"></i> Wrong
        </span>
        Correct answer shown in green
      </div>
      <span style="margin-left:auto;font-size:0.73rem;font-weight:700;color:var(--${allCorrect ? 'green' : 'yellow'})">
        ${correct}/${q.blanks.length} correct
      </span>
    </div>`;
}

/* ── Descriptive ── */
function buildDescriptive(q) {
  const rubricRowsHTML = q.rubricRows.map(r => {
    const cls = r.scored === r.max ? 'full' : r.scored > 0 ? 'part' : 'zero';
    return `<div class="rubric-row">
      <span class="rubric-criterion">${r.criterion}</span>
      <span class="rubric-max">/ ${r.max}</span>
      <span class="rubric-pts ${cls}">${r.scored} pt${r.scored !== 1 ? 's' : ''}</span>
    </div>`;
  }).join('');

  const totalScored = q.rubricRows.reduce((s, r) => s + r.scored, 0);
  const totalMax    = q.rubricRows.reduce((s, r) => s + r.max, 0);

  return `<div class="descriptive-response">
    <div class="desc-response-head"><i class="fa-solid fa-user-pen"></i> Candidate's Response</div>
    <p class="desc-response-text">${q.candidateResponse.replace(/\n/g, '<br>')}</p>
  </div>
  <div class="ai-rubric">
    <div class="rubric-head">
      <div class="rubric-head-left"><i class="fa-solid fa-list-check"></i> AI Scoring Rubric</div>
      <span class="rubric-total">${totalScored} / ${totalMax} pts</span>
    </div>
    <div class="rubric-rows">${rubricRowsHTML}</div>
    <div class="rubric-feedback"><strong>AI Feedback:</strong> ${q.feedback}</div>
  </div>`;
}

/* ────────────────────────────────────────────────────────────
   11. 5-TAB PANEL SWITCHER
   Tabs: questions · analytics · summary · snapshots · feedback
   Lazy init: analytics, summary, snapshots, feedback
────────────────────────────────────────────────────────────── */
let analyticsInited = false;
let summaryInited   = false;
let snapsInited     = false;
let feedbackInited  = false;

function switchTab(tabName) {
  const tabs   = document.querySelectorAll('.rtab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(t => t.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));

  const activeTab   = document.querySelector(`.rtab[data-tab="${tabName}"]`);
  const activePanel = document.getElementById('tab-' + tabName);

  if (activeTab)   activeTab.classList.add('active');
  if (activePanel) activePanel.classList.add('active');

  S.activeTab = tabName;

  // Lazy init
  if (tabName === 'analytics' && !analyticsInited) {
    initAnalyticsCharts();
    renderDifficultyGrid();
    analyticsInited = true;
  }
  if (tabName === 'summary' && !summaryInited) {
    renderSkillScoreCards();
    initComparisonChart();
    renderTimeline();
    animateVerdictRing();
    summaryInited = true;
  }
  if (tabName === 'snapshots' && !snapsInited) {
    renderSnapshots();
    snapsInited = true;
  }
  if (tabName === 'feedback' && !feedbackInited) {
    renderFeedbackStars();
    feedbackInited = true;
  }
}

function initTabSwitcher() {
  document.querySelectorAll('.rtab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
}

/* ────────────────────────────────────────────────────────────
   12. QUESTION FILTERS (search, result pill, type select)
────────────────────────────────────────────────────────────── */
function initQuestionFilters() {
  // Result filter pill buttons
  document.querySelectorAll('.qfp[data-qfilter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.qfp[data-qfilter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      S.qFilter = btn.dataset.qfilter;
      renderQuestions();
    });
  });

  // Type select
  const typeSelect = document.getElementById('typeFilter');
  if (typeSelect) {
    typeSelect.addEventListener('change', () => {
      S.typeFilter = typeSelect.value;
      renderQuestions();
    });
  }

  // Search (debounced 280ms)
  const searchInput = document.getElementById('qSearch');
  if (searchInput) {
    let timer;
    searchInput.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        S.searchQuery = searchInput.value.trim();
        renderQuestions();
      }, 280);
    });
  }
}

/* ────────────────────────────────────────────────────────────
   13. PRINT / SHARE
────────────────────────────────────────────────────────────── */
function initPrintShare() {
  const printBtn = document.getElementById('printBtn');
  const shareBtn = document.getElementById('shareBtn');

  printBtn?.addEventListener('click', () => {
    toast('Preparing PDF…', 'Generating report for Omkar Almale', 'info');
    setTimeout(() => window.print(), 500);
  });

  shareBtn?.addEventListener('click', () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        toast('Link Copied!', 'Share link copied to clipboard', 'success');
      });
    } else {
      toast('Share Report', 'Report link ready to share', 'info');
    }
  });
}

/* ────────────────────────────────────────────────────────────
   14. ANALYTICS CHARTS (lazy-inited on first analytics tab open)
────────────────────────────────────────────────────────────── */
function initAnalyticsCharts() {
  initSectionChart();
  initTimeChart();
  initAccuracyDonut();
}

/* Section score bar chart */
function initSectionChart() {
  const ctx = document.getElementById('sectionChart');
  if (!ctx) return;

  const sections = [
    { label: 'JavaScript',    score: 90, avg: 72 },
    { label: 'React',         score: 95, avg: 68 },
    { label: 'Node.js',       score: 92, avg: 65 },
    { label: 'Algorithms',    score: 88, avg: 70 },
    { label: 'Databases',     score: 74, avg: 62 },
    { label: 'System Design', score: 93, avg: 58 },
    { label: 'Security',      score: 88, avg: 64 },
    { label: 'DevOps',        score: 68, avg: 55 },
  ];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sections.map(s => s.label),
      datasets: [
        {
          label: "Omkar's Score",
          data: sections.map(s => s.score),
          backgroundColor: sections.map(s =>
            s.score >= 85 ? 'rgba(22,163,74,0.85)'
            : s.score >= 70 ? 'rgba(37,99,235,0.85)'
            : 'rgba(217,119,6,0.85)'),
          borderRadius: 6, borderSkipped: false,
          barPercentage: 0.55, categoryPercentage: 0.75,
        },
        {
          label: 'Avg Candidate',
          data: sections.map(s => s.avg),
          backgroundColor: 'rgba(148,163,184,0.35)',
          borderRadius: 6, borderSkipped: false,
          barPercentage: 0.55, categoryPercentage: 0.75,
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 700, easing: 'easeOutQuart' },
      plugins: {
        legend: {
          position: 'top',
          labels: { font: { family: 'Inter', size: 11, weight: '600' }, padding: 16, boxWidth: 10, boxHeight: 10, borderRadius: 3 },
        },
        tooltip: {
          backgroundColor: '#0F172A',
          titleColor: '#F8FAFC', bodyColor: '#94A3B8',
          borderColor: '#1E293B', borderWidth: 1,
          padding: 12, cornerRadius: 8,
          callbacks: { label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y}%` },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 11, weight: '500' }, color: '#64748B' },
        },
        y: {
          min: 0, max: 100,
          grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
          ticks: { font: { family: 'Inter', size: 11 }, color: '#94A3B8', callback: v => v + '%' },
        },
      },
    },
  });
}

/* Time per question type donut */
function initTimeChart() {
  const ctx = document.getElementById('timeChart');
  if (!ctx) return;

  const typeTime = { coding: 0, video: 0, descriptive: 0, mcq: 0, mrq: 0, tabular: 0, fitb: 0 };
  QUESTIONS.forEach(q => { typeTime[q.type] = (typeTime[q.type] || 0) + q.timeSpent; });

  const labels  = ['Coding', 'Video', 'Descriptive', 'MCQ', 'MRQ', 'Tabular', 'Fill-in-Blank'];
  const values  = [typeTime.coding, typeTime.video, typeTime.descriptive,
                   typeTime.mcq, typeTime.mrq, typeTime.tabular, typeTime.fitb];
  const bgColors = ['#F97316', '#DC2626', '#16A34A', '#2563EB', '#7C3AED', '#0891B2', '#D97706'];

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{ data: values, backgroundColor: bgColors, borderWidth: 2, borderColor: '#fff', hoverOffset: 6 }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: '62%',
      animation: { duration: 700, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0F172A',
          titleColor: '#F8FAFC', bodyColor: '#94A3B8',
          borderColor: '#1E293B', borderWidth: 1,
          padding: 12, cornerRadius: 8,
          callbacks: {
            label: ctx => {
              const secs = ctx.parsed;
              return ` ${ctx.label}: ${Math.floor(secs / 60)}m ${secs % 60}s`;
            },
          },
        },
      },
    },
  });

  // Manual legend into #timeLegend
  const legendEl = document.getElementById('timeLegend');
  if (legendEl) {
    const total = values.reduce((a, b) => a + b, 0);
    legendEl.innerHTML = labels.map((l, i) => `
      <div class="dl-item">
        <div class="dl-dot" style="background:${bgColors[i]}"></div>
        <span>${l}</span>
        <span class="dl-pct">${Math.round(values[i] / total * 100)}%</span>
      </div>`).join('');
  }
}

/* Accuracy donut */
function initAccuracyDonut() {
  const ctx = document.getElementById('accuracyDonut');
  if (!ctx) return;

  const correct = QUESTIONS.filter(q => q.result === 'correct').length;
  const partial = QUESTIONS.filter(q => q.result === 'partial').length;
  const wrong   = QUESTIONS.filter(q => q.result === 'wrong').length;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Partial', 'Wrong'],
      datasets: [{
        data: [correct, partial, wrong],
        backgroundColor: ['#16A34A', '#D97706', '#DC2626'],
        borderWidth: 3, borderColor: '#fff', hoverOffset: 6,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: '70%',
      animation: { duration: 700, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0F172A',
          titleColor: '#F8FAFC', bodyColor: '#94A3B8',
          borderColor: '#1E293B', borderWidth: 1,
          padding: 12, cornerRadius: 8,
        },
      },
    },
  });

  // Populate legend into #accuracyLegend
  const legendEl = document.getElementById('accuracyLegend');
  if (legendEl) {
    const total = QUESTIONS.length;
    [
      { label: 'Correct', count: correct, color: '#16A34A' },
      { label: 'Partial',  count: partial, color: '#D97706' },
      { label: 'Wrong',    count: wrong,   color: '#DC2626' },
    ].forEach(item => {
      const div = document.createElement('div');
      div.className = 'dl-item';
      div.innerHTML = `<div class="dl-dot" style="background:${item.color}"></div>
        <span>${item.label} (${item.count})</span>
        <span class="dl-pct">${Math.round(item.count / total * 100)}%</span>`;
      legendEl.appendChild(div);
    });
  }
}

/* Performance matrix grid */
function renderDifficultyGrid() {
  const grid = document.getElementById('difficultyGrid');
  if (!grid) return;

  const cells = [
    { label: 'Easy',          total: 8,  correct: 8,  tier: 'excellent' },
    { label: 'Medium',        total: 13, correct: 12, tier: 'good'      },
    { label: 'Hard',          total: 4,  correct: 2,  tier: 'average'   },
    { label: 'MCQ',           total: 9,  correct: 7,  tier: 'good'      },
    { label: 'Coding',        total: 4,  correct: 4,  tier: 'excellent' },
    { label: 'Video',         total: 2,  correct: 2,  tier: 'excellent' },
    { label: 'Descriptive',   total: 3,  correct: 3,  tier: 'excellent' },
    { label: 'Tabular',       total: 3,  correct: 3,  tier: 'excellent' },
    { label: 'Fill-in-Blank', total: 3,  correct: 3,  tier: 'excellent' },
    { label: 'MRQ',           total: 3,  correct: 2,  tier: 'good'      },
  ];

  grid.innerHTML = cells.map(c => {
    const pct = Math.round(c.correct / c.total * 100);
    return `<div class="dg-cell ${c.tier}">
      <div class="dg-label">${c.label}</div>
      <div class="dg-val">${pct}%</div>
      <div class="dg-sub">${c.correct}/${c.total}</div>
    </div>`;
  }).join('');
}

/* ────────────────────────────────────────────────────────────
   15. AI SUMMARY TAB
────────────────────────────────────────────────────────────── */

/* Verdict score mini-ring animation
   SVG radius = 34  →  circumference = 2 × π × 34 ≈ 213.63 ≈ 214
   Target: 71.7% → offset = 214 - 0.717 × 214 ≈ 60.6  */
function animateVerdictRing() {
  const vsrFill = document.getElementById('vsrFill');
  if (!vsrFill) return;

  const circumference = 214;
  const targetPct     = 0.717;
  const targetOffset  = circumference - targetPct * circumference;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      vsrFill.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s';
      vsrFill.style.strokeDashoffset = targetOffset;
    });
  });
}

/* Skill score cards */
function renderSkillScoreCards() {
  const container = document.getElementById('skillScoreCards');
  if (!container) return;

  const skillData = [
    { name: 'React',         score: 95, tier: 'high' },
    { name: 'Node.js',       score: 92, tier: 'high' },
    { name: 'JavaScript',    score: 90, tier: 'high' },
    { name: 'Algorithms',    score: 88, tier: 'high' },
    { name: 'System Design', score: 86, tier: 'high' },
    { name: 'Security',      score: 82, tier: 'high' },
    { name: 'Databases',     score: 74, tier: 'mid'  },
    { name: 'DevOps',        score: 68, tier: 'low'  },
  ];

  container.innerHTML = skillData.map(s => `
    <div class="skill-score-card">
      <div class="ssc-name">${s.name}</div>
      <div class="ssc-val ${s.tier}">${s.score}<span style="font-size:0.65em;font-weight:500;opacity:0.6">%</span></div>
      <div class="ssc-bar-track">
        <div class="ssc-bar-fill ${s.tier}" style="width:${s.score}%"></div>
      </div>
    </div>`).join('');
}

/* Comparison bar chart */
function initComparisonChart() {
  const ctx = document.getElementById('comparisonChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['React', 'Node.js', 'JS Core', 'Algorithms', 'Databases', 'Security'],
      datasets: [
        {
          label: 'Omkar',
          data: [95, 92, 90, 88, 74, 82],
          backgroundColor: 'rgba(249,115,22,0.85)',
          borderRadius: 5, borderSkipped: false,
          barPercentage: 0.5, categoryPercentage: 0.7,
        },
        {
          label: 'Top 10%',
          data: [88, 84, 87, 85, 80, 78],
          backgroundColor: 'rgba(37,99,235,0.5)',
          borderRadius: 5, borderSkipped: false,
          barPercentage: 0.5, categoryPercentage: 0.7,
        },
        {
          label: 'Avg',
          data: [68, 65, 72, 70, 62, 64],
          backgroundColor: 'rgba(148,163,184,0.35)',
          borderRadius: 5, borderSkipped: false,
          barPercentage: 0.5, categoryPercentage: 0.7,
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 700, easing: 'easeOutQuart' },
      plugins: {
        legend: {
          position: 'top',
          labels: { font: { family: 'Inter', size: 11, weight: '600' }, padding: 14, boxWidth: 10, boxHeight: 10 },
        },
        tooltip: {
          backgroundColor: '#0F172A',
          titleColor: '#F8FAFC', bodyColor: '#94A3B8',
          borderColor: '#1E293B', borderWidth: 1,
          padding: 10, cornerRadius: 8,
          callbacks: { label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y}%` },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 10, weight: '500' }, color: '#64748B' },
        },
        y: {
          min: 0, max: 100,
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: { font: { family: 'Inter', size: 10 }, color: '#94A3B8', callback: v => v + '%' },
        },
      },
    },
  });
}

/* Assessment timeline */
function renderTimeline() {
  const body = document.getElementById('timelineBody');
  if (!body) return;

  const events = [
    { type: 'start', icon: 'fa-solid fa-play',            time: '23:49 PM', title: 'Assessment Started',           sub: 'Fullstack Developer · 25 questions · 62 min' },
    { type: 'event', icon: 'fa-solid fa-code',             time: '23:57 PM', title: 'First coding question opened', sub: 'Q3 — twoSum · Algorithms · Hard' },
    { type: 'event', icon: 'fa-solid fa-video',            time: '00:14 AM', title: 'Video question answered',      sub: 'Q5 — System Design · 5:12 duration' },
    { type: 'event', icon: 'fa-solid fa-check-double',     time: '00:22 AM', title: 'Section: Databases completed', sub: '3 questions · 74% accuracy' },
    { type: 'event', icon: 'fa-solid fa-chart-line',       time: '00:31 AM', title: 'Highest scoring streak',       sub: '8 consecutive correct answers' },
    { type: 'end',   icon: 'fa-solid fa-flag-checkered',  time: '00:28 AM', title: 'Assessment Submitted',          sub: '54 min 38 sec · 7 min remaining' },
  ];

  body.innerHTML = events.map(e => `
    <div class="tl-item">
      <div class="tl-dot ${e.type}"><i class="${e.icon}"></i></div>
      <div class="tl-content">
        <div class="tl-time">${e.time}</div>
        <div class="tl-title">${e.title}</div>
        <div class="tl-sub">${e.sub}</div>
      </div>
    </div>`).join('');
}

/* ────────────────────────────────────────────────────────────
   16. SNAPSHOTS TAB
   32 snapshots: 16-05-2026 19:39 → 20:10
────────────────────────────────────────────────────────────── */
const SNAPSHOTS = (() => {
  const snaps = [];
  let hour = 19, min = 39;
  for (let i = 0; i < 32; i++) {
    const hh = String(hour).padStart(2, '0');
    const mm = String(min).padStart(2, '0');
    snaps.push({ id: i + 1, timestamp: `16-05-2026 · ${hh}:${mm}` });
    min++;
    if (min >= 60) { min = 0; hour++; }
  }
  return snaps;
})();

function renderSnapshots() {
  const grid = document.getElementById('snapshotsGrid');
  if (!grid) return;

  // Update total count badge
  const countEl = document.getElementById('snapTotalCount');
  if (countEl) countEl.textContent = SNAPSHOTS.length;

  grid.innerHTML = SNAPSHOTS.map((s, idx) => `
    <div class="snap-item" data-snapid="${s.id}" style="animation-delay:${idx * 15}ms">
      <div class="snap-img-wrap">
      <div class="snap-img-box"></div>
        <div class="snap-placeholder"></div>
      </div>
      <div class="snap-timestamp">${s.timestamp}</div>
    </div>`).join('');

  // Lightbox on click
  grid.addEventListener('click', e => {
    const item = e.target.closest('.snap-item');
    if (!item) return;
    openSnapLightbox(parseInt(item.dataset.snapid, 10) - 1);
  });
}

function openSnapLightbox(idx) {
  const snap = SNAPSHOTS[idx];
  if (!snap) return;

  const overlay = document.createElement('div');
  overlay.className = 'snap-lightbox';
  overlay.innerHTML = `
    <div class="snap-lightbox-inner" onclick="event.stopPropagation()">
      <div class="snap-lb-placeholder">
        <div style="position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center">
          <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:80px;height:100px;background:rgba(148,163,184,0.3);border-radius:50% 50% 0 0"></div>
          <div style="position:absolute;bottom:72px;left:50%;transform:translateX(-50%);width:52px;height:52px;background:rgba(148,163,184,0.3);border-radius:50%"></div>
        </div>
      </div>
      <div class="snap-lb-footer">
        <span class="snap-lb-ts"><i class="fa-regular fa-clock"></i> ${snap.timestamp}</span>
        <span class="snap-lb-idx">Snapshot ${snap.id} of ${SNAPSHOTS.length}</span>
      </div>
    </div>
    <button class="snap-lb-close" id="lbClose"><i class="fa-solid fa-xmark"></i></button>`;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('visible'));

  overlay.addEventListener('click', () => closeLightbox(overlay));
  overlay.querySelector('#lbClose').addEventListener('click', e => {
    e.stopPropagation();
    closeLightbox(overlay);
  });

  const keyHandler = e => {
    if (e.key === 'Escape') { closeLightbox(overlay); document.removeEventListener('keydown', keyHandler); }
  };
  document.addEventListener('keydown', keyHandler);
}

function closeLightbox(overlay) {
  overlay.classList.remove('visible');
  overlay.classList.add('hiding');
  overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
}

/* ────────────────────────────────────────────────────────────
   17. FEEDBACK TAB — star ratings
────────────────────────────────────────────────────────────── */
const FEEDBACK_DATA = {
  overall: { rating: 4, max: 5 },
  quality: { rating: 5, max: 5 },
};

function renderFeedbackStars() {
  renderStars('starsOverall',  'sublabelOverall',  FEEDBACK_DATA.overall.rating, FEEDBACK_DATA.overall.max);
  renderStars('starsQuality',  'sublabelQuality',  FEEDBACK_DATA.quality.rating, FEEDBACK_DATA.quality.max);
}

function renderStars(containerId, sublabelId, rating, max) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = Array.from({ length: max }, (_, i) => `
    <i class="fa-solid fa-star star ${i < rating ? 'filled' : ''}"
       style="animation-delay:${i * 80}ms"></i>`).join('');

  const sublabel = document.getElementById(sublabelId);
  if (sublabel) sublabel.textContent = `${rating} out of ${max}`;
}

/* ────────────────────────────────────────────────────────────
   18. TOAST NOTIFICATIONS
────────────────────────────────────────────────────────────── */
function toast(title, msg = '', type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toastContainer';
    document.body.appendChild(container);
  }

  const icons = {
    success: 'fa-circle-check', warn:  'fa-triangle-exclamation',
    error:   'fa-circle-xmark', info:  'fa-circle-info',
  };

  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `
    <i class="fa-solid ${icons[type] || icons.info} toast-icon"></i>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      ${msg ? `<div class="toast-msg">${msg}</div>` : ''}
    </div>`;

  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('hiding');
    el.addEventListener('animationend', () => el.remove(), { once: true });
  }, 3500);
}
