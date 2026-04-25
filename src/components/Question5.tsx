import { SubQuestion, Definition, CodeBlock, KeyPoints, ComparisonTable, Example, FlowChart, Hr } from './shared';

export default function Question5() {
  return (
    <div className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-8 py-6">
          <h2 className="text-2xl font-bold">Question 5: DFS, BFS & Heap Sort</h2>
          <p className="text-cyan-200 mt-1">Sub-questions (a and b)</p>
        </div>

        <div className="p-6 sm:p-8 space-y-0">

          {/* 5a - DFS and BFS */}
          <SubQuestion id="q5a" title="5(a). Explain Depth First Search (DFS) and Breadth First Search (BFS) algorithms with examples. How are they used to identify connected components in a graph?">
            <Definition>
              <strong>Depth First Search (DFS)</strong> and <strong>Breadth First Search (BFS)</strong> are two fundamental graph traversal algorithms that systematically visit all vertices of a graph. DFS explores as deep as possible along each branch before backtracking (using a stack or recursion), while BFS explores all neighbors at the current depth level before moving to the next level (using a queue). Both algorithms have a time complexity of O(V + E) where V is the number of vertices and E is the number of edges.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Depth First Search (DFS)</strong> works like exploring a maze by always taking the leftmost path and going as deep as possible, only backtracking when you hit a dead end. It uses a stack (or recursion, which internally uses the call stack) to keep track of the path. When a vertex is visited, all its unvisited neighbors are pushed onto the stack, and the top element is popped and processed next. This ensures that we go deep before going wide. DFS is particularly useful for topological sorting, detecting cycles, finding paths, and solving maze-type problems.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Breadth First Search (BFS)</strong> works like a ripple spreading across water — it visits all vertices at distance 1 from the source, then all at distance 2, and so on. It uses a queue to maintain the frontier of exploration. When a vertex is visited, all its unvisited neighbors are enqueued, and vertices are processed in FIFO order. BFS guarantees finding the shortest path (in terms of number of edges) in an unweighted graph. It is used in shortest path algorithms, level-order traversal, peer-to-peer networks, and social network analysis.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Imagine searching a house for a lost item. DFS is like thoroughly searching one room completely (even the attic and basement) before moving to the next room. BFS is like quickly glancing in every room on the first floor, then every room on the second floor, gradually going deeper. DFS is depth-first (go deep, then backtrack); BFS is breadth-first (scan wide, then go deeper).
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">DFS Algorithm</h4>
            <FlowChart steps={[
              'Start at a source vertex. Mark it as visited. Push it onto the stack.',
              'While the stack is not empty:',
              '  Pop a vertex v from the stack. Process (print) vertex v.',
              '  For each unvisited neighbor u of v: mark u as visited, push u onto stack.',
              'Repeat until the stack is empty.',
            ]} />

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">BFS Algorithm</h4>
            <FlowChart steps={[
              'Start at a source vertex. Mark it as visited. Enqueue it.',
              'While the queue is not empty:',
              '  Dequeue a vertex v. Process (print) vertex v.',
              '  For each unvisited neighbor u of v: mark u as visited, enqueue u.',
              'Repeat until the queue is empty.',
            ]} />

            <Example title="Example Graph Traversal">
              <div className="bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`
    Graph (Undirected):
    0 --- 1
    |     |
    2 --- 3 --- 4
          |
          5

    Adjacency List:
    0: [1, 2]
    1: [0, 3]
    2: [0, 3]
    3: [1, 2, 4, 5]
    4: [3]
    5: [3]
`}</pre>
              </div>

              <p className="mt-4"><strong>DFS Traversal (starting from vertex 0):</strong></p>
              <div className="bg-gray-50 border rounded-lg p-4 text-sm font-mono text-xs">
                <pre>{`Start: Stack=[0], Visited={0}
Pop 0 → Print 0. Neighbors 1,2 not visited → Push 2, then 1
  Stack=[2,1], Visited={0,1,2}
Pop 1 → Print 1. Neighbor 3 not visited → Push 3
  Stack=[2,3], Visited={0,1,2,3}
Pop 3 → Print 3. Neighbors 4,5 not visited → Push 5, then 4
  Stack=[2,4,5], Visited={0,1,2,3,4,5}
Pop 5 → Print 5. No unvisited neighbors. Stack=[2,4]
Pop 4 → Print 4. No unvisited neighbors. Stack=[2]
Pop 2 → Print 2. No unvisited neighbors. Stack=[]

DFS Order: 0, 1, 3, 5, 4, 2`}</pre>
              </div>

              <p className="mt-4"><strong>BFS Traversal (starting from vertex 0):</strong></p>
              <div className="bg-gray-50 border rounded-lg p-4 text-sm font-mono text-xs">
                <pre>{`Start: Queue=[0], Visited={0}
Dequeue 0 → Print 0. Neighbors 1,2 → Enqueue
  Queue=[1,2], Visited={0,1,2}
Dequeue 1 → Print 1. Neighbor 3 → Enqueue
  Queue=[2,3], Visited={0,1,2,3}
Dequeue 2 → Print 2. Neighbor 3 already visited. Queue=[3]
Dequeue 3 → Print 3. Neighbors 4,5 → Enqueue
  Queue=[4,5], Visited={0,1,2,3,4,5}
Dequeue 4 → Print 4. No unvisited neighbors. Queue=[5]
Dequeue 5 → Print 5. No unvisited neighbors. Queue=[]

BFS Order: 0, 1, 2, 3, 4, 5`}</pre>
              </div>
            </Example>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Identifying Connected Components</h4>
            <p className="text-gray-700 leading-relaxed">
              A <strong>connected component</strong> in an undirected graph is a maximal set of vertices such that there is a path between every pair of vertices in the set. Both DFS and BFS can identify connected components by performing traversal starting from an unvisited vertex — all vertices reached during this traversal belong to the same connected component. The algorithm repeats this process, starting a new traversal from any remaining unvisited vertex, until all vertices are visited. The number of times we need to start a new traversal equals the number of connected components.
            </p>

            <CodeBlock code={`// Finding Connected Components using DFS
void findConnectedComponents(int graph[MAX][MAX], int V) {
    int visited[MAX] = {0};
    int componentCount = 0;

    for (int v = 0; v < V; v++) {
        if (!visited[v]) {
            componentCount++;
            printf("Component %d: ", componentCount);
            DFS(graph, v, visited, V);
            printf("\\n");
        }
    }
    printf("Total connected components: %d\\n", componentCount);
}

void DFS(int graph[MAX][MAX], int v, int visited[], int V) {
    visited[v] = 1;
    printf("%d ", v);
    for (int u = 0; u < V; u++) {
        if (graph[v][u] && !visited[u]) {
            DFS(graph, u, visited, V);
        }
    }
}`} title="Connected Components using DFS (C)" />

            <Example title="Connected Components Scenario">
              <div className="font-mono text-xs bg-white border rounded p-4">
                <pre>{`Scenario 1: A graph with vertices {0,1,2,3,4,5,6,7}
  where 0-1-2-3 are connected, 4-5-6 are connected, and 7 is isolated.

  DFS from 0 reaches {0,1,2,3} → Component 1
  DFS from 4 reaches {4,5,6}   → Component 2
  DFS from 7 reaches {7}       → Component 3

  Total: 3 connected components.

Scenario 2: Social network with 6 people
  Alice-Bob-Charlie form a friend group
  David-Eve-Fiona form another group
  No connections between the groups.

  BFS from Alice visits {Alice, Bob, Charlie} → Component 1
  BFS from David visits {David, Eve, Fiona}   → Component 2
  Two separate communities identified!`}</pre>
              </div>
            </Example>

            <ComparisonTable
              headers={['Feature', 'DFS', 'BFS']}
              rows={[
                ['Data Structure', 'Stack (or Recursion)', 'Queue'],
                ['Strategy', 'Go deep, then backtrack', 'Go wide, level by level'],
                ['Shortest Path', 'Does NOT guarantee shortest path', 'Guarantees shortest path in unweighted graphs'],
                ['Memory', 'O(V) — stack depth', 'O(V) — queue size (can be large for wide graphs)'],
                ['Time Complexity', 'O(V + E)', 'O(V + E)'],
                ['Uses', 'Cycle detection, topological sort, maze solving', 'Shortest path, level-order, peer-to-peer networks'],
                ['Traversal order', 'Goes to depth first', 'Explores all neighbors first'],
              ]}
            />

            <KeyPoints points={[
              'DFS uses a stack (or recursion); BFS uses a queue for traversal.',
              'Both have time complexity O(V + E) for adjacency list representation.',
              'BFS guarantees shortest path in unweighted graphs; DFS does not.',
              'Connected components: Run DFS/BFS from every unvisited vertex; count of runs = number of components.',
              'DFS is preferred for topological sorting, cycle detection, and pathfinding in mazes.',
              'BFS is preferred for shortest path, level-order traversal, and network broadcasting.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 5b - Heap Sort */}
          <SubQuestion id="q5b" title="5(b). Describe the Heap Sort algorithm. How is a max-heap constructed, and how does it help in sorting an array?">
            <Definition>
              <strong>Heap Sort</strong> is a comparison-based sorting algorithm that uses a Binary Heap data structure to sort elements. A <strong>Max-Heap</strong> is a complete binary tree where the value of each parent node is greater than or equal to the values of its children. Heap Sort works by first building a max-heap from the input array, then repeatedly extracting the maximum element (root of the heap) and placing it at the end of the array, and restoring the heap property for the remaining elements.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Heap Sort combines the best features of Merge Sort and Insertion Sort: like Merge Sort, it has a guaranteed O(n log n) time complexity in all cases (best, average, worst), and like Insertion Sort, it sorts in-place, requiring only O(1) auxiliary space. The key insight is that in a max-heap, the largest element is always at the root (index 0 of the array representation). By swapping the root with the last unsorted element and reducing the heap size by one, we can place each element in its correct sorted position.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Imagine a tournament where the strongest player always rises to the top (root of the max-heap). In each round, you crown the champion (move root to sorted section), then re-organize the remaining players to find the new champion (heapify). Repeat until every player is ranked. The tournament bracket is the heap, and each "heapify" operation restores the tournament structure after removing the champion.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">How Max-Heap is Constructed</h4>
            <p className="text-gray-700 leading-relaxed">
              To build a max-heap from an arbitrary array, we use a process called <strong>heapify</strong> (also called "sift-down" or "max-heapify"). Starting from the last non-leaf node (at index n/2 - 1) and working backward to the root, we call heapify on each node. The heapify function ensures that the subtree rooted at a given node satisfies the max-heap property by comparing the node with its children and swapping with the larger child if necessary, then recursively heapifying the affected subtree.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-4">
              <p className="font-bold text-blue-800 mb-2">📐 Array to Heap Mapping:</p>
              <p>• Parent of node at index i: <code className="bg-white px-1 rounded">(i-1)/2</code></p>
              <p>• Left child of node at index i: <code className="bg-white px-1 rounded">2i + 1</code></p>
              <p>• Right child of node at index i: <code className="bg-white px-1 rounded">2i + 2</code></p>
              <p>• Last non-leaf node: <code className="bg-white px-1 rounded">n/2 - 1</code></p>
            </div>

            <FlowChart steps={[
              'BUILD MAX-HEAP: Start from last non-leaf node (n/2 - 1) down to root.',
              'For each node, call heapify: compare with children, swap with larger child if needed.',
              'Repeat heapify recursively on the swapped subtree until heap property is restored.',
              'EXTRACT & SORT: After max-heap is built, swap root (max) with last unsorted element.',
              'Reduce heap size by 1. Call heapify on root to restore max-heap.',
              'Repeat extraction until only 1 element remains. Array is now sorted.',
            ]} />

            <CodeBlock code={`// Heap Sort Implementation in C
#include &lt;stdio.h&gt;

// Swap two elements
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Heapify a subtree rooted at index i
// n is the size of the heap
void heapify(int arr[], int n, int i) {
    int largest = i;          // Initialize largest as root
    int left = 2 * i + 1;    // Left child
    int right = 2 * i + 2;   // Right child

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest])
        largest = left;

    // If right child is larger than current largest
    if (right < n && arr[right] > arr[largest])
        largest = right;

    // If largest is not root, swap and continue heapifying
    if (largest != i) {
        swap(&arr[i], &arr[largest]);
        heapify(arr, n, largest);  // Recursively heapify affected subtree
    }
}

// Main Heap Sort function
void heapSort(int arr[], int n) {
    // Step 1: Build max-heap
    // Start from last non-leaf node and heapify each node
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    printf("Max-Heap built: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    // Step 2: Extract elements from heap one by one
    for (int i = n - 1; i > 0; i--) {
        swap(&arr[0], &arr[i]);   // Move current root to end
        heapify(arr, i, 0);       // Heapify reduced heap
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");

    heapSort(arr, n);

    printf("Sorted array:   ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`} title="Heap Sort Implementation in C" />

            <Example title="Step-by-Step Numerical Example">
              <p><strong>Scenario 1: Input [4, 10, 3, 5, 1]</strong></p>
              <div className="bg-gray-50 border rounded-lg p-4 text-sm mt-2">
                <p><strong>Build Max-Heap:</strong> Last non-leaf = 5/2 - 1 = 1</p>
                <p>Heapify(1): arr[1]=10, left=arr[3]=5, right=arr[4]=1. 10 is largest → no swap.</p>
                <p>Heapify(0): arr[0]=4, left=arr[1]=10, right=arr[2]=3. 10&gt;4 → swap(4,10).</p>
                <p>Array: [10, 4, 3, 5, 1] → Heapify(1): arr[1]=4, left=arr[3]=5. 5&gt;4 → swap.</p>
                <p className="text-blue-700 font-bold">Max-Heap: [10, 5, 3, 4, 1]</p>
                <p className="mt-2"><strong>Sorting Phase:</strong></p>
                <p>Swap root(10) with last(1): [1, 5, 3, 4 | 10] → Heapify: [5, 4, 3, 1 | 10]</p>
                <p>Swap root(5) with last(1): [1, 4, 3 | 5, 10] → Heapify: [4, 1, 3 | 5, 10]</p>
                <p>Swap root(4) with last(3): [3, 1 | 4, 5, 10] → Heapify: [3, 1 | 4, 5, 10]</p>
                <p>Swap root(3) with last(1): [1 | 3, 4, 5, 10] → Done!</p>
                <p className="text-green-700 font-bold">Sorted: [1, 3, 4, 5, 10] ✓</p>
              </div>

              <p className="mt-4"><strong>Scenario 2: Input [12, 11, 13, 5, 6, 7]</strong></p>
              <div className="bg-gray-50 border rounded-lg p-4 text-sm mt-2">
                <p>Build Max-Heap from bottom up:</p>
                <p>Heapify(2): 13 vs 7 → 13 stays. Heap after: [12, 11, 13, 5, 6, 7]</p>
                <p>Heapify(1): 11 vs 5,6 → 11 stays. Heap after: [12, 11, 13, 5, 6, 7]</p>
                <p>Heapify(0): 12 vs 11,13 → swap with 13: [13, 11, 12, 5, 6, 7]</p>
                <p>  → Heapify(2): 12 vs 7 → 12 stays.</p>
                <p className="text-blue-700 font-bold">Max-Heap: [13, 11, 12, 5, 6, 7]</p>
                <p className="mt-1">Extract: 13→end [12,11,7,5,6|13]→[11,6,7,5|12,13]→[7,6,5|11,12,13]→[6,5|7,11,12,13]→[5|6,7,11,12,13]</p>
                <p className="text-green-700 font-bold">Sorted: [5, 6, 7, 11, 12, 13] ✓</p>
              </div>
            </Example>

            <ComparisonTable
              headers={['Case', 'Time Complexity', 'Description']}
              rows={[
                ['Best Case', 'O(n log n)', 'Even if already sorted, heapify still processes all nodes'],
                ['Average Case', 'O(n log n)', 'Each of n extraction steps takes O(log n) for heapify'],
                ['Worst Case', 'O(n log n)', 'Same as best — guaranteed performance!'],
                ['Space', 'O(1)', 'In-place sorting, no extra arrays needed'],
              ]}
            />

            <KeyPoints points={[
              'Heap Sort uses a max-heap where parent ≥ children at every node.',
              'Build max-heap: O(n) time using bottom-up heapify from last non-leaf node.',
              'Sorting: Repeatedly swap root with last element, reduce heap, heapify root. O(n log n).',
              'Total time complexity: O(n log n) in ALL cases — best, average, and worst.',
              'Space complexity: O(1) — in-place sorting algorithm.',
              'Heap Sort is NOT stable (does not preserve relative order of equal elements).',
              'Heap property: Parent(i) = (i-1)/2, Left(i) = 2i+1, Right(i) = 2i+2.',
            ]} />
          </SubQuestion>

        </div>
      </div>
    </div>
  );
}
