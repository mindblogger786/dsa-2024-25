import { SectionCard, DefBox, KeyPoints, CompTable, CodeBlock, AlgoSteps, SubHeading } from '../components/shared';

export default function Question7() {
  return (
    <div className="space-y-8">

      {/* ── (a) Divide & Conquer — Merge Sort vs Quick Sort ── */}
      <SectionCard title="(a) Divide &amp; Conquer: Merge Sort vs Quick Sort">
        <DefBox title="Definition — Divide and Conquer">
          <p>
            <strong>Divide and Conquer</strong> is a fundamental algorithm design paradigm that breaks a problem into <strong>smaller, independent subproblems</strong> of the same type, solves them <strong>recursively</strong>, and then <strong>combines</strong> their solutions to solve the original problem. It consists of three phases:
          </p>
          <ol className="list-decimal list-inside mt-2 text-sm space-y-1">
            <li><strong>Divide:</strong> Split the problem into smaller subproblems.</li>
            <li><strong>Conquer:</strong> Recursively solve each subproblem (base case solves directly).</li>
            <li><strong>Combine:</strong> Merge the solutions of subproblems into the final solution.</li>
          </ol>
        </DefBox>

        <SubHeading>Merge Sort — Applying Divide and Conquer</SubHeading>
        <AlgoSteps steps={[
          'Divide: Split the array into two halves — left half and right half.',
          'Conquer: Recursively sort each half by applying Merge Sort.',
          'Combine: Merge the two sorted halves into a single sorted array using a two-pointer technique.',
          'Base case: If the array has 1 or 0 elements, it is already sorted.',
        ]} />

        <div className="bg-blue-50 rounded-xl p-4 my-3 border border-blue-200 text-sm">
          <p className="font-bold text-blue-800 mb-2">Example: Merge Sort on [38, 27, 43, 3, 9, 82, 10]</p>
          <div className="font-mono text-xs space-y-1 text-blue-900">
            <p>[38, 27, 43, 3, 9, 82, 10]</p>
            <p>→ [38, 27, 43, 3] &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;[9, 82, 10] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-500">← Divide</span></p>
            <p>→ [38, 27] | [43, 3] | [9, 82] | [10]</p>
            <p>→ [38] | [27] | [43] | [3] | [9] | [82] | [10] &nbsp;&nbsp;<span className="text-blue-500">← Base cases</span></p>
            <p>→ [27, 38] | [3, 43] | [9, 82] | [10] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-600">← Merge</span></p>
            <p>→ [3, 27, 38, 43] &nbsp;&nbsp;| [9, 10, 82]</p>
            <p>→ <strong>[3, 9, 10, 27, 38, 43, 82]</strong> ✅</p>
          </div>
        </div>

        <CodeBlock language="c" code={`// Merge Sort in C
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temporary arrays
    int L[n1], R[n2];

    // Copy data to temp arrays
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    // Merge the temp arrays back
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
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);       // Sort left half
        mergeSort(arr, mid + 1, right);  // Sort right half
        merge(arr, left, mid, right);    // Merge sorted halves
    }
}`}/>

        <SubHeading>Quick Sort — Applying Divide and Conquer</SubHeading>
        <AlgoSteps steps={[
          'Choose a pivot element (first, last, random, or median).',
          'Partition: Rearrange so all elements less than pivot are to its left, and all greater elements are to its right.',
          'Recursively apply Quick Sort to the left partition and right partition.',
          'No explicit combine step needed — the array is sorted in place after partitioning.',
        ]} />

        <div className="bg-purple-50 rounded-xl p-4 my-3 border border-purple-200 text-sm">
          <p className="font-bold text-purple-800 mb-2">Example: Quick Sort on [10, 80, 30, 90, 40, 50, 70] (pivot = last)</p>
          <div className="font-mono text-xs space-y-1 text-purple-900">
            <p>Partition around 70: [10, 30, 40, 50] <strong>70</strong> [80, 90]</p>
            <p>Left partition around 50: [10, 30, 40] <strong>50</strong> []</p>
            <p>Left around 40: [10, 30] <strong>40</strong> []</p>
            <p>Left around 30: [10] <strong>30</strong> []</p>
            <p>Right partition around 90: [80] <strong>90</strong> []</p>
            <p>→ <strong>[10, 30, 40, 50, 70, 80, 90]</strong> ✅</p>
          </div>
        </div>

        <CodeBlock language="c" code={`// Quick Sort in C
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Choose last element as pivot
    int i = low - 1;        // Index of smaller element

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // Place pivot in correct position
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);  // Partition index
        quickSort(arr, low, pi - 1);         // Sort left of pivot
        quickSort(arr, pi + 1, high);        // Sort right of pivot
    }
}`}/>

        <SubHeading>Comparison: Merge Sort vs Quick Sort</SubHeading>
        <CompTable
          headers={['Aspect', 'Merge Sort', 'Quick Sort']}
          rows={[
            ['Divide Strategy', 'Split array into two equal halves', 'Partition around a pivot element'],
            ['Combine Step', 'Required — merge two sorted halves', 'Not required — sorted in place'],
            ['Time (Best)', 'O(n log n)', 'O(n log n)'],
            ['Time (Average)', 'O(n log n)', 'O(n log n)'],
            ['Time (Worst)', 'O(n log n)', 'O(n²) — when pivot is always min/max'],
            ['Space Complexity', 'O(n) — needs temp arrays for merge', 'O(log n) — recursive stack only'],
            ['Stable?', 'Yes — preserves relative order', 'No — swaps may change order'],
            ['In-Place?', 'No — uses extra O(n) space', 'Yes — sorts within the array'],
            ['Preferred For', 'Linked lists, external sorting, stable sort needs', 'Arrays, in-memory sorting, cache performance'],
            ['Adaptive?', 'No — always O(n log n)', 'Yes — can be optimized with pivot choice'],
          ]}
        />

        <KeyPoints points={[
          'Both Merge Sort and Quick Sort use Divide and Conquer.',
          'Merge Sort: guaranteed O(n log n) in all cases, but requires O(n) extra space.',
          'Quick Sort: O(n log n) average, O(n²) worst case, but O(log n) space and cache-friendly.',
          'Merge Sort is stable; Quick Sort is not.',
          'Quick Sort is generally faster in practice due to better cache performance and in-place sorting.',
          'Merge Sort is preferred for linked lists and external sorting.',
          'Quick Sort worst case can be avoided using randomized pivot or median-of-three.',
        ]} />
      </SectionCard>

      {/* ── (b) Dijkstra's Algorithm ── */}
      <SectionCard title="(b) Explain Dijkstra's Algorithm with Example">
        <DefBox title="Definition — Dijkstra's Algorithm">
          <p>
            <strong>Dijkstra's algorithm</strong> (developed by Edsger W. Dijkstra in 1956) is a <strong>greedy algorithm</strong> that finds the <strong>shortest path from a single source vertex</strong> to all other vertices in a <strong>weighted graph with non-negative edge weights</strong>. It works by maintaining a set of visited vertices and repeatedly selecting the unvisited vertex with the smallest known distance, then updating the distances of its neighbors.
          </p>
        </DefBox>

        <SubHeading>Algorithm Steps</SubHeading>
        <AlgoSteps steps={[
          'Initialize: Set distance to source = 0, and distance to all other vertices = ∞. Mark all vertices as unvisited.',
          'Select the unvisited vertex with the smallest distance (call it u).',
          'For each unvisited neighbor v of u: calculate tentative distance = dist[u] + weight(u, v).',
          'If tentative distance < dist[v], update dist[v] = tentative distance.',
          'Mark vertex u as visited (its shortest distance is now final).',
          'Repeat steps 2–5 until all vertices are visited (or destination is reached).',
        ]} />

        <SubHeading>Example Graph</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 560 320" className="w-full max-w-lg mx-auto" style={{ height: 'auto' }}>
            {/* Edges with weights */}
            <line x1="80" y1="80" x2="240" y2="80" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="160" y="72" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">4</text>
            <line x1="80" y1="80" x2="160" y2="220" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="100" y="155" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">2</text>
            <line x1="240" y1="80" x2="160" y2="220" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="210" y="140" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">1</text>
            <line x1="240" y1="80" x2="400" y2="80" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="320" y="72" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">5</text>
            <line x1="240" y1="80" x2="400" y2="220" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="310" y="160" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">10</text>
            <line x1="160" y1="220" x2="400" y2="220" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="280" y="245" textAnchor="middle" fill="#dc2626" fontSize="13" fontWeight="bold">8</text>
            <line x1="400" y1="80" x2="400" y2="220" stroke="#6366f1" strokeWidth="2.5"/>
            <text x="420" y="155" textAnchor="start" fill="#dc2626" fontSize="13" fontWeight="bold">2</text>
            {/* Nodes */}
            <circle cx="80" cy="80" r="24" fill="#16a34a"/><text x="80" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">A</text>
            <circle cx="240" cy="80" r="24" fill="#6366f1"/><text x="240" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">B</text>
            <circle cx="400" cy="80" r="24" fill="#6366f1"/><text x="400" y="86" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">C</text>
            <circle cx="160" cy="220" r="24" fill="#6366f1"/><text x="160" y="226" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">D</text>
            <circle cx="400" cy="220" r="24" fill="#6366f1"/><text x="400" y="226" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">E</text>
            <text x="80" y="60" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">SOURCE</text>
          </svg>
        </div>

        <SubHeading>Step-by-Step Execution (Source = A)</SubHeading>
        <div className="overflow-x-auto my-4 rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 to-purple-100">
                <th className="px-3 py-2 text-left font-bold text-indigo-900">Step</th>
                <th className="px-3 py-2 text-left font-bold text-indigo-900">Visit</th>
                <th className="px-3 py-2 text-left font-bold text-indigo-900">dist[A]</th>
                <th className="px-3 py-2 text-left font-bold text-indigo-900">dist[B]</th>
                <th className="px-3 py-2 text-left font-bold text-indigo-900">dist[C]</th>
                <th className="px-3 py-2 text-left font-bold text-indigo-900">dist[D]</th>
                <th className="px-3 py-2 text-left font-bold text-indigo-900">dist[E]</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs">
              <tr className="bg-white">
                <td className="px-3 py-2">Init</td>
                <td className="px-3 py-2">—</td>
                <td className="px-3 py-2 text-green-600 font-bold">0</td>
                <td className="px-3 py-2">∞</td>
                <td className="px-3 py-2">∞</td>
                <td className="px-3 py-2">∞</td>
                <td className="px-3 py-2">∞</td>
              </tr>
              <tr className="bg-green-50">
                <td className="px-3 py-2">1</td>
                <td className="px-3 py-2 font-bold text-green-700">A</td>
                <td className="px-3 py-2 text-green-600">0 ✓</td>
                <td className="px-3 py-2">4</td>
                <td className="px-3 py-2">∞</td>
                <td className="px-3 py-2">2</td>
                <td className="px-3 py-2">∞</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="px-3 py-2">2</td>
                <td className="px-3 py-2 font-bold text-green-700">D</td>
                <td className="px-3 py-2 text-green-600">0 ✓</td>
                <td className="px-3 py-2">3*</td>
                <td className="px-3 py-2">∞</td>
                <td className="px-3 py-2 text-green-600">2 ✓</td>
                <td className="px-3 py-2">10</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-3 py-2">3</td>
                <td className="px-3 py-2 font-bold text-green-700">B</td>
                <td className="px-3 py-2 text-green-600">0 ✓</td>
                <td className="px-3 py-2 text-green-600">3 ✓</td>
                <td className="px-3 py-2">8</td>
                <td className="px-3 py-2 text-green-600">2 ✓</td>
                <td className="px-3 py-2">8*</td>
              </tr>
              <tr className="bg-purple-50">
                <td className="px-3 py-2">4</td>
                <td className="px-3 py-2 font-bold text-green-700">C</td>
                <td className="px-3 py-2 text-green-600">0 ✓</td>
                <td className="px-3 py-2 text-green-600">3 ✓</td>
                <td className="px-3 py-2 text-green-600">8 ✓</td>
                <td className="px-3 py-2 text-green-600">2 ✓</td>
                <td className="px-3 py-2 text-green-600">10 → 10</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2">5</td>
                <td className="px-3 py-2 font-bold text-green-700">E</td>
                <td className="px-3 py-2 text-green-600">0 ✓</td>
                <td className="px-3 py-2 text-green-600">3 ✓</td>
                <td className="px-3 py-2 text-green-600">8 ✓</td>
                <td className="px-3 py-2 text-green-600">2 ✓</td>
                <td className="px-3 py-2 text-green-600">10 ✓</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 my-4">
          <p className="text-sm font-bold text-green-800 mb-2">✅ Final Shortest Distances from Source A:</p>
          <ul className="text-sm text-green-900 space-y-1">
            <li>A → A: <strong>0</strong></li>
            <li>A → B: <strong>3</strong> (path: A → D → B)</li>
            <li>A → C: <strong>8</strong> (path: A → D → B → C)</li>
            <li>A → D: <strong>2</strong> (path: A → D)</li>
            <li>A → E: <strong>10</strong> (path: A → D → B → C → E or A → D → E)</li>
          </ul>
        </div>

        <SubHeading>Shortest Path Tree</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 500 250" className="w-full max-w-md mx-auto" style={{ height: 'auto' }}>
            {/* Tree edges */}
            <line x1="250" y1="40" x2="120" y2="110" stroke="#16a34a" strokeWidth="3"/>
            <text x="175" y="68" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="bold">2</text>
            <line x1="120" y1="130" x2="120" y2="180" stroke="#16a34a" strokeWidth="3"/>
            <text x="135" y="160" textAnchor="start" fill="#16a34a" fontSize="12" fontWeight="bold">1</text>
            <line x1="120" y1="200" x2="250" y2="200" stroke="#16a34a" strokeWidth="3"/>
            <text x="185" y="220" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="bold">5</text>
            <line x1="250" y1="200" x2="380" y2="200" stroke="#16a34a" strokeWidth="3"/>
            <text x="315" y="220" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="bold">2</text>
            {/* Nodes */}
            <circle cx="250" cy="28" r="22" fill="#16a34a"/><text x="250" y="34" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">A</text>
            <text x="250" y="10" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">d=0</text>
            <circle cx="120" cy="118" r="22" fill="#16a34a"/><text x="120" y="124" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">D</text>
            <text x="80" y="124" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">d=2</text>
            <circle cx="120" cy="195" r="22" fill="#16a34a"/><text x="120" y="201" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">B</text>
            <text x="80" y="201" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">d=3</text>
            <circle cx="250" cy="195" r="22" fill="#16a34a"/><text x="250" y="201" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">C</text>
            <text x="250" y="235" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">d=8</text>
            <circle cx="380" cy="195" r="22" fill="#16a34a"/><text x="380" y="201" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">E</text>
            <text x="380" y="235" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">d=10</text>
          </svg>
        </div>

        <CompTable
          headers={['Aspect', 'Details']}
          rows={[
            ['Algorithm Type', 'Greedy'],
            ['Works On', 'Weighted graphs with NON-NEGATIVE edge weights'],
            ['Time Complexity', 'O(V²) with array; O((V+E) log V) with min-heap'],
            ['Space Complexity', 'O(V)'],
            ['Limitation', 'Does NOT work with negative edge weights (use Bellman-Ford)'],
            ['Output', 'Shortest distance from source to every other vertex'],
          ]}
        />

        <KeyPoints points={[
          "Dijkstra's is a greedy algorithm — always picks the nearest unvisited vertex.",
          'Works only for non-negative edge weights.',
          'Uses a priority queue (min-heap) for efficient minimum distance extraction.',
          'Time complexity: O(V²) simple, O((V+E) log V) with binary heap.',
          'For negative weights, use Bellman-Ford algorithm.',
          'Applications: GPS navigation, network routing protocols (OSPF), game AI pathfinding.',
        ]} />
      </SectionCard>
    </div>
  );
}
