import { SectionCard, DefBox, KeyPoints, CompTable, CodeBlock, AlgoSteps, SubHeading, NoteBox } from '../components/shared';

export default function Question4() {
  return (
    <div className="space-y-8">

      {/* ── (a) Circular Queue ── */}
      <SectionCard title="(a) Explain Circular Queue. What is the Condition if Circular Queue is Full?">
        <DefBox title="Definition — Circular Queue">
          <p>
            A <strong>Circular Queue</strong> (also called a <strong>Ring Buffer</strong>) is a linear data structure that follows the <strong>FIFO (First-In-First-Out)</strong> principle, where the last position in the array is connected back to the first position, forming a circle. This overcomes the major limitation of a <strong>linear queue</strong> — the "false overflow" problem where the queue appears full even though there are empty slots at the beginning of the array due to dequeued elements.
          </p>
          <p className="mt-2">
            In a circular queue, both the <strong>front</strong> and <strong>rear</strong> pointers wrap around to the beginning of the array when they reach the end, allowing efficient reuse of freed-up space.
          </p>
        </DefBox>

        <SubHeading>Why Do We Need It?</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-3 border border-gray-200 text-sm text-gray-600">
          <p>In a <strong>linear queue</strong>, after several enqueue and dequeue operations, the front moves forward. Even though slots before 'front' are empty, the queue cannot use them — this is called <strong>memory wastage / false overflow</strong>. A circular queue solves this by wrapping around.</p>
        </div>

        <SubHeading>Visual Representation</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 440 300" className="w-full max-w-md mx-auto" style={{ height: 'auto' }}>
            {/* Circular slots */}
            {[
              { cx: 220, cy: 50, label: '0', color: '#c7d2fe' },
              { cx: 330, cy: 85, label: '1', color: '#a5b4fc' },
              { cx: 380, cy: 170, label: '2', color: '#818cf8' },
              { cx: 330, cy: 255, label: '3', color: '#6366f1' },
              { cx: 220, cy: 285, label: '4', color: '#6366f1' },
              { cx: 110, cy: 255, label: '5', color: '#6366f1' },
              { cx: 60, cy: 170, label: '6', color: '#818cf8' },
              { cx: 110, cy: 85, label: '7', color: '#a5b4fc' },
            ].map(({ cx, cy, label, color }, i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="32" fill={color} stroke="#4f46e5" strokeWidth="2"/>
                <text x={cx} y={cy - 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">{label}</text>
                <text x={cx} y={cy + 10} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9">
                  {i === 0 ? '← front' : i === 4 ? '← rear' : ''}
                </text>
              </g>
            ))}
            {/* Circular arrow */}
            <text x="220" y="170" textAnchor="middle" fill="#4b5563" fontSize="12" fontWeight="bold">Circular</text>
            <text x="220" y="185" textAnchor="middle" fill="#4b5563" fontSize="12" fontWeight="bold">Queue</text>
          </svg>
        </div>

        <SubHeading>Key Conditions</SubHeading>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 my-3 text-sm">
          <p className="font-mono"><strong>Front</strong> points to the first element (index of dequeue).</p>
          <p className="font-mono mt-1"><strong>Rear</strong> points to the last element (index of last enqueue).</p>
          <div className="h-px bg-indigo-200 my-3"/>
          <p><strong>Empty Queue:</strong> <code className="bg-indigo-100 px-2 py-0.5 rounded">front == -1</code></p>
          <p className="mt-1"><strong>Full Queue:</strong> <code className="bg-red-100 text-red-700 px-2 py-0.5 rounded">(rear + 1) % SIZE == front</code></p>
          <p className="mt-1"><strong>Enqueue (rear update):</strong> <code className="bg-green-100 px-2 py-0.5 rounded">rear = (rear + 1) % SIZE</code></p>
          <p className="mt-1"><strong>Dequeue (front update):</strong> <code className="bg-green-100 px-2 py-0.5 rounded">front = (front + 1) % SIZE</code></p>
        </div>

        <SubHeading>Condition: Circular Queue is Full</SubHeading>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-xl my-3">
          <p className="text-red-900 text-sm font-bold mb-1">🚨 Full Queue Condition:</p>
          <p className="text-red-800 font-mono text-lg text-center py-2">(rear + 1) % SIZE == front</p>
          <p className="text-red-700 text-xs mt-1">This means the next position after rear (wrapping around) is front — no empty slot remains for a new element.</p>
        </div>

        <CodeBlock language="c" code={`// Circular Queue Implementation in C
#include <stdio.h>
#define SIZE 5

int queue[SIZE];
int front = -1, rear = -1;

// Check if queue is full
int isFull() {
    return (rear + 1) % SIZE == front;
}

// Check if queue is empty
int isEmpty() {
    return front == -1;
}

// Enqueue operation
void enqueue(int val) {
    if (isFull()) {
        printf("Queue Overflow!\\n");
        return;
    }
    if (front == -1) front = 0;     // First element
    rear = (rear + 1) % SIZE;       // Circular increment
    queue[rear] = val;
    printf("Enqueued: %d\\n", val);
}

// Dequeue operation
int dequeue() {
    if (isEmpty()) {
        printf("Queue Underflow!\\n");
        return -1;
    }
    int val = queue[front];
    if (front == rear) {            // Last element
        front = rear = -1;
    } else {
        front = (front + 1) % SIZE; // Circular increment
    }
    printf("Dequeued: %d\\n", val);
    return val;
}

// Display queue
void display() {
    if (isEmpty()) { printf("Queue is empty\\n"); return; }
    printf("Queue: ");
    int i = front;
    while (1) {
        printf("%d ", queue[i]);
        if (i == rear) break;
        i = (i + 1) % SIZE;
    }
    printf("\\n");
}`}/>

        <KeyPoints points={[
          'Circular queue wraps around — reuses empty spaces at the beginning of the array.',
          'Full condition: (rear + 1) % SIZE == front.',
          'Empty condition: front == -1.',
          'All index increments use modulo (% SIZE) for circular wrapping.',
          'Applications: CPU scheduling, ring buffers, traffic systems, streaming buffers.',
          'Enqueue and Dequeue are both O(1) operations.',
        ]} />
      </SectionCard>

      {/* ── (b) Hashing ── */}
      <SectionCard title="(b) What is Hashing? How Is It Used in Search? Importance of Good Hash Function">
        <DefBox title="Definition — Hashing">
          <p>
            <strong>Hashing</strong> is a technique that maps data of arbitrary size to <strong>fixed-size values</strong> using a mathematical function called a <strong>hash function</strong>. The hash function takes an input (called a <strong>key</strong>) and produces an output (called a <strong>hash value / hash code</strong>), which is used as an <strong>index</strong> in a data structure called a <strong>hash table</strong>. Hashing enables <strong>O(1) average-case</strong> time for search, insert, and delete operations.
          </p>
        </DefBox>

        <SubHeading>How Hashing Is Used in Search Operations</SubHeading>
        <AlgoSteps steps={[
          'Given a search key, compute its hash value: h = hash(key).',
          'Use the hash value as an index to directly access the slot in the hash table.',
          'If the slot contains the key → search successful (O(1) average).',
          'If there is a collision (multiple keys map to same index), use a collision resolution technique.',
          'Without hashing, search requires O(n) (sequential) or O(log n) (binary search on sorted data).',
        ]} />

        <SubHeading>Hash Table Visual Representation</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 480 340" className="w-full max-w-md mx-auto" style={{ height: 'auto' }}>
            <defs>
              <marker id="arrowQ" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#6366f1"/></marker>
            </defs>
            {/* Title */}
            <text x="240" y="20" textAnchor="middle" fill="#374151" fontSize="13" fontWeight="bold">Hash Table (size = 7)</text>
            {/* Hash function box */}
            <rect x="10" y="40" width="120" height="50" rx="8" fill="#6366f1"/>
            <text x="70" y="60" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Hash Function</text>
            <text x="70" y="78" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">h(k) = k % 7</text>
            {/* Input keys */}
            <text x="50" y="115" textAnchor="middle" fill="#4b5563" fontSize="10">Keys:</text>
            <text x="50" y="130" textAnchor="middle" fill="#6366f1" fontSize="10" fontWeight="bold">10, 22, 31, 4</text>
            {/* Arrows */}
            <line x1="130" y1="65" x2="190" y2="65" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowQ)"/>
            {/* Table */}
            {[0,1,2,3,4,5,6].map((idx) => (
              <g key={idx}>
                <rect x="200" y={35 + idx * 38} width="60" height="34" rx="4" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5"/>
                <text x="230" y={57 + idx * 38} textAnchor="middle" fill="#4338ca" fontSize="12" fontWeight="bold">{idx}</text>
              </g>
            ))}
            {/* Values */}
            {[
              { idx: 0, val: '', y: 57 },
              { idx: 1, val: '22', y: 95 },
              { idx: 2, val: '', y: 133 },
              { idx: 3, val: '31', y: 171 },
              { idx: 4, val: '4', y: 209 },
              { idx: 5, val: '', y: 247 },
              { idx: 6, val: '', y: 285 },
            ].filter(v => v.val).map(({ idx, val, y }) => (
              <g key={idx}>
                <rect x="270" y={y - 16} width="80" height="30" rx="6" fill="#16a34a"/>
                <text x="310" y={y + 2} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{val}</text>
                <text x="370" y={y + 2} textAnchor="start" fill="#6b7280" fontSize="9">{val} % 7 = {idx}</text>
              </g>
            ))}
            {/* Special: 10 -> slot 3, collision! */}
            <rect x="270" y={171 - 16 + 30} width="80" height="30" rx="6" fill="#dc2626"/>
            <text x="310" y={171 + 16} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10</text>
            <text x="370" y={171 + 16} textAnchor="start" fill="#dc2626" fontSize="9">10 % 7 = 3 (collision!)</text>
          </svg>
        </div>

        <SubHeading>Importance of a Good Hash Function</SubHeading>
        <NoteBox>
          <p>A good hash function is critical for the performance of a hash table. It should:</p>
          <ol className="list-decimal list-inside text-sm space-y-1 mt-2">
            <li><strong>Minimize collisions:</strong> Distribute keys uniformly across the hash table to avoid clustering.</li>
            <li><strong>Be deterministic:</strong> Same input must always produce the same hash value.</li>
            <li><strong>Be fast to compute:</strong> Should run in O(1) time — otherwise the benefit of hashing is lost.</li>
            <li><strong>Use all bits of the key:</strong> To maximize randomness in the output.</li>
            <li><strong>Have a good avalanche effect:</strong> Small change in input → large change in hash value.</li>
          </ol>
        </NoteBox>

        <SubHeading>Common Hash Functions</SubHeading>
        <CompTable
          headers={['Method', 'Formula', 'Notes']}
          rows={[
            ['Division Method', 'h(k) = k % m', 'Simple, fast. m should be a prime number.'],
            ['Multiplication Method', 'h(k) = ⌊m × (k × A % 1)⌋', 'A is a constant (0 &lt; A &lt; 1). Less sensitive to m.'],
            ['Mid-Square Method', 'h(k) = middle digits of k²', 'Square the key, extract middle digits.'],
            ['Folding Method', 'h(k) = sum of parts of k', 'Divide key into parts, add them.'],
          ]}
        />

        <SubHeading>Collision Resolution Techniques</SubHeading>
        <CompTable
          headers={['Technique', 'How It Works', 'Pros', 'Cons']}
          rows={[
            ['Chaining (Open Hashing)', 'Each slot stores a linked list of all colliding keys', 'Simple, no clustering, unlimited elements', 'Extra memory for pointers, cache misses'],
            ['Linear Probing', 'If slot full, try next: (h+i) % m', 'Cache friendly, no extra memory', 'Primary clustering'],
            ['Quadratic Probing', 'Try (h + i²) % m', 'Reduces primary clustering', 'Secondary clustering'],
            ['Double Hashing', 'Try (h1 + i×h2) % m', 'Minimal clustering', 'More computation'],
          ]}
        />

        <KeyPoints points={[
          'Hashing maps keys to fixed-size indices using a hash function.',
          'Average search time: O(1) — much faster than O(n) linear or O(log n) binary search.',
          'A good hash function minimizes collisions and is fast to compute.',
          'Collisions are inevitable — resolved by chaining or open addressing.',
          'Worst-case: O(n) if all keys hash to the same slot (degenerate case).',
          'Applications: Dictionaries, databases, caches, password storage, compilers.',
        ]} />
      </SectionCard>
    </div>
  );
}
