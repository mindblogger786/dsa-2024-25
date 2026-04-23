import { SectionCard, DefBox, KeyPoints, CompTable, SubHeading, NoteBox } from '../components/shared';

export default function Question6() {
  return (
    <div className="space-y-8">

      {/* ── (a) BST Construction ── */}
      <SectionCard title="(a) Define BST. Create BST for: 20, 10, 25, 5, 15, 22, 30, 3, 14, 13">
        <DefBox title="Definition — Binary Search Tree (BST)">
          <p>
            A <strong>Binary Search Tree (BST)</strong> is a binary tree data structure in which each node has at most two children (left and right), and the following property holds for every node:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>All values in the <strong>left subtree</strong> are <strong>less than</strong> the node's value.</li>
            <li>All values in the <strong>right subtree</strong> are <strong>greater than</strong> the node's value.</li>
            <li>Both the left and right subtrees are also BSTs (recursive property).</li>
          </ul>
          <p className="mt-2 text-sm">
            This ordering property enables <strong>efficient searching (O(log n) average)</strong>, insertion, and deletion operations, making BSTs fundamental for implementing dictionaries, sets, and database indexing.
          </p>
        </DefBox>

        <SubHeading>Step-by-Step BST Construction</SubHeading>
        <p className="text-sm text-gray-600 mb-3">Input: <strong>20, 10, 25, 5, 15, 22, 30, 3, 14, 13</strong></p>

        <div className="space-y-3 my-4">
          {[
            { step: 'Insert 20', tree: '20 → Root', color: 'bg-indigo-100' },
            { step: 'Insert 10', tree: '10 < 20 → Left child of 20', color: 'bg-blue-50' },
            { step: 'Insert 25', tree: '25 > 20 → Right child of 20', color: 'bg-indigo-100' },
            { step: 'Insert 5', tree: '5 < 20, 5 < 10 → Left child of 10', color: 'bg-blue-50' },
            { step: 'Insert 15', tree: '15 < 20, 15 > 10 → Right child of 10', color: 'bg-indigo-100' },
            { step: 'Insert 22', tree: '22 > 20, 22 < 25 → Left child of 25', color: 'bg-blue-50' },
            { step: 'Insert 30', tree: '30 > 20, 30 > 25 → Right child of 25', color: 'bg-indigo-100' },
            { step: 'Insert 3', tree: '3 < 20, 3 < 10, 3 < 5 → Left child of 5', color: 'bg-blue-50' },
            { step: 'Insert 14', tree: '14 < 20, 14 > 10, 14 < 15 → Left child of 15', color: 'bg-indigo-100' },
            { step: 'Insert 13', tree: '13 < 20, 13 > 10, 13 < 15, 13 < 14 → Left child of 14', color: 'bg-blue-50' },
          ].map(({ step, tree, color }, i) => (
            <div key={i} className={`${color} rounded-lg px-4 py-2 text-sm flex gap-4`}>
              <span className="font-bold text-indigo-700 min-w-[100px]">{step}</span>
              <span className="text-gray-700">{tree}</span>
            </div>
          ))}
        </div>

        <SubHeading>Final BST</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 620 320" className="w-full max-w-xl mx-auto" style={{ height: 'auto' }}>
            {/* Edges */}
            <line x1="310" y1="42" x2="160" y2="88" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="310" y1="42" x2="460" y2="88" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="160" y1="112" x2="80" y2="155" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="160" y1="112" x2="240" y2="155" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="460" y1="112" x2="390" y2="155" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="460" y1="112" x2="530" y2="155" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="80" y1="178" x2="45" y2="220" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="240" y1="178" x2="210" y2="220" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="210" y1="243" x2="185" y2="280" stroke="#6366f1" strokeWidth="2.5"/>
            {/* Nodes - Level 0 */}
            <circle cx="310" cy="28" r="22" fill="#6366f1"/><text x="310" y="34" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">20</text>
            {/* Level 1 */}
            <circle cx="160" cy="100" r="22" fill="#6366f1"/><text x="160" y="106" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">10</text>
            <circle cx="460" cy="100" r="22" fill="#6366f1"/><text x="460" y="106" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">25</text>
            {/* Level 2 */}
            <circle cx="80" cy="168" r="22" fill="#6366f1"/><text x="80" y="174" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">5</text>
            <circle cx="240" cy="168" r="22" fill="#6366f1"/><text x="240" y="174" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">15</text>
            <circle cx="390" cy="168" r="22" fill="#6366f1"/><text x="390" y="174" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">22</text>
            <circle cx="530" cy="168" r="22" fill="#6366f1"/><text x="530" y="174" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">30</text>
            {/* Level 3 */}
            <circle cx="45" cy="235" r="20" fill="#a78bfa"/><text x="45" y="241" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">3</text>
            <circle cx="210" cy="235" r="20" fill="#a78bfa"/><text x="210" y="241" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">14</text>
            {/* Level 4 */}
            <circle cx="185" cy="293" r="18" fill="#c4b5fd"/><text x="185" y="299" textAnchor="middle" fill="#4c1d95" fontSize="12" fontWeight="bold">13</text>
            {/* Validation text */}
            <text x="310" y="310" textAnchor="middle" fill="#6b7280" fontSize="10" fontStyle="italic">Left subtree &lt; Node &lt; Right subtree (for every node)</text>
          </svg>
        </div>

        <NoteBox>
          <p><strong>Verification:</strong> Inorder traversal should give sorted order:</p>
          <p className="font-mono text-sm mt-1">3, 5, 10, 13, 14, 15, 20, 22, 25, 30 ✓ (ascending order)</p>
        </NoteBox>

        <CompTable
          headers={['Operation', 'Average Case', 'Worst Case (Skewed)']}
          rows={[
            ['Search', 'O(log n)', 'O(n)'],
            ['Insert', 'O(log n)', 'O(n)'],
            ['Delete', 'O(log n)', 'O(n)'],
            ['Traversal', 'O(n)', 'O(n)'],
          ]}
        />

        <KeyPoints points={[
          'BST property: left < root < right for every node.',
          'Inorder traversal of BST always produces sorted output.',
          'Average-case operations: O(log n). Worst-case (skewed tree): O(n).',
          'Self-balancing BSTs (AVL, Red-Black) guarantee O(log n) worst case.',
          '10 elements inserted step by step — each comparison follows BST property.',
        ]} />
      </SectionCard>

      {/* ── (b) B-Tree Construction ── */}
      <SectionCard title="(b) What is a B-Tree? Construct B-Tree of Order 3">
        <DefBox title="Definition — B-Tree">
          <p>
            A <strong>B-Tree</strong> is a <strong>self-balancing search tree</strong> designed to work well on disk-based storage systems. Unlike BSTs, B-Trees can have <strong>more than two children</strong> per node and can store <strong>multiple keys per node</strong>. A B-Tree of order <em>m</em> has the following properties:
          </p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Every node has at most <strong>m children</strong> and <strong>m − 1 keys</strong>.</li>
            <li>Every non-leaf node (except root) has at least <strong>⌈m/2⌉ children</strong>.</li>
            <li>The root has at least <strong>2 children</strong> (if not a leaf).</li>
            <li>All leaves appear at the <strong>same level</strong> (perfectly balanced).</li>
            <li>Keys within a node are stored in <strong>sorted order</strong>.</li>
          </ul>
        </DefBox>

        <SubHeading>Given: Order m = 3</SubHeading>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 my-3 text-sm">
          <p><strong>Max keys per node:</strong> m − 1 = 2</p>
          <p><strong>Max children per node:</strong> m = 3</p>
          <p><strong>Min keys per node (non-root):</strong> ⌈m/2⌉ − 1 = 1</p>
          <p><strong>Input sequence:</strong> 10, 20, 30, 40, 50, 60, 70, 80, 90</p>
        </div>

        <SubHeading>Step-by-Step B-Tree Construction</SubHeading>
        <div className="space-y-4 my-4">
          {/* Step 1-2 */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="font-bold text-indigo-700 text-sm mb-2">Insert 10, 20</p>
            <div className="flex justify-center">
              <div className="border-2 border-indigo-400 rounded-lg px-6 py-2 bg-white">
                <span className="font-mono text-lg font-bold">[10 | 20]</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">Single node with 2 keys — not full yet</p>
          </div>

          {/* Step 3: Split */}
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="font-bold text-amber-700 text-sm mb-2">Insert 30 → Overflow! Split (middle 20 goes up)</p>
            <div className="flex justify-center items-center gap-3">
              <div className="border-2 border-indigo-400 rounded-lg px-4 py-2 bg-white">
                <span className="font-mono font-bold">20</span>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-2">
              <div className="border-2 border-amber-400 rounded-lg px-4 py-1 bg-white">
                <span className="font-mono font-bold">10</span>
              </div>
              <div className="border-2 border-amber-400 rounded-lg px-4 py-1 bg-white">
                <span className="font-mono font-bold">30</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">20 promoted to new root</p>
          </div>

          {/* Step 4-5 */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="font-bold text-indigo-700 text-sm mb-2">Insert 40, 50</p>
            <div className="flex justify-center items-center gap-3">
              <div className="border-2 border-indigo-400 rounded-lg px-4 py-2 bg-white">
                <span className="font-mono font-bold">20</span>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-2">
              <div className="border-2 border-gray-300 rounded-lg px-4 py-1 bg-white">
                <span className="font-mono font-bold">10</span>
              </div>
              <div className="border-2 border-indigo-400 rounded-lg px-4 py-1 bg-white">
                <span className="font-mono font-bold">30 | 40</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">40, 50 go to right child → [30, 40] then [30, 40, 50]</p>
          </div>

          {/* Step 6: Split */}
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="font-bold text-amber-700 text-sm mb-2">Insert 50 → Overflow in right node! Split (40 promoted)</p>
            <div className="flex justify-center items-center gap-3">
              <div className="border-2 border-indigo-400 rounded-lg px-6 py-2 bg-white">
                <span className="font-mono font-bold">20 | 40</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <div className="border-2 border-amber-400 rounded-lg px-3 py-1 bg-white">
                <span className="font-mono font-bold">10</span>
              </div>
              <div className="border-2 border-amber-400 rounded-lg px-3 py-1 bg-white">
                <span className="font-mono font-bold">30</span>
              </div>
              <div className="border-2 border-amber-400 rounded-lg px-3 py-1 bg-white">
                <span className="font-mono font-bold">50</span>
              </div>
            </div>
          </div>

          {/* Step 7-8 */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="font-bold text-indigo-700 text-sm mb-2">Insert 60, 70 → goes to rightmost child [50, 60, 70]</p>
            <div className="flex justify-center items-center gap-3">
              <div className="border-2 border-indigo-400 rounded-lg px-6 py-2 bg-white">
                <span className="font-mono font-bold">20 | 40</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <div className="border-2 border-gray-300 rounded-lg px-3 py-1 bg-white"><span className="font-mono font-bold">10</span></div>
              <div className="border-2 border-gray-300 rounded-lg px-3 py-1 bg-white"><span className="font-mono font-bold">30</span></div>
              <div className="border-2 border-red-400 rounded-lg px-3 py-1 bg-red-50"><span className="font-mono font-bold text-red-600">50 | 60 | 70</span></div>
            </div>
            <p className="text-xs text-red-500 mt-2 text-center">Overflow! [50, 60, 70] has 3 keys — must split</p>
          </div>

          {/* Step 8: Split cascade */}
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="font-bold text-amber-700 text-sm mb-2">70 causes split → 60 promoted → root overflows → 40 promoted as new root!</p>
            <div className="flex justify-center items-center gap-3">
              <div className="border-2 border-indigo-500 rounded-lg px-4 py-2 bg-indigo-50">
                <span className="font-mono text-lg font-bold text-indigo-700">40</span>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-2">
              <div className="border-2 border-indigo-400 rounded-lg px-3 py-1 bg-white">
                <span className="font-mono font-bold">20</span>
              </div>
              <div className="border-2 border-indigo-400 rounded-lg px-3 py-1 bg-white">
                <span className="font-mono font-bold">60</span>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-2">
              <div className="border-2 border-gray-300 rounded-lg px-2 py-1 bg-white"><span className="font-mono text-sm">10</span></div>
              <div className="border-2 border-gray-300 rounded-lg px-2 py-1 bg-white"><span className="font-mono text-sm">30</span></div>
              <div className="border-2 border-gray-300 rounded-lg px-2 py-1 bg-white"><span className="font-mono text-sm">50</span></div>
              <div className="border-2 border-gray-300 rounded-lg px-2 py-1 bg-white"><span className="font-mono text-sm">70</span></div>
            </div>
          </div>

          {/* Final: Insert 80, 90 */}
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <p className="font-bold text-green-700 text-sm mb-2">Insert 80, 90 → goes to rightmost child → Final B-Tree</p>
            <div className="flex justify-center items-center gap-3">
              <div className="border-2 border-green-500 rounded-lg px-4 py-2 bg-green-50">
                <span className="font-mono text-lg font-bold text-green-700">40</span>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-2">
              <div className="border-2 border-green-400 rounded-lg px-3 py-1 bg-white">
                <span className="font-mono font-bold">20</span>
              </div>
              <div className="border-2 border-green-400 rounded-lg px-4 py-1 bg-white">
                <span className="font-mono font-bold">60 | 80</span>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-2">
              <div className="border-2 border-gray-300 rounded-lg px-2 py-1 bg-white"><span className="font-mono text-sm">10</span></div>
              <div className="border-2 border-gray-300 rounded-lg px-2 py-1 bg-white"><span className="font-mono text-sm">30</span></div>
              <div className="border-2 border-gray-300 rounded-lg px-2 py-1 bg-white"><span className="font-mono text-sm">50</span></div>
              <div className="border-2 border-gray-300 rounded-lg px-2 py-1 bg-white"><span className="font-mono text-sm">70</span></div>
              <div className="border-2 border-gray-300 rounded-lg px-2 py-1 bg-white"><span className="font-mono text-sm">90</span></div>
            </div>
            <p className="text-xs text-green-600 mt-3 text-center font-semibold">✅ Final B-Tree of Order 3 — All leaves at same level</p>
          </div>
        </div>

        <CompTable
          headers={['Property', 'Value for Order 3']}
          rows={[
            ['Max keys per node', 'm − 1 = 2'],
            ['Max children per node', 'm = 3'],
            ['Min keys (non-root)', '⌈m/2⌉ − 1 = 1'],
            ['Min children (non-leaf, non-root)', '⌈m/2⌉ = 2'],
            ['All leaves at same level?', 'Yes ✓'],
          ]}
        />

        <KeyPoints points={[
          'B-Tree of order m: max m children, max m−1 keys per node.',
          'Order 3: max 2 keys per node, max 3 children per node.',
          'When a node overflows (> m−1 keys), the middle key is promoted to the parent.',
          'If the parent also overflows, splitting cascades upward — may create a new root.',
          'B-Trees are always balanced — all leaves are at the same depth.',
          'Used extensively in databases and file systems (B+ Trees are a variant).',
          'Search, Insert, Delete: O(log n) guaranteed.',
        ]} />
      </SectionCard>
    </div>
  );
}
