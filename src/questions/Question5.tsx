import { SectionCard, DefBox, KeyPoints, CompTable, CodeBlock, AlgoSteps, SubHeading, NoteBox } from '../components/shared';

export default function Question5() {
  return (
    <div className="space-y-8">

      {/* ── (a) DFS and BFS ── */}
      <SectionCard title="(a) DFS &amp; BFS Algorithms — Connected Components">
        <DefBox title="Definitions">
          <p><strong>Depth First Search (DFS):</strong> A graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a <strong>stack</strong> (or recursion) to keep track of the next vertex to visit. The strategy is: go deep first, then backtrack.</p>
          <p className="mt-2"><strong>Breadth First Search (BFS):</strong> A graph traversal algorithm that explores all neighbors of a vertex at the current depth level before moving to vertices at the next depth level. It uses a <strong>queue</strong> to manage the traversal order.</p>
        </DefBox>

        <SubHeading>Sample Graph for Traversal</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 500 300" className="w-full max-w-md mx-auto" style={{ height: 'auto' }}>
            {/* Edges */}
            <line x1="100" y1="60" x2="250" y2="60" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="100" y1="60" x2="60" y2="170" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="100" y1="60" x2="250" y2="170" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="250" y1="60" x2="400" y2="60" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="250" y1="60" x2="250" y2="170" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="400" y1="60" x2="400" y2="170" stroke="#6366f1" strokeWidth="2.5"/>
            <line x1="250" y1="170" x2="400" y2="170" stroke="#6366f1" strokeWidth="2.5"/>
            {/* Nodes */}
            <circle cx="100" cy="60" r="22" fill="#6366f1"/><text x="100" y="66" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">A</text>
            <circle cx="250" cy="60" r="22" fill="#6366f1"/><text x="250" y="66" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">B</text>
            <circle cx="400" cy="60" r="22" fill="#6366f1"/><text x="400" y="66" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">C</text>
            <circle cx="60" cy="170" r="22" fill="#6366f1"/><text x="60" y="176" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">D</text>
            <circle cx="250" cy="170" r="22" fill="#6366f1"/><text x="250" y="176" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">E</text>
            <circle cx="400" cy="170" r="22" fill="#6366f1"/><text x="400" y="176" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">F</text>
            {/* Adj info */}
            <text x="250" y="225" textAnchor="middle" fill="#6b7280" fontSize="10">Adjacency: A→[B,D,E], B→[A,C,E], C→[B,F], D→[A], E→[A,B,F], F→[C,E]</text>
          </svg>
        </div>

        <SubHeading>DFS Algorithm</SubHeading>
        <AlgoSteps steps={[
          'Start at a source vertex. Mark it as visited. Push it onto the stack.',
          'While the stack is not empty: peek at the top vertex.',
          'If the top vertex has an unvisited neighbor → visit it and push it onto the stack.',
          'If the top vertex has NO unvisited neighbors → pop it from the stack (backtrack).',
          'Repeat until the stack is empty.',
          'For recursive DFS: call DFS(v) for each unvisited neighbor.',
        ]} />

        <div className="bg-blue-50 rounded-xl p-4 my-3 border border-blue-200">
          <p className="text-sm font-semibold text-blue-800 mb-1">DFS Traversal from A (alphabetical neighbor order):</p>
          <p className="text-sm text-blue-900 font-mono">Visit A → Visit B → Visit C → Visit F → Visit E → Backtrack to B → Visit D</p>
          <p className="text-sm text-blue-700 mt-1"><strong>DFS Order: A, B, C, F, E, D</strong></p>
        </div>

        <CodeBlock language="c" code={`// DFS Algorithm (Recursive) in C
#define MAX 100

int visited[MAX];
int adj[MAX][MAX]; // Adjacency matrix
int n; // Number of vertices

void DFS(int vertex) {
    visited[vertex] = 1;
    printf("%d ", vertex);

    for (int i = 0; i < n; i++) {
        // Visit all adjacent unvisited vertices
        if (adj[vertex][i] == 1 && !visited[i]) {
            DFS(i);
        }
    }
}

// To traverse entire graph (handles disconnected graphs):
void DFSTraversal() {
    for (int i = 0; i < n; i++)
        visited[i] = 0;

    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            DFS(i);
            // Each call identifies one connected component
        }
    }
}`}/>

        <SubHeading>BFS Algorithm</SubHeading>
        <AlgoSteps steps={[
          'Start at a source vertex. Mark it as visited. Enqueue it.',
          'While the queue is not empty: dequeue a vertex.',
          'Visit all unvisited neighbors of the dequeued vertex, mark them as visited, and enqueue them.',
          'Repeat until the queue is empty.',
        ]} />

        <div className="bg-green-50 rounded-xl p-4 my-3 border border-green-200">
          <p className="text-sm font-semibold text-green-800 mb-1">BFS Traversal from A:</p>
          <p className="text-sm text-green-900">Level 0: A → Level 1: B, D, E → Level 2: C, F</p>
          <p className="text-sm text-green-700 mt-1"><strong>BFS Order: A, B, D, E, C, F</strong></p>
        </div>

        <CodeBlock language="c" code={`// BFS Algorithm in C
void BFS(int start) {
    int queue[MAX], front = 0, rear = 0;

    visited[start] = 1;
    queue[rear++] = start;

    while (front < rear) {
        int vertex = queue[front++];
        printf("%d ", vertex);

        for (int i = 0; i < n; i++) {
            if (adj[vertex][i] == 1 && !visited[i]) {
                visited[i] = 1;
                queue[rear++] = i;
            }
        }
    }
}

// Full traversal (handles disconnected graphs):
void BFSTraversal() {
    for (int i = 0; i < n; i++)
        visited[i] = 0;

    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            BFS(i);
            // Each BFS call from unvisited vertex = new connected component
        }
    }
}`}/>

        <SubHeading>Identifying Connected Components</SubHeading>
        <NoteBox>
          <p>A <strong>connected component</strong> is a maximal set of vertices where each vertex is reachable from every other vertex in the set.</p>
          <p className="mt-2"><strong>Using DFS/BFS to find connected components:</strong></p>
          <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
            <li>Initialize all vertices as unvisited.</li>
            <li>For each unvisited vertex, run DFS/BFS starting from it.</li>
            <li>All vertices visited in that call form one connected component.</li>
            <li>The number of times you need to initiate DFS/BFS = number of connected components.</li>
          </ol>
        </NoteBox>

        <CompTable
          headers={['Aspect', 'DFS', 'BFS']}
          rows={[
            ['Data Structure Used', 'Stack (or Recursion)', 'Queue'],
            ['Strategy', 'Go deep, then backtrack', 'Explore level by level'],
            ['Shortest Path?', 'No (not guaranteed)', 'Yes (in unweighted graphs)'],
            ['Time Complexity', 'O(V + E)', 'O(V + E)'],
            ['Space Complexity', 'O(V) — recursion/stack', 'O(V) — queue'],
            ['Applications', 'Topological sort, cycle detection, maze solving', 'Shortest path, level-order, peer-to-peer networks'],
          ]}
        />

        <KeyPoints points={[
          'DFS uses stack/recursion — explores as deep as possible before backtracking.',
          'BFS uses queue — explores all neighbors at current depth before going deeper.',
          'Both have O(V + E) time complexity for adjacency list representation.',
          'BFS finds shortest path in unweighted graphs; DFS does not.',
          'To find connected components: run DFS/BFS from each unvisited vertex.',
          'Number of connected components = number of times DFS/BFS is initiated.',
        ]} />
      </SectionCard>

      {/* ── (b) Heap Sort ── */}
      <SectionCard title="(b) Heap Sort Algorithm — Max-Heap Construction &amp; Sorting">
        <DefBox title="Definition — Heap Sort">
          <p>
            <strong>Heap Sort</strong> is a comparison-based sorting algorithm that uses a <strong>Binary Heap</strong> data structure. It works in two phases: first, it builds a <strong>Max-Heap</strong> from the unsorted array, then repeatedly extracts the maximum element (root) and places it at the end of the array, rebuilding the heap each time. Heap Sort guarantees <strong>O(n log n)</strong> time complexity in all cases (best, average, worst).
          </p>
        </DefBox>

        <SubHeading>What is a Max-Heap?</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-3 border border-gray-200 text-sm text-gray-600">
          <p>A <strong>Max-Heap</strong> is a complete binary tree where the value of every parent node is <strong>greater than or equal to</strong> the values of its children. The <strong>maximum element is always at the root</strong>.</p>
          <p className="mt-2"><strong>Properties:</strong></p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>For node at index i: left child at 2i+1, right child at 2i+2.</li>
            <li>Parent of node at index i: floor((i−1)/2).</li>
            <li>Height of heap with n nodes: ⌊log₂ n⌋.</li>
          </ul>
        </div>

        <SubHeading>Algorithm Steps</SubHeading>
        <AlgoSteps steps={[
          'Build Phase: Convert the input array into a Max-Heap (heapify from last non-leaf to root).',
          'Sort Phase: Swap the root (largest element) with the last element of the heap.',
          'Reduce heap size by 1 (exclude the sorted last element).',
          'Heapify the root to restore the Max-Heap property.',
          'Repeat steps 2–4 until the heap size is 1.',
        ]} />

        <SubHeading>Step-by-Step Example</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-3 border border-gray-200 text-sm">
          <p className="font-semibold text-gray-800 mb-2">Input: [4, 10, 3, 5, 1]</p>
          <p className="font-semibold text-indigo-700 mt-3">Phase 1: Build Max-Heap</p>
          <ul className="text-gray-600 space-y-1 ml-4 list-disc">
            <li>Start from last non-leaf = index 1 (value 10). Heapify.</li>
            <li>Node 10: children 5, 1 → 10 is largest. No swap needed.</li>
            <li>Node 4 (index 0): children 10, 3 → 10 &gt; 4, swap. Result: [10, 4, 3, 5, 1]</li>
            <li>After heapifying subtree: 4 has children 5, 1 → 5 &gt; 4, swap. Result: [10, 5, 3, 4, 1]</li>
            <li><strong>Max-Heap built: [10, 5, 3, 4, 1]</strong></li>
          </ul>

          <p className="font-semibold text-indigo-700 mt-4">Phase 2: Sorting</p>
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full text-xs font-mono">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="px-3 py-2 text-left">Step</th>
                  <th className="px-3 py-2 text-left">Action</th>
                  <th className="px-3 py-2 text-left">Array</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="px-3 py-1">1</td><td className="px-3 py-1">Swap 10 ↔ 1, heapify</td><td className="px-3 py-1">[5, 4, 3, 1, <strong className="text-green-600">10</strong>]</td></tr>
                <tr className="bg-gray-50"><td className="px-3 py-1">2</td><td className="px-3 py-1">Swap 5 ↔ 1, heapify</td><td className="px-3 py-1">[4, 1, 3, <strong className="text-green-600">5, 10</strong>]</td></tr>
                <tr className="bg-white"><td className="px-3 py-1">3</td><td className="px-3 py-1">Swap 4 ↔ 3, heapify</td><td className="px-3 py-1">[3, 1, <strong className="text-green-600">4, 5, 10</strong>]</td></tr>
                <tr className="bg-gray-50"><td className="px-3 py-1">4</td><td className="px-3 py-1">Swap 3 ↔ 1</td><td className="px-3 py-1">[<strong className="text-green-600">1, 3, 4, 5, 10</strong>]</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-green-700 font-semibold">Sorted: [1, 3, 4, 5, 10] ✓</p>
        </div>

        <CodeBlock language="c" code={`// Heap Sort Implementation in C

// Heapify subtree rooted at index i
void heapify(int arr[], int n, int i) {
    int largest = i;
    int left  = 2 * i + 1;
    int right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest])
        largest = left;

    // If right child is larger than current largest
    if (right < n && arr[right] > arr[largest])
        largest = right;

    // If largest is not root, swap and continue heapifying
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);  // Recursively heapify
    }
}

// Main Heap Sort function
void heapSort(int arr[], int n) {
    // Phase 1: Build max-heap
    // Start from last non-leaf node (n/2 - 1)
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // Phase 2: Extract elements one by one
    for (int i = n - 1; i > 0; i--) {
        // Move current root to end
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Heapify reduced heap
        heapify(arr, i, 0);
    }
}`}/>

        <SubHeading>Heap Structure Visualization</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 500 220" className="w-full max-w-md mx-auto" style={{ height: 'auto' }}>
            <text x="250" y="18" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="bold">Max-Heap: [10, 5, 3, 4, 1]</text>
            {/* Level 0 */}
            <circle cx="250" cy="50" r="22" fill="#dc2626"/><text x="250" y="56" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">10</text>
            {/* Level 1 */}
            <line x1="250" y1="72" x2="150" y2="110" stroke="#6366f1" strokeWidth="2"/>
            <line x1="250" y1="72" x2="350" y2="110" stroke="#6366f1" strokeWidth="2"/>
            <circle cx="150" cy="130" r="22" fill="#6366f1"/><text x="150" y="136" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">5</text>
            <circle cx="350" cy="130" r="22" fill="#6366f1"/><text x="350" y="136" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
            {/* Level 2 */}
            <line x1="150" y1="152" x2="100" y2="180" stroke="#6366f1" strokeWidth="2"/>
            <line x1="150" y1="152" x2="200" y2="180" stroke="#6366f1" strokeWidth="2"/>
            <circle cx="100" cy="198" r="20" fill="#a78bfa"/><text x="100" y="204" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">4</text>
            <circle cx="200" cy="198" r="20" fill="#a78bfa"/><text x="200" y="204" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">1</text>
            <text x="250" y="215" textAnchor="middle" fill="#6b7280" fontSize="10">Root is max element → swap to end → heapify again</text>
          </svg>
        </div>

        <CompTable
          headers={['Case', 'Time Complexity', 'Space Complexity', 'Stable?']}
          rows={[
            ['Best Case', 'O(n log n)', 'O(1)', 'No'],
            ['Average Case', 'O(n log n)', 'O(1)', 'No'],
            ['Worst Case', 'O(n log n)', 'O(1)', 'No'],
          ]}
        />

        <KeyPoints points={[
          'Heap Sort always runs in O(n log n) — guaranteed for all cases.',
          'In-place algorithm — O(1) extra space (no additional arrays needed).',
          'Not stable — does not preserve relative order of equal elements.',
          'Build Max-Heap takes O(n) time (not O(n log n) — tighter analysis).',
          'Heapify operation takes O(log n) time.',
          'Heap Sort = Build Heap (O(n)) + n × Extract Max (O(n log n)) = O(n log n).',
        ]} />
      </SectionCard>
    </div>
  );
}
