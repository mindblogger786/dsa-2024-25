import { SubQuestion, Definition, CodeBlock, KeyPoints, ComparisonTable, Example, FlowChart, Hr } from './shared';

export default function Question7() {
  return (
    <div className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white px-8 py-6">
          <h2 className="text-2xl font-bold">Question 7: Divide & Conquer, Dijkstra&apos;s Algorithm</h2>
          <p className="text-violet-200 mt-1">Sub-questions (a and b)</p>
        </div>

        <div className="p-6 sm:p-8 space-y-0">

          {/* 7a - Divide and Conquer: Merge Sort vs Quick Sort */}
          <SubQuestion id="q7a" title="7(a). Explain the Divide and Conquer strategy with examples. How do Merge Sort and Quick Sort apply this technique, and how do they differ in terms of time complexity and space usage?">
            <Definition>
              <strong>Divide and Conquer</strong> is a powerful algorithm design paradigm that solves a problem by recursively breaking it into smaller, more manageable subproblems of the same type, solving each subproblem independently, and then combining their solutions to obtain the solution to the original problem. The three phases are: (1) <strong>Divide</strong> — split the problem into smaller subproblems; (2) <strong>Conquer</strong> — recursively solve each subproblem; (3) <strong>Combine</strong> — merge the subproblem solutions into the complete solution.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              The Divide and Conquer strategy is one of the most fundamental and widely used approaches in algorithm design. It naturally leads to recursive solutions and is the basis for many efficient algorithms including Merge Sort, Quick Sort, Binary Search, Strassen's Matrix Multiplication, Closest Pair of Points, and the Fast Fourier Transform (FFT). The efficiency of divide and conquer algorithms is typically analyzed using the <strong>Master Theorem</strong>, which provides a systematic way to solve recurrence relations of the form T(n) = aT(n/b) + f(n).
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Imagine organizing a large library of books. Instead of one person sorting all books, you divide the library into sections (divide), assign each section to a different librarian (conquer), and then merge all the sorted sections together (combine). Each librarian might further divide their section among assistants — this recursive subdivision is the essence of divide and conquer. The total work is much less than one person sorting everything alone.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Merge Sort — Applying Divide and Conquer</h4>
            <p className="text-gray-700 leading-relaxed">
              <strong>Merge Sort</strong> is the quintessential divide and conquer sorting algorithm. It works by recursively dividing the array into two equal halves until each subarray has one element (which is inherently sorted), then merging the sorted subarrays back together in sorted order. The divide step simply splits the array at the midpoint. The conquer step recursively sorts both halves. The combine step is where the actual work happens — it merges two sorted arrays into one sorted array by comparing the front elements of each array and always picking the smaller one.
            </p>

            <FlowChart steps={[
              'DIVIDE: Split the array into two halves at the midpoint (mid = n/2).',
              'CONQUER: Recursively sort the left half and the right half.',
              'BASE CASE: If array has 1 element, it is already sorted.',
              'COMBINE: Merge the two sorted halves into one sorted array.',
              'MERGE: Compare elements from both halves; place smaller element first; repeat until all elements are merged.',
            ]} />

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Quick Sort — Applying Divide and Conquer</h4>
            <p className="text-gray-700 leading-relaxed">
              <strong>Quick Sort</strong> also uses divide and conquer but with a different approach. Instead of dividing at the midpoint and combining later, Quick Sort first does all the work in the <strong>partition</strong> step and then recursively sorts the partitions. It selects a <strong>pivot</strong> element and rearranges the array so that all elements less than the pivot come before it and all elements greater come after it. The pivot is now in its final sorted position. The algorithm then recursively sorts the left and right partitions. Unlike Merge Sort, there is no explicit combine step — the partitioning ensures that when all subarrays are sorted, the entire array is sorted.
            </p>

            <FlowChart steps={[
              'PARTITION: Choose a pivot element (e.g., last element).',
              'Rearrange: Move all elements smaller than pivot to the left, larger to the right.',
              'Pivot is now in its correct sorted position.',
              'CONQUER: Recursively apply Quick Sort to left partition and right partition.',
              'BASE CASE: If partition has 0 or 1 elements, it is sorted.',
              'NO COMBINE STEP NEEDED — array is sorted in place by partitioning.',
            ]} />

            <CodeBlock code={`// Merge Sort Implementation in C
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

// Merge two sorted subarrays
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temporary arrays
    int *L = (int*)malloc(n1 * sizeof(int));
    int *R = (int*)malloc(n2 * sizeof(int));

    // Copy data to temp arrays
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    // Merge the temp arrays back into arr[left..right]
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }

    // Copy remaining elements
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];

    free(L);
    free(R);
}

// Merge Sort main function
void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        // DIVIDE and CONQUER
        mergeSort(arr, left, mid);       // Sort left half
        mergeSort(arr, mid + 1, right);  // Sort right half

        // COMBINE
        merge(arr, left, mid, right);    // Merge sorted halves
    }
}
`}
              title="Merge Sort in C"
            />

            <CodeBlock code={`// Quick Sort Implementation in C
#include &lt;stdio.h&gt;

// Swap two elements
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Partition function — places pivot in correct position
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Choose last element as pivot
    int i = (low - 1);      // Index of smaller element

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);  // Return pivot's correct position
}

// Quick Sort main function
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // PARTITION (the divide work happens here)
        int pi = partition(arr, low, high);

        // CONQUER (no combine step needed)
        quickSort(arr, low, pi - 1);    // Sort left partition
        quickSort(arr, pi + 1, high);   // Sort right partition
    }
}
`}
              title="Quick Sort in C"
            />

            <Example title="Numerical Examples">
              <p><strong>Scenario 1: Merge Sort on [38, 27, 43, 3, 9, 82, 10]</strong></p>
              <div className="bg-gray-50 border rounded-lg p-4 text-xs font-mono mt-2">
                <pre>{`Divide phase:
[38, 27, 43, 3, 9, 82, 10]
→ [38, 27, 43, 3] and [9, 82, 10]
→ [38, 27] [43, 3] [9, 82] [10]
→ [38] [27] [43] [3] [9] [82] [10]

Merge phase (combine):
→ [27, 38] [3, 43] [9, 82] [10]
→ [3, 27, 38, 43] [9, 10, 82]
→ [3, 9, 10, 27, 38, 43, 82]

Total comparisons in merge: ~16
Space used: O(n) temporary arrays`}</pre>
              </div>

              <p className="mt-4"><strong>Scenario 2: Quick Sort on [10, 7, 8, 9, 1, 5]</strong></p>
              <div className="bg-gray-50 border rounded-lg p-4 text-xs font-mono mt-2">
                <pre>{`Partition 1: pivot=5
  [1, 5, 8, 9, 7, 10] → pivot at index 1
  Left: [1] (sorted), Right: [8, 9, 7, 10]

Partition 2: pivot=10 (right part)
  [8, 9, 7, 10] → pivot at index 5
  Left: [8, 9, 7], Right: [] (empty)

Partition 3: pivot=7 (left part)
  [7, 8, 9] → pivot at index 2
  Left: [] , Right: [8, 9]

Partition 4: pivot=9
  [8, 9] → pivot at index 4
  Left: [8], Right: []

Final sorted: [1, 5, 7, 8, 9, 10]
Total comparisons: ~11
Space: O(log n) for recursion stack`}</pre>
              </div>
            </Example>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Merge Sort vs Quick Sort Comparison</h4>
            <ComparisonTable
              headers={['Feature', 'Merge Sort', 'Quick Sort']}
              rows={[
                ['Divide strategy', 'Split at midpoint (equal halves)', 'Partition around pivot (unequal possible)'],
                ['Where work is done', 'COMBINE phase (merging)', 'DIVIDE phase (partitioning)'],
                ['Combine step', 'Required — merge two sorted halves', 'Not needed — in-place partitioning'],
                ['Best case time', 'O(n log n)', 'O(n log n)'],
                ['Average case time', 'O(n log n)', 'O(n log n)'],
                ['Worst case time', 'O(n log n)', 'O(n²) — when pivot is min/max'],
                ['Space complexity', 'O(n) — needs temp arrays for merging', 'O(log n) — recursion stack only'],
                ['Stability', 'Stable — preserves order of equal elements', 'Not stable by default'],
                ['In-place', 'No — requires O(n) extra space', 'Yes — sorts in place'],
                ['Cache performance', 'Good (sequential merge access)', 'Excellent (in-place, good locality)'],
                ['Best used for', 'Linked lists, external sorting, stable sort needed', 'Arrays, in-memory sorting, average-case efficiency'],
                ['Adaptive', 'No — always O(n log n)', 'Yes with optimizations — can detect sorted data'],
              ]}
            />

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Master Theorem Analysis</h4>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 my-4">
              <p className="font-bold text-purple-800 mb-2">📐 Master Theorem: T(n) = aT(n/b) + f(n)</p>
              <p className="mt-2"><strong>Merge Sort:</strong> T(n) = 2T(n/2) + O(n) → a=2, b=2, f(n)=n</p>
              <p>Case 2: f(n) = Θ(n^log_b(a)) = Θ(n^1) = Θ(n) → T(n) = Θ(n log n)</p>
              <p className="mt-3"><strong>Quick Sort (avg):</strong> T(n) = 2T(n/2) + O(n) → same recurrence → T(n) = Θ(n log n)</p>
              <p><strong>Quick Sort (worst):</strong> T(n) = T(n-1) + O(n) → T(n) = O(n²) (skewed partition)</p>
              <p className="mt-3"><strong>Binary Search:</strong> T(n) = T(n/2) + O(1) → a=1, b=2, f(n)=1 → T(n) = O(log n)</p>
            </div>

            <KeyPoints points={[
              'Divide and Conquer: Divide → Conquer (recursive) → Combine.',
              'Merge Sort: Divide at midpoint, recursively sort, merge (combine step). O(n log n) always, O(n) space.',
              'Quick Sort: Partition around pivot, recursively sort partitions, no combine needed. O(n log n) avg, O(n²) worst, O(log n) space.',
              'Merge Sort is stable and guarantees O(n log n); Quick Sort is in-place and cache-friendly.',
              'Master Theorem: T(n) = aT(n/b) + f(n) provides systematic complexity analysis.',
              'Quick Sort worst case can be avoided with randomized pivot selection or median-of-three.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 7b - Dijkstra's Algorithm */}
          <SubQuestion id="q7b" title="7(b). Explain Dijkstra's algorithm with suitable example.">
            <Definition>
              <strong>Dijkstra's Algorithm</strong> is a greedy algorithm that solves the <strong>single-source shortest path</strong> problem for a weighted directed or undirected graph with non-negative edge weights. It finds the shortest path from a given source vertex to all other vertices in the graph. The algorithm maintains a set of vertices whose shortest distance from the source is known (finalized), and at each step, it selects the unvisited vertex with the minimum tentative distance, marks it as visited, and updates the distances of its neighbors.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Developed by computer scientist Edsger W. Dijkstra in 1956, this algorithm is one of the most important graph algorithms with wide-ranging applications. It is used in GPS navigation systems to find the shortest route between locations, in network routing protocols (like OSPF) to determine the best path for data packets, in social networks to find degrees of separation, and in robotics for path planning. The key insight is the greedy approach: by always processing the closest unvisited vertex next, we guarantee that once a vertex's distance is finalized, it will never change — it represents the true shortest distance from the source.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Imagine you are in a city and want to find the shortest travel time to every other city from your current location. You start by noting that your current city has distance 0 and all others have distance infinity. At each step, you "visit" the nearest unvisited city (the one you can reach fastest). When you visit a city, you check all roads leading from it to neighboring cities — if traveling through this city provides a shorter path to a neighbor, you update that neighbor's distance. Once you've visited a city, its shortest distance is guaranteed to be correct. This greedy "always pick the closest" strategy is exactly Dijkstra's algorithm.
            </p>

            <FlowChart steps={[
              'Initialize: Set distance[source] = 0, distance[all others] = ∞. Mark all vertices as unvisited.',
              'Select the unvisited vertex with the minimum distance (initially the source).',
              'For the current vertex u, examine each unvisited neighbor v.',
              'Calculate tentative distance: newDist = dist[u] + weight(u, v).',
              'If newDist < dist[v], update dist[v] = newDist (this is called "relaxation").',
              'After checking all neighbors, mark vertex u as visited (its distance is now finalized).',
              'Repeat steps 2-6 until all vertices are visited or the destination is reached.',
            ]} />

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Example: Step-by-Step Dijkstra's Algorithm</h4>
            <div className="bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`Graph:
        4       1
   A ------ B ----- C
   |        |  \\     |
   | 2      |3   \\   | 5
   |        |    6\\  |
   D ------ E ----- F
      7        2

Vertices: A, B, C, D, E, F
Edges: A-B(4), A-D(2), B-C(1), B-E(3), B-F(6),
       C-F(5), D-E(7), E-F(2)

Source vertex: A
`}</pre>
            </div>

            <div className="bg-gray-50 border rounded-lg p-5 text-sm space-y-3">
              <p className="font-bold">Initialization:</p>
              <div className="font-mono bg-white border rounded p-2 text-xs">
                dist: A=0, B=∞, C=∞, D=∞, E=∞, F=∞ | visited: none
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 1: Visit A (distance=0, minimum unvisited)</p>
                <p>Neighbor B: dist[A]+4=4 &lt; ∞ → dist[B]=4</p>
                <p>Neighbor D: dist[A]+2=2 &lt; ∞ → dist[D]=2</p>
                <div className="font-mono bg-white border rounded p-2 text-xs">
                  dist: A=0✓, B=4, C=∞, D=2, E=∞, F=∞ | visited: A
                </div>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 2: Visit D (distance=2, minimum unvisited)</p>
                <p>Neighbor A: already visited ✓</p>
                <p>Neighbor E: dist[D]+7=9 &lt; ∞ → dist[E]=9</p>
                <div className="font-mono bg-white border rounded p-2 text-xs">
                  dist: A=0✓, B=4, C=∞, D=2✓, E=9, F=∞ | visited: A, D
                </div>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 3: Visit B (distance=4, minimum unvisited)</p>
                <p>Neighbor A: already visited ✓</p>
                <p>Neighbor C: dist[B]+1=5 &lt; ∞ → dist[C]=5</p>
                <p>Neighbor E: dist[B]+3=7 &lt; 9 → dist[E]=7 (updated!)</p>
                <p>Neighbor F: dist[B]+6=10 &lt; ∞ → dist[F]=10</p>
                <div className="font-mono bg-white border rounded p-2 text-xs">
                  dist: A=0✓, B=4✓, C=5, D=2✓, E=7, F=10 | visited: A, D, B
                </div>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 4: Visit C (distance=5, minimum unvisited)</p>
                <p>Neighbor B: already visited ✓</p>
                <p>Neighbor F: dist[C]+5=10 = 10 → no improvement</p>
                <div className="font-mono bg-white border rounded p-2 text-xs">
                  dist: A=0✓, B=4✓, C=5✓, D=2✓, E=7, F=10 | visited: A, D, B, C
                </div>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 5: Visit E (distance=7, minimum unvisited)</p>
                <p>Neighbor B: already visited ✓</p>
                <p>Neighbor D: already visited ✓</p>
                <p>Neighbor F: dist[E]+2=9 &lt; 10 → dist[F]=9 (updated!)</p>
                <div className="font-mono bg-white border rounded p-2 text-xs">
                  dist: A=0✓, B=4✓, C=5✓, D=2✓, E=7✓, F=9 | visited: A, D, B, C, E
                </div>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 6: Visit F (distance=9, last unvisited)</p>
                <p>All neighbors already visited. No updates needed.</p>
                <div className="font-mono bg-white border rounded p-2 text-xs">
                  dist: A=0✓, B=4✓, C=5✓, D=2✓, E=7✓, F=9✓ | visited: ALL
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-5 mt-4">
              <h4 className="font-bold text-green-800 mb-2">✅ Final Shortest Distances from Source A</h4>
              <div className="font-mono text-sm">
                <pre>{`Vertex:    A    B    C    D    E    F
Distance:  0    4    5    2    7    9

Shortest paths from A:
  A → A: 0 (source)
  A → D: 2 (direct: A-D)
  A → B: 4 (direct: A-B)
  A → C: 5 (via B: A-B-C, cost 4+1=5)
  A → E: 7 (via B: A-B-E, cost 4+3=7)
  A → F: 9 (via B-E: A-B-E-F, cost 4+3+2=9)`}</pre>
              </div>
            </div>

            <CodeBlock code={`// Dijkstra's Algorithm Implementation in C
#include &lt;stdio.h&gt;
#include &lt;limits.h&gt;

#define V 6  // Number of vertices

// Find vertex with minimum distance among unvisited
int minDistance(int dist[], int visited[]) {
    int min = INT_MAX, min_index;
    for (int v = 0; v < V; v++)
        if (visited[v] == 0 && dist[v] <= min)
            min = dist[v], min_index = v;
    return min_index;
}

// Print the shortest distances
void printSolution(int dist[]) {
    printf("Vertex \\t Distance from Source\\n");
    for (int i = 0; i < V; i++)
        printf("%c \\t\\t %d\\n", 'A' + i, dist[i]);
}

// Dijkstra's algorithm
void dijkstra(int graph[V][V], int src) {
    int dist[V];      // Shortest distance from src to each vertex
    int visited[V];   // Whether vertex is finalized

    // Initialize all distances as INFINITE and visited as false
    for (int i = 0; i < V; i++) {
        dist[i] = INT_MAX;
        visited[i] = 0;
    }
    dist[src] = 0;    // Distance to source is 0

    // Find shortest path for all vertices
    for (int count = 0; count < V - 1; count++) {
        int u = minDistance(dist, visited);
        visited[u] = 1;

        // Update distances of adjacent vertices
        for (int v = 0; v < V; v++)
            if (!visited[v] && graph[u][v] && dist[u] != INT_MAX
                && dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
    }

    printSolution(dist);
}

int main() {
    // Adjacency matrix representation of the graph
    int graph[V][V] = {
        //A  B  C  D  E  F
        {0, 4, 0, 2, 0, 0},  // A
        {4, 0, 1, 0, 3, 6},  // B
        {0, 1, 0, 0, 0, 5},  // C
        {2, 0, 0, 0, 7, 0},  // D
        {0, 3, 0, 7, 0, 2},  // E
        {0, 6, 5, 0, 2, 0},  // F
    };

    printf("Shortest paths from vertex A:\\n");
    dijkstra(graph, 0);  // Source = A (index 0)
    return 0;
}
`}
              title="Dijkstra's Algorithm in C"
            />

            <Example title="Real-World Scenario">
              <p><strong>Scenario 1: GPS Navigation</strong></p>
              <p>A driver at location A needs to reach location F. The road network is represented as a graph with travel times as edge weights. Dijkstra's algorithm calculates that the fastest route is A → B → E → F with a total travel time of 9 minutes, even though the direct A → B → F route exists (10 minutes) and A → D → E → F is also possible (11 minutes). The algorithm guarantees finding the optimal route efficiently.</p>
              <p className="mt-3"><strong>Scenario 2: Network Routing</strong></p>
              <p>In a computer network with 6 routers (A-F) connected by links with different bandwidths (represented as costs), Router A needs to determine the best path to send data to Router F. Using Dijkstra's OSPF protocol, Router A computes shortest paths to all destinations simultaneously, creating a routing table: D=2 (via direct link), B=4 (via direct link), C=5 (via B), E=7 (via B→E), F=9 (via B→E→F).</p>
            </Example>

            <ComparisonTable
              headers={['Feature', 'Dijkstra', 'Bellman-Ford', 'Floyd-Warshall']}
              rows={[
                ['Approach', 'Greedy', 'Dynamic Programming', 'Dynamic Programming'],
                ['Negative weights', 'Not supported', 'Supported', 'Supported'],
                ['Source', 'Single source', 'Single source', 'All pairs'],
                ['Time complexity', 'O(V²) / O(E log V)', 'O(V × E)', 'O(V³)'],
                ['Space complexity', 'O(V)', 'O(V)', 'O(V²)'],
                ['Best for', 'Dense graphs, GPS', 'Graphs with negative weights', 'All-pairs shortest paths'],
              ]}
            />

            <KeyPoints points={[
              "Dijkstra's algorithm: Greedy, single-source shortest path for non-negative weights.",
              'Time complexity: O(V²) with adjacency matrix, O(E log V) with min-heap priority queue.',
              'Space complexity: O(V) for distance and visited arrays.',
              'Key operation: "Relaxation" — update distance if a shorter path is found through current vertex.',
              'Once a vertex is visited/finalized, its shortest distance never changes.',
              'Cannot handle negative edge weights (use Bellman-Ford for that case).',
              'Applications: GPS navigation, OSPF routing, social network analysis, robotics path planning.',
            ]} />
          </SubQuestion>

        </div>
      </div>
    </div>
  );
}
