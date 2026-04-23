import { SectionCard, DefBox, KeyPoints, CompTable, CodeBlock, AlgoSteps, SubHeading } from '../components/shared';

export default function Question2() {
  return (
    <div className="space-y-8">

      {/* ── (a) Data Structure ── */}
      <SectionCard title="(a) Define Data Structure. Describe Its Need and Types">
        <DefBox title="Definition — Data Structure">
          <p>
            A <strong>data structure</strong> is a systematic way of <strong>organizing, storing, and managing data</strong> in a computer's memory so that it can be <strong>accessed, modified, and processed efficiently</strong>. It defines the relationship between the data elements and the operations that can be performed on them. The choice of data structure directly impacts the performance of algorithms.
          </p>
        </DefBox>

        <SubHeading>Why Do We Need Data Structures?</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200">
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <strong>Efficiency:</strong> Choosing the right DS can drastically reduce time and space complexity (e.g., hash table for O(1) search).</li>
            <li>• <strong>Memory Management:</strong> Proper organization minimizes memory waste (e.g., linked list for dynamic size).</li>
            <li>• <strong>Data Organization:</strong> Provides logical structure to data for easy understanding and manipulation.</li>
            <li>• <strong>Reusability:</strong> Well-designed data structures can be reused across multiple programs.</li>
            <li>• <strong>Problem Solving:</strong> Many real-world problems map naturally to specific data structures (e.g., undo operations → Stack).</li>
          </ul>
        </div>

        <SubHeading>Types of Data Structures — Classification Diagram</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 680 340" className="w-full max-w-2xl mx-auto" style={{ height: 'auto' }}>
            {/* Root */}
            <rect x="230" y="10" width="220" height="38" rx="10" fill="#4f46e5"/>
            <text x="340" y="35" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Data Structures</text>
            <line x1="280" y1="48" x2="170" y2="75" stroke="#6366f1" strokeWidth="2"/>
            <line x1="400" y1="48" x2="510" y2="75" stroke="#6366f1" strokeWidth="2"/>
            {/* Linear / Non-linear */}
            <rect x="70" y="78" width="200" height="35" rx="8" fill="#7c3aed"/>
            <text x="170" y="100" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Linear</text>
            <rect x="410" y="78" width="200" height="35" rx="8" fill="#7c3aed"/>
            <text x="510" y="100" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Non-Linear</text>
            {/* Linear children */}
            <line x1="110" y1="113" x2="60" y2="140" stroke="#8b5cf6" strokeWidth="1.5"/>
            <line x1="170" y1="113" x2="170" y2="140" stroke="#8b5cf6" strokeWidth="1.5"/>
            <line x1="230" y1="113" x2="280" y2="140" stroke="#8b5cf6" strokeWidth="1.5"/>
            <rect x="10" y="143" width="100" height="30" rx="6" fill="#a78bfa"/>
            <text x="60" y="163" textAnchor="middle" fill="white" fontSize="11">Array</text>
            <rect x="120" y="143" width="100" height="30" rx="6" fill="#a78bfa"/>
            <text x="170" y="163" textAnchor="middle" fill="white" fontSize="11">Stack</text>
            <rect x="230" y="143" width="100" height="30" rx="6" fill="#a78bfa"/>
            <text x="280" y="163" textAnchor="middle" fill="white" fontSize="11">Queue</text>
            <rect x="340" y="143" width="100" height="30" rx="6" fill="#a78bfa"/>
            <text x="390" y="163" textAnchor="middle" fill="white" fontSize="11">Linked List</text>
            <line x1="170" y1="113" x2="390" y2="140" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4,3"/>
            {/* Non-linear children */}
            <line x1="470" y1="113" x2="440" y2="140" stroke="#8b5cf6" strokeWidth="1.5"/>
            <line x1="550" y1="113" x2="580" y2="140" stroke="#8b5cf6" strokeWidth="1.5"/>
            <rect x="390" y="143" width="100" height="30" rx="6" fill="#a78bfa"/>
            <text x="440" y="163" textAnchor="middle" fill="white" fontSize="11">Tree</text>
            <rect x="530" y="143" width="100" height="30" rx="6" fill="#a78bfa"/>
            <text x="580" y="163" textAnchor="middle" fill="white" fontSize="11">Graph</text>
            {/* Subtypes */}
            <line x1="60" y1="173" x2="60" y2="195" stroke="#c4b5fd" strokeWidth="1"/>
            <line x1="170" y1="173" x2="170" y2="195" stroke="#c4b5fd" strokeWidth="1"/>
            <line x1="280" y1="173" x2="280" y2="195" stroke="#c4b5fd" strokeWidth="1"/>
            <rect x="15" y="198" width="90" height="24" rx="5" fill="#e0d4fc"/>
            <text x="60" y="215" textAnchor="middle" fill="#4c1d95" fontSize="9">Static</text>
            <rect x="125" y="198" width="90" height="24" rx="5" fill="#e0d4fc"/>
            <text x="170" y="215" textAnchor="middle" fill="#4c1d95" fontSize="9">LIFO</text>
            <rect x="235" y="198" width="90" height="24" rx="5" fill="#e0d4fc"/>
            <text x="280" y="215" textAnchor="middle" fill="#4c1d95" fontSize="9">FIFO</text>
            <rect x="345" y="198" width="90" height="24" rx="5" fill="#e0d4fc"/>
            <text x="390" y="215" textAnchor="middle" fill="#4c1d95" fontSize="9">Dynamic</text>
            {/* Tree subtypes */}
            <line x1="440" y1="173" x2="420" y2="195" stroke="#c4b5fd" strokeWidth="1"/>
            <line x1="440" y1="173" x2="490" y2="195" stroke="#c4b5fd" strokeWidth="1"/>
            <rect x="370" y="198" width="75" height="24" rx="5" fill="#e0d4fc"/>
            <text x="407" y="215" textAnchor="middle" fill="#4c1d95" fontSize="9">BST, AVL</text>
            <rect x="450" y="198" width="75" height="24" rx="5" fill="#e0d4fc"/>
            <text x="487" y="215" textAnchor="middle" fill="#4c1d95" fontSize="9">B-Tree</text>
            {/* Graph subtypes */}
            <line x1="580" y1="173" x2="560" y2="195" stroke="#c4b5fd" strokeWidth="1"/>
            <line x1="580" y1="173" x2="630" y2="195" stroke="#c4b5fd" strokeWidth="1"/>
            <rect x="520" y="198" width="75" height="24" rx="5" fill="#e0d4fc"/>
            <text x="557" y="215" textAnchor="middle" fill="#4c1d95" fontSize="9">Directed</text>
            <rect x="600" y="198" width="75" height="24" rx="5" fill="#e0d4fc"/>
            <text x="637" y="215" textAnchor="middle" fill="#4c1d95" fontSize="9">Undirected</text>
          </svg>
        </div>

        <CompTable
          headers={['Type', 'Data Structure', 'Key Property']}
          rows={[
            ['Linear', 'Array', 'Contiguous memory, fixed size, random access O(1)'],
            ['Linear', 'Linked List', 'Dynamic size, nodes linked by pointers, sequential access'],
            ['Linear', 'Stack', 'LIFO — push/pop from top only'],
            ['Linear', 'Queue', 'FIFO — enqueue at rear, dequeue from front'],
            ['Non-Linear', 'Tree', 'Hierarchical — one root, parent-child relationships'],
            ['Non-Linear', 'Graph', 'Network — nodes connected by edges (any pattern)'],
          ]}
        />

        <KeyPoints points={[
          'Data structure = way of organizing data for efficient access and modification.',
          'Linear DS: Elements arranged in sequential manner (Array, Stack, Queue, Linked List).',
          'Non-Linear DS: Elements arranged in hierarchical or network manner (Tree, Graph).',
          'Choosing the right DS is crucial for algorithm performance.',
        ]} />
      </SectionCard>

      {/* ── (b) Stack ── */}
      <SectionCard title="(b) What is a Stack? — Array &amp; Linked List Implementation">
        <DefBox title="Definition — Stack">
          <p>
            A <strong>Stack</strong> is a linear data structure that follows the <strong>Last-In-First-Out (LIFO)</strong> principle. This means the last element inserted (pushed) is the first one to be removed (popped). Think of it like a stack of plates — you can only add or remove from the top. Key operations include <strong>push</strong> (insert), <strong>pop</strong> (remove), and <strong>peek/top</strong> (view top element).
          </p>
        </DefBox>

        <SubHeading>Array Implementation of Stack (C)</SubHeading>
        <CodeBlock language="c" code={`#include <stdio.h>
#include <stdlib.h>
#define MAX 100

typedef struct {
    int arr[MAX];
    int top;
} Stack;

// Initialize stack
void init(Stack *s) {
    s->top = -1;
}

// Check if stack is empty
int isEmpty(Stack *s) {
    return s->top == -1;
}

// Check if stack is full
int isFull(Stack *s) {
    return s->top == MAX - 1;
}

// Push element onto stack
void push(Stack *s, int val) {
    if (isFull(s)) {
        printf("Stack Overflow!\\n");
        return;
    }
    s->arr[++(s->top)] = val;
    printf("Pushed %d\\n", val);
}

// Pop element from stack
int pop(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack Underflow!\\n");
        return -1;
    }
    return s->arr[(s->top)--];
}

// Peek top element
int peek(Stack *s) {
    if (isEmpty(s)) return -1;
    return s->arr[s->top];
}`}/>

        <SubHeading>Linked List Implementation of Stack (C)</SubHeading>
        <CodeBlock language="c" code={`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

typedef struct {
    Node *top;
} StackLL;

// Initialize stack
void initLL(StackLL *s) {
    s->top = NULL;
}

// Check if stack is empty
int isEmptyLL(StackLL *s) {
    return s->top == NULL;
}

// Push element onto stack (insert at head)
void pushLL(StackLL *s, int val) {
    Node *newNode = (Node *)malloc(sizeof(Node));
    newNode->data = val;
    newNode->next = s->top;
    s->top = newNode;
    printf("Pushed %d\\n", val);
}

// Pop element from stack (remove from head)
int popLL(StackLL *s) {
    if (isEmptyLL(s)) {
        printf("Stack Underflow!\\n");
        return -1;
    }
    Node *temp = s->top;
    int val = temp->data;
    s->top = s->top->next;
    free(temp);
    return val;
}

// Peek top element
int peekLL(StackLL *s) {
    if (isEmptyLL(s)) return -1;
    return s->top->data;
}`}/>

        <SubHeading>Comparison Table: Array vs Linked List Stack</SubHeading>
        <CompTable
          headers={['Aspect', 'Array-Based Stack', 'Linked List-Based Stack']}
          rows={[
            ['Memory Allocation', 'Static — fixed size at compile time', 'Dynamic — nodes allocated at runtime'],
            ['Memory Usage', 'May waste space if stack is sparse; no extra pointer overhead', 'Uses only what is needed; extra memory for pointers per node'],
            ['Flexibility', 'Cannot grow beyond MAX size', 'Can grow/shrink dynamically — no fixed limit'],
            ['Overflow', 'Occurs when top == MAX - 1', 'Occurs only when system memory is exhausted'],
            ['Access Speed', 'Slightly faster (contiguous memory, cache friendly)', 'Slightly slower (pointer dereferencing)'],
            ['Implementation', 'Simpler — uses index arithmetic', 'Slightly more complex — uses pointer manipulation'],
          ]}
        />

        <KeyPoints points={[
          'Stack follows LIFO — Last In, First Out.',
          'Array implementation: simple but fixed size, may cause overflow.',
          'Linked list implementation: dynamic size, no overflow until system memory runs out.',
          'Time complexity for push/pop: O(1) in both implementations.',
          'Applications: Function call stack, Undo/Redo, Expression evaluation, Balanced parentheses.',
        ]} />
      </SectionCard>

      {/* ── (c) Insertion Sort ── */}
      <SectionCard title="(c) Explain Insertion Sort with Example &amp; Time Complexity">
        <DefBox title="Definition — Insertion Sort">
          <p>
            <strong>Insertion Sort</strong> is a simple, comparison-based sorting algorithm that builds the final sorted array <strong>one element at a time</strong>. It works by repeatedly picking the next element from the unsorted portion and <strong>inserting it into its correct position</strong> in the sorted portion. It is analogous to sorting playing cards in your hand.
          </p>
        </DefBox>

        <AlgoSteps steps={[
          'Start from the second element (index 1). Assume the first element is already sorted.',
          'Pick the current element (key) and compare it with elements in the sorted portion (to its left).',
          'Shift all elements greater than the key one position to the right.',
          'Insert the key into its correct position in the sorted portion.',
          'Repeat for all remaining elements.',
        ]} />

        <SubHeading>Step-by-Step Example</SubHeading>
        <p className="text-sm text-gray-600 mb-2">Input array: <strong>[12, 11, 13, 5, 6]</strong></p>

        <div className="overflow-x-auto my-4 rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-indigo-100">
                <th className="px-4 py-2 text-left font-bold text-indigo-900">Pass</th>
                <th className="px-4 py-2 text-left font-bold text-indigo-900">Key</th>
                <th className="px-4 py-2 text-left font-bold text-indigo-900">Action</th>
                <th className="px-4 py-2 text-left font-bold text-indigo-900">Array State</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs">
              <tr className="bg-white"><td className="px-4 py-2">Initial</td><td className="px-4 py-2">—</td><td className="px-4 py-2">First element sorted by default</td><td className="px-4 py-2">[<strong>12</strong>, 11, 13, 5, 6]</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-2">Pass 1</td><td className="px-4 py-2">11</td><td className="px-4 py-2">11 &lt; 12 → shift 12 right, insert 11</td><td className="px-4 py-2">[<strong>11, 12</strong>, 13, 5, 6]</td></tr>
              <tr className="bg-white"><td className="px-4 py-2">Pass 2</td><td className="px-4 py-2">13</td><td className="px-4 py-2">13 &gt; 12 → no shift needed</td><td className="px-4 py-2">[<strong>11, 12, 13</strong>, 5, 6]</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-2">Pass 3</td><td className="px-4 py-2">5</td><td className="px-4 py-2">5 &lt; 13, 12, 11 → shift all, insert 5</td><td className="px-4 py-2">[<strong>5, 11, 12, 13</strong>, 6]</td></tr>
              <tr className="bg-white"><td className="px-4 py-2">Pass 4</td><td className="px-4 py-2">6</td><td className="px-4 py-2">6 &lt; 13, 12, 11 → shift, insert after 5</td><td className="px-4 py-2">[<strong>5, 6, 11, 12, 13</strong>]</td></tr>
            </tbody>
          </table>
        </div>

        <CodeBlock language="c" code={`// Insertion Sort in C
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        // Shift elements > key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;  // Insert key at correct position
    }
}`}/>

        <SubHeading>Time Complexity Analysis</SubHeading>
        <CompTable
          headers={['Case', 'Condition', 'Comparisons', 'Time Complexity']}
          rows={[
            ['Best Case', 'Array already sorted', 'n − 1 (one per pass)', 'O(n)'],
            ['Average Case', 'Random order', '≈ n²/4', 'O(n²)'],
            ['Worst Case', 'Array reverse sorted', 'n(n−1)/2', 'O(n²)'],
          ]}
        />

        <KeyPoints points={[
          'Insertion Sort is stable — preserves relative order of equal elements.',
          'Best case O(n) when array is already sorted.',
          'Worst case O(n²) when array is reverse sorted.',
          'Space complexity: O(1) — in-place sorting.',
          'Efficient for small datasets and nearly sorted arrays.',
          'Used in practice as part of TimSort (Python\'s built-in sort).',
        ]} />
      </SectionCard>

      {/* ── (d) Binary Tree from Traversals ── */}
      <SectionCard title="(d) Draw Binary Tree from Given Traversals">
        <DefBox title="Given Traversals">
          <p><strong>Inorder:</strong> D &nbsp;B &nbsp;H &nbsp;E &nbsp;A &nbsp;I &nbsp;F &nbsp;J &nbsp;C &nbsp;G</p>
          <p><strong>Preorder:</strong> A &nbsp;B &nbsp;D &nbsp;E &nbsp;H &nbsp;C &nbsp;F &nbsp;I &nbsp;J &nbsp;G</p>
        </DefBox>

        <SubHeading>Step-by-Step Construction Logic</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 text-sm text-gray-600 space-y-2">
          <p><strong>Rule:</strong> In preorder, the first element is always the root.</p>
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>Root = A</strong> (first in preorder). In inorder: [D,B,H,E] <strong>A</strong> [I,F,J,C,G]. Left subtree = {'{D,B,H,E}'}, Right = {'{I,F,J,C,G}'}.</li>
            <li><strong>Left subtree root = B</strong> (next in preorder after A). In inorder: [D] <strong>B</strong> [H,E]. B's left = D, B's right subtree = {'{H,E}'}.</li>
            <li><strong>Right of B:</strong> Preorder gives E next. In inorder: [H] <strong>E</strong> []. So E's left = H, E's right = null.</li>
            <li><strong>Right subtree root = C</strong>. In inorder: [I,F,J] <strong>C</strong> [G]. C's left subtree = {'{I,F,J}'}, C's right = G.</li>
            <li><strong>Left of C: root = F.</strong> In inorder: [I] <strong>F</strong> [J]. F's left = I, F's right = J.</li>
          </ol>
        </div>

        <SubHeading>Constructed Binary Tree</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 620 290" className="w-full max-w-lg mx-auto" style={{ height: 'auto' }}>
            {/* Edges */}
            <line x1="310" y1="45" x2="160" y2="95" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="310" y1="45" x2="460" y2="95" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="160" y1="115" x2="80" y2="165" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="160" y1="115" x2="240" y2="165" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="240" y1="185" x2="240" y2="225" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="460" y1="115" x2="380" y2="165" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="460" y1="115" x2="540" y2="165" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="380" y1="185" x2="340" y2="225" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="380" y1="185" x2="420" y2="225" stroke="#6366f1" strokeWidth="2.5"/>
            {/* Nodes */}
            <circle cx="310" cy="30" r="20" fill="#6366f1"/><text x="310" y="36" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">A</text>
            <circle cx="160" cy="105" r="20" fill="#6366f1"/><text x="160" y="111" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">B</text>
            <circle cx="460" cy="105" r="20" fill="#6366f1"/><text x="460" y="111" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">C</text>
            <circle cx="80" cy="175" r="20" fill="#6366f1"/><text x="80" y="181" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">D</text>
            <circle cx="240" cy="175" r="20" fill="#6366f1"/><text x="240" y="181" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">E</text>
            <circle cx="380" cy="175" r="20" fill="#6366f1"/><text x="380" y="181" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">F</text>
            <circle cx="540" cy="175" r="20" fill="#6366f1"/><text x="540" y="181" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">G</text>
            <circle cx="240" cy="240" r="20" fill="#6366f1"/><text x="240" y="246" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">H</text>
            <circle cx="340" cy="240" r="20" fill="#6366f1"/><text x="340" y="246" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">I</text>
            <circle cx="420" cy="240" r="20" fill="#6366f1"/><text x="420" y="246" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">J</text>
            {/* Labels */}
            <text x="310" y="280" textAnchor="middle" fill="#6b7280" fontSize="11" fontStyle="italic">Inorder: D B H E A I F J C G ✓ &nbsp; Preorder: A B D E H C F I J G ✓</text>
          </svg>
        </div>

        <KeyPoints points={[
          'First element of Preorder is always the root of the tree (or subtree).',
          'Use Inorder to determine left and right subtrees of the root.',
          'Recursively apply the same logic to build left and right subtrees.',
          'A unique binary tree can always be constructed from Inorder + Preorder (or Inorder + Postorder).',
        ]} />
      </SectionCard>

      {/* ── (e) Spanning Tree & Prim's Algorithm ── */}
      <SectionCard title="(e) Define Spanning Tree. Find MST Using Prim's Algorithm">
        <DefBox title="Definition — Spanning Tree">
          <p>
            A <strong>spanning tree</strong> of a connected, undirected graph <em>G(V, E)</em> is a subgraph that is a <strong>tree</strong> and includes <strong>all the vertices</strong> of <em>G</em>. It has exactly <strong>|V| − 1 edges</strong> — the minimum number of edges needed to connect all vertices. A <strong>Minimum Spanning Tree (MST)</strong> is the spanning tree whose sum of edge weights is the smallest possible.
          </p>
        </DefBox>

        <SubHeading>Given Graph</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 560 320" className="w-full max-w-lg mx-auto" style={{ height: 'auto' }}>
            {/* Edges */}
            {/* A-B (2) */}
            <line x1="90" y1="80" x2="280" y2="80" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="185" y="72" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">2</text>
            {/* B-C (3) */}
            <line x1="280" y1="80" x2="470" y2="80" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="375" y="72" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">3</text>
            {/* A-D (6) */}
            <line x1="90" y1="100" x2="160" y2="250" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="105" y="175" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">6</text>
            {/* B-D (8) */}
            <line x1="280" y1="100" x2="160" y2="250" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="200" y="165" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">8</text>
            {/* B-E (5) */}
            <line x1="280" y1="100" x2="400" y2="250" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="355" y="165" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">5</text>
            {/* C-E (7) */}
            <line x1="470" y1="100" x2="400" y2="250" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="450" y="175" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">7</text>
            {/* D-E (9) */}
            <line x1="160" y1="270" x2="400" y2="270" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="280" y="295" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">9</text>
            {/* Nodes */}
            <circle cx="90" cy="80" r="22" fill="#6366f1"/><text x="90" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">A</text>
            <circle cx="280" cy="80" r="22" fill="#6366f1"/><text x="280" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">B</text>
            <circle cx="470" cy="80" r="22" fill="#6366f1"/><text x="470" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">C</text>
            <circle cx="160" cy="270" r="22" fill="#6366f1"/><text x="160" y="276" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">D</text>
            <circle cx="400" cy="270" r="22" fill="#6366f1"/><text x="400" y="276" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">E</text>
          </svg>
        </div>

        <SubHeading>Applying Prim's Algorithm (Starting from A)</SubHeading>
        <AlgoSteps steps={[
          'Start with vertex A. Mark it as visited. Visited = {A}.',
          'Edges from A: A→B(2), A→D(6). Minimum = A→B(2). Add B. MST = {A-B(2)}. Visited = {A, B}.',
          'All edges from visited nodes: A→D(6), B→C(3), B→D(8), B→E(5). Min = B→C(3). Add C. MST = {A-B, B-C}. Visited = {A, B, C}.',
          'Edges: A→D(6), B→D(8), B→E(5), C→E(7). Min = B→E(5). Add E. MST = {A-B, B-C, B-E}. Visited = {A, B, C, E}.',
          'Edges: A→D(6), B→D(8), C→E(7), D→E(9). Min = A→D(6). Add D. MST = {A-B, B-C, B-E, A-D}. Visited = {A, B, C, D, E}.',
          'All 5 vertices visited. MST complete!',
        ]} />

        <SubHeading>Minimum Spanning Tree (Result)</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 560 320" className="w-full max-w-lg mx-auto" style={{ height: 'auto' }}>
            {/* MST edges (green) */}
            <line x1="90" y1="80" x2="280" y2="80" stroke="#16a34a" strokeWidth="4"/>
            <text x="185" y="72" textAnchor="middle" fill="#16a34a" fontSize="14" fontWeight="bold">2</text>
            <line x1="280" y1="80" x2="470" y2="80" stroke="#16a34a" strokeWidth="4"/>
            <text x="375" y="72" textAnchor="middle" fill="#16a34a" fontSize="14" fontWeight="bold">3</text>
            <line x1="280" y1="100" x2="400" y2="250" stroke="#16a34a" strokeWidth="4"/>
            <text x="355" y="165" textAnchor="middle" fill="#16a34a" fontSize="14" fontWeight="bold">5</text>
            <line x1="90" y1="100" x2="160" y2="250" stroke="#16a34a" strokeWidth="4"/>
            <text x="105" y="175" textAnchor="middle" fill="#16a34a" fontSize="14" fontWeight="bold">6</text>
            {/* Non-MST edges (gray dashed) */}
            <line x1="280" y1="100" x2="160" y2="250" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="6,4"/>
            <line x1="470" y1="100" x2="400" y2="250" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="6,4"/>
            <line x1="160" y1="270" x2="400" y2="270" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="6,4"/>
            {/* Nodes */}
            <circle cx="90" cy="80" r="22" fill="#16a34a"/><text x="90" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">A</text>
            <circle cx="280" cy="80" r="22" fill="#16a34a"/><text x="280" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">B</text>
            <circle cx="470" cy="80" r="22" fill="#16a34a"/><text x="470" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">C</text>
            <circle cx="160" cy="270" r="22" fill="#16a34a"/><text x="160" y="276" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">D</text>
            <circle cx="400" cy="270" r="22" fill="#16a34a"/><text x="400" y="276" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">E</text>
            <text x="280" y="310" textAnchor="middle" fill="#16a34a" fontSize="13" fontWeight="bold">MST Total Weight = 2 + 3 + 5 + 6 = 16</text>
          </svg>
        </div>

        <CompTable
          headers={['Edge', 'Weight', 'In MST?']}
          rows={[
            ['A — B', '2', '✅ Yes'],
            ['B — C', '3', '✅ Yes'],
            ['B — E', '5', '✅ Yes'],
            ['A — D', '6', '✅ Yes'],
            ['B — D', '8', '❌ No'],
            ['C — E', '7', '❌ No'],
            ['D — E', '9', '❌ No'],
          ]}
        />

        <KeyPoints points={[
          'A spanning tree of G has exactly |V| − 1 edges and connects all vertices.',
          'MST is the spanning tree with minimum total edge weight.',
          "Prim's algorithm: start from any vertex, greedily add the cheapest edge connecting visited to unvisited.",
          'Total MST weight = 2 + 3 + 5 + 6 = 16.',
          "Prim's uses a priority queue — time complexity O(E log V) with binary heap.",
        ]} />
      </SectionCard>
    </div>
  );
}
