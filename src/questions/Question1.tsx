import { SectionCard, DefBox, KeyPoints, CompTable } from '../components/shared';

export default function Question1() {
  return (
    <div className="space-y-8">
      <SectionCard title="(a) Define Abstract Data Type (ADT)">
        <DefBox title="Definition — Abstract Data Type (ADT)">
          <p>
            An <strong>Abstract Data Type (ADT)</strong> is a mathematical model for a data type that is defined by its behavior (semantics) from the point of view of a user. It specifies a set of <strong>possible values</strong>, the <strong>operations</strong> that can be performed on those values, and the <strong>behavior</strong> of those operations — all <strong>without specifying how the data type is implemented</strong> internally.
          </p>
          <p className="mt-2">
            In other words, an ADT defines <strong>"what" operations can be done</strong> on the data, but not <strong>"how" those operations are carried out</strong>. This separation of interface from implementation is a cornerstone of data abstraction. Common examples of ADTs include <strong>Stack, Queue, List, Map, and Set</strong>.
          </p>
        </DefBox>

        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-2">Core Concepts &amp; Logic</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• <strong>Encapsulation:</strong> Hides internal implementation details from the user.</li>
            <li>• <strong>Interface Specification:</strong> Provides a well-defined set of operations (e.g., push, pop for Stack).</li>
            <li>• <strong>Multiple Implementations:</strong> The same ADT can be implemented using arrays, linked lists, trees, etc.</li>
          </ul>
        </div>

        <CompTable
          headers={['ADT', 'Key Operations', 'Properties']}
          rows={[
            ['Stack ADT', 'push(), pop(), peek(), isEmpty()', 'LIFO (Last In, First Out)'],
            ['Queue ADT', 'enqueue(), dequeue(), front(), isEmpty()', 'FIFO (First In, First Out)'],
            ['List ADT', 'insert(), delete(), search(), traverse()', 'Ordered collection of elements'],
            ['Map ADT', 'put(), get(), remove(), containsKey()', 'Key-value pairs'],
          ]}
        />

        <KeyPoints points={[
          'ADT is a theoretical/conceptual model — it is implementation-independent.',
          'It separates the "what" (interface) from the "how" (implementation).',
          'Any ADT can have multiple concrete implementations (e.g., Stack via array or linked list).',
          'ADTs promote modularity, reusability, and easier maintenance of code.',
        ]} />
      </SectionCard>

      {/* (b) Algorithm vs Program */}
      <SectionCard title="(b) Key Difference Between an Algorithm and a Program">
        <DefBox title="Definition">
          <p>
            An <strong>algorithm</strong> is a finite, step-by-step sequence of well-defined instructions designed to solve a specific problem or perform a computation. A <strong>program</strong> is the concrete implementation of an algorithm in a specific programming language that can be executed on a computer.
          </p>
        </DefBox>

        <CompTable
          headers={['Aspect', 'Algorithm', 'Program']}
          rows={[
            ['Nature', 'Conceptual / logical sequence of steps', 'Written in a specific programming language'],
            ['Hardware', 'Hardware-independent', 'Hardware & OS dependent'],
            ['Outcome', 'May not produce a tangible output (just a design)', 'Produces an executable that runs on a machine'],
            ['Analysis', 'Analyzed for time & space complexity', 'Tested for correctness & performance'],
            ['Language', 'Expressed in pseudocode, flowcharts, or natural language', 'Written in C, Java, Python, etc.'],
          ]}
        />

        <KeyPoints points={[
          'An algorithm is the "blueprint"; a program is the "building" constructed from that blueprint.',
          'One algorithm can lead to many different programs (different languages, different implementations).',
          'Algorithms are analyzed; programs are tested and debugged.',
        ]} />
      </SectionCard>

      {/* (c) Tail Recursion */}
      <SectionCard title="(c) What is Tail Recursion?">
        <DefBox title="Definition — Tail Recursion">
          <p>
            <strong>Tail recursion</strong> is a special case of recursion where the recursive call is the <strong>very last operation</strong> performed in the function. There are no pending computations or operations after the recursive call returns. Because there is nothing left to do after the recursive call, the compiler/interpreter can optimize it by reusing the current stack frame instead of creating a new one — this optimization is called <strong>tail call optimization (TCO)</strong>.
          </p>
        </DefBox>

        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-2">Example: Tail-Recursive Factorial</h5>
          <pre className="bg-gray-900 text-green-300 text-sm p-4 rounded-lg overflow-x-auto font-mono leading-relaxed">
{`// Tail-recursive version (accumulator used)
int factTail(int n, int acc) {
    if (n == 0 || n == 1)
        return acc;          // Base case: return accumulated result
    return factTail(n - 1, n * acc);  // Recursive call is LAST operation
}

// Wrapper function
int factorial(int n) {
    return factTail(n, 1);
}`}
          </pre>
        </div>

        <KeyPoints points={[
          'In tail recursion, the recursive call must be the absolute last statement — no computation after it.',
          'Tail Call Optimization (TCO) converts tail recursion into iteration, preventing stack overflow.',
          'Tail recursion is more memory-efficient than regular (non-tail) recursion.',
          'Not all languages/compilers support TCO (e.g., C/C++ compilers often do; Python does not by default).',
        ]} />
      </SectionCard>

      {/* (d) Sequential Search Worst-Case */}
      <SectionCard title="(d) Worst-Case Time Complexity of Sequential Search">
        <DefBox title="Answer">
          <p>
            The worst-case time complexity of <strong>sequential search (linear search)</strong> is <strong><code className="bg-red-100 text-red-700 px-2 py-0.5 rounded">O(n)</code></strong>, where <em>n</em> is the number of elements in the array/list.
          </p>
          <p className="mt-2">
            In the worst case, the element being searched for is either <strong>at the last position</strong> of the array or <strong>not present at all</strong>. This means the algorithm must compare the key with every single element — all <em>n</em> elements — before concluding.
          </p>
        </DefBox>

        <CompTable
          headers={['Case', 'Condition', 'Comparisons', 'Complexity']}
          rows={[
            ['Best Case', 'Element found at first position', '1', 'O(1)'],
            ['Average Case', 'Element found somewhere in the middle', 'n/2', 'O(n)'],
            ['Worst Case', 'Element at last position or not present', 'n', 'O(n)'],
          ]}
        />

        <KeyPoints points={[
          'Sequential search scans each element one by one from the beginning.',
          'Works on both sorted and unsorted data.',
          'Worst case O(n) — must check every element.',
          'Binary search (O(log n)) is faster but requires sorted data.',
        ]} />
      </SectionCard>

      {/* (e) Counting Sort */}
      <SectionCard title="(e) Basic Idea Behind Counting Sort">
        <DefBox title="Definition — Counting Sort">
          <p>
            <strong>Counting sort</strong> is a non-comparison-based integer sorting algorithm that works by <strong>counting the number of occurrences</strong> of each distinct element in the input array. It then uses this count information to determine the correct position of each element in the sorted output array. Unlike comparison-based sorts, counting sort can achieve <strong>O(n + k)</strong> time complexity, where <em>n</em> is the number of elements and <em>k</em> is the range of input values.
          </p>
        </DefBox>

        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-2">How It Works</h5>
          <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
            <li>Find the maximum value (<em>k</em>) in the input array.</li>
            <li>Create a <em>count array</em> of size <em>k + 1</em> initialized to 0.</li>
            <li>Count occurrences of each element and store in the count array.</li>
            <li>Compute the cumulative sum of the count array (prefix sum).</li>
            <li>Place each element in its correct sorted position in the output array using the cumulative count.</li>
          </ol>
        </div>

        <KeyPoints points={[
          'Counting sort is NOT a comparison sort — it uses counting instead of comparing elements.',
          'Time complexity: O(n + k) where k is the range of input.',
          'Space complexity: O(n + k) — requires extra arrays.',
          'Stable sort: preserves the relative order of equal elements.',
          'Best suited when the range of values (k) is not significantly larger than the number of elements (n).',
        ]} />
      </SectionCard>

      {/* (f) Complete Binary Tree */}
      <SectionCard title="(f) Define Complete Binary Tree — Give Example">
        <DefBox title="Definition — Complete Binary Tree">
          <p>
            A <strong>complete binary tree</strong> is a binary tree in which <strong>every level, except possibly the last (deepest) level, is completely filled</strong>, and all nodes in the last level are <strong>as far left as possible</strong>. In other words, if the tree has height <em>h</em>, all levels from 0 to <em>h−1</em> are fully filled, and level <em>h</em> is filled from left to right without any gaps.
          </p>
        </DefBox>

        <div className="my-4">
          <h5 className="font-semibold text-gray-800 mb-3">Visual Representation — Complete Binary Tree</h5>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 overflow-x-auto">
            <svg viewBox="0 0 500 240" className="w-full max-w-md mx-auto" style={{ height: 'auto' }}>
              {/* Level 0 */}
              <circle cx="250" cy="30" r="20" fill="#6366f1" stroke="#4f46e5" strokeWidth="2"/>
              <text x="250" y="35" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
              {/* Level 1 */}
              <line x1="250" y1="50" x2="150" y2="90" stroke="#6366f1" strokeWidth="2"/>
              <line x1="250" y1="50" x2="350" y2="90" stroke="#6366f1" strokeWidth="2"/>
              <circle cx="150" cy="110" r="20" fill="#6366f1" stroke="#4f46e5" strokeWidth="2"/>
              <text x="150" y="115" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
              <circle cx="350" cy="110" r="20" fill="#6366f1" stroke="#4f46e5" strokeWidth="2"/>
              <text x="350" y="115" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3</text>
              {/* Level 2 */}
              <line x1="150" y1="130" x2="75" y2="170" stroke="#6366f1" strokeWidth="2"/>
              <line x1="150" y1="130" x2="175" y2="170" stroke="#6366f1" strokeWidth="2"/>
              <line x1="350" y1="130" x2="275" y2="170" stroke="#6366f1" strokeWidth="2"/>
              <circle cx="75" cy="190" r="20" fill="#6366f1" stroke="#4f46e5" strokeWidth="2"/>
              <text x="75" y="195" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">4</text>
              <circle cx="175" cy="190" r="20" fill="#6366f1" stroke="#4f46e5" strokeWidth="2"/>
              <text x="175" y="195" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">5</text>
              <circle cx="275" cy="190" r="20" fill="#6366f1" stroke="#4f46e5" strokeWidth="2"/>
              <text x="275" y="195" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">6</text>
              {/* Label */}
              <text x="250" y="230" textAnchor="middle" fill="#4b5563" fontSize="12" fontStyle="italic">Complete Binary Tree — all levels full except last, filled left to right</text>
            </svg>
          </div>
        </div>

        <KeyPoints points={[
          'All levels except possibly the last are completely filled.',
          'Last level nodes are as far left as possible — no gaps between nodes.',
          'A complete binary tree with n nodes has height ⌊log₂n⌋.',
          'Used as the underlying structure for binary heap (priority queue).',
          'A full binary tree is always complete, but a complete binary tree may not be full.',
        ]} />
      </SectionCard>

      {/* (g) Divide and Conquer */}
      <SectionCard title="(g) Basic Idea Behind Divide and Conquer Strategy">
        <DefBox title="Definition — Divide and Conquer">
          <p>
            <strong>Divide and Conquer</strong> is a problem-solving strategy where a problem is broken down into <strong>smaller, independent subproblems</strong> of the same type. These subproblems are solved <strong>recursively</strong>, and their solutions are then <strong>combined (merged)</strong> to produce the solution to the original problem. This approach naturally leads to efficient recursive algorithms.
          </p>
        </DefBox>

        <div className="my-4">
          <h5 className="font-semibold text-gray-800 mb-3">Flowchart — Divide and Conquer Strategy</h5>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 overflow-x-auto">
            <svg viewBox="0 0 600 320" className="w-full max-w-lg mx-auto" style={{ height: 'auto' }}>
              {/* Top box */}
              <rect x="200" y="10" width="200" height="45" rx="10" fill="#6366f1"/>
              <text x="300" y="38" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Original Problem</text>
              {/* Arrow */}
              <line x1="300" y1="55" x2="300" y2="75" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <text x="315" y="70" fill="#374151" fontSize="11">DIVIDE</text>
              {/* Divide box */}
              <rect x="150" y="80" width="300" height="40" rx="8" fill="#a78bfa"/>
              <text x="300" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Split into Smaller Sub-Problems</text>
              {/* Arrows to subproblems */}
              <line x1="220" y1="120" x2="120" y2="155" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="300" y1="120" x2="300" y2="155" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="380" y1="120" x2="480" y2="155" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              {/* Sub-problems */}
              <rect x="40" y="160" width="150" height="40" rx="8" fill="#c4b5fd"/>
              <text x="115" y="185" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="bold">Sub-Problem 1</text>
              <rect x="225" y="160" width="150" height="40" rx="8" fill="#c4b5fd"/>
              <text x="300" y="185" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="bold">Sub-Problem 2</text>
              <rect x="410" y="160" width="150" height="40" rx="8" fill="#c4b5fd"/>
              <text x="485" y="185" textAnchor="middle" fill="#4c1d95" fontSize="11" fontWeight="bold">Sub-Problem 3</text>
              {/* CONQUER label */}
              <text x="615" y="185" fill="#374151" fontSize="11" fontWeight="bold" transform="rotate(90,615,185)">CONQUER</text>
              {/* Arrows from subproblems to solved */}
              <line x1="115" y1="200" x2="200" y2="235" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="300" y1="200" x2="300" y2="235" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <line x1="485" y1="200" x2="400" y2="235" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              {/* Combine box */}
              <rect x="175" y="240" width="250" height="40" rx="8" fill="#a78bfa"/>
              <text x="300" y="265" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">COMBINE Solutions</text>
              {/* Arrow to final */}
              <line x1="300" y1="280" x2="300" y2="300" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <text x="315" y="295" fill="#374151" fontSize="11">MERGE</text>
              {/* Final result */}
              <rect x="210" y="260" width="0" height="0" rx="8" fill="none"/>
            </svg>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-2">The Three Phases</h5>
          <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
            <li><strong>Divide:</strong> Break the original problem into smaller, non-overlapping subproblems.</li>
            <li><strong>Conquer:</strong> Recursively solve each subproblem. If a subproblem is small enough, solve it directly (base case).</li>
            <li><strong>Combine:</strong> Merge the solutions of the subproblems to get the solution to the original problem.</li>
          </ol>
        </div>

        <CompTable
          headers={['Algorithm', 'Divide', 'Conquer', 'Combine', 'Time Complexity']}
          rows={[
            ['Merge Sort', 'Split array in half', 'Recursively sort halves', 'Merge sorted halves', 'O(n log n)'],
            ['Quick Sort', 'Partition around pivot', 'Recursively sort partitions', 'No combine needed', 'O(n log n) avg'],
            ['Binary Search', 'Split search space in half', 'Search one half', 'Return result', 'O(log n)'],
          ]}
        />

        <KeyPoints points={[
          'Divide and Conquer has three phases: Divide, Conquer, Combine.',
          'Naturally implemented using recursion.',
          'Leads to efficient algorithms with O(n log n) or better time complexity.',
          'Examples: Merge Sort, Quick Sort, Binary Search, Strassen\'s Matrix Multiplication.',
        ]} />
      </SectionCard>
    </div>
  );
}
