import { SubQuestion, Definition, CodeBlock, KeyPoints, ComparisonTable, Example, FlowChart, Hr } from './shared';

export default function Question1() {
  return (
    <div className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-6">
          <h2 className="text-2xl font-bold">Question 1: Short Answer Questions</h2>
          <p className="text-indigo-200 mt-1">All sub-questions (a through g) with comprehensive answers</p>
        </div>

        <div className="p-6 sm:p-8 space-y-0">

          {/* 1a - ADT */}
          <SubQuestion id="q1a" title="1(a). Define Abstract Data Type (ADT)">
            <Definition>
              An <strong>Abstract Data Type (ADT)</strong> is a mathematical model for a data type that is defined by its behavior (semantics) from the point of view of a user of the data. Specifically, it is defined by the possible values that can be stored, the possible operations on data of this type, and the behavior of these operations. The key idea behind an ADT is <strong>encapsulation</strong> — the internal representation and implementation details are hidden from the user, who interacts only through a well-defined interface.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              In the field of Data Structures and Algorithms, an ADT serves as a formal specification that separates the <em>what</em> from the <em>how</em>. It tells us <strong>what</strong> operations are available and what their expected behavior is, but it does not specify <strong>how</strong> these operations are actually implemented. For example, the Stack ADT specifies operations like <code className="bg-gray-100 px-1 rounded">push()</code>, <code className="bg-gray-100 px-1 rounded">pop()</code>, <code className="bg-gray-100 px-1 rounded">peek()</code>, and <code className="bg-gray-100 px-1 rounded">isEmpty()</code>, but it does not mandate whether the stack should be implemented using an array or a linked list. This separation of interface from implementation provides tremendous flexibility to the programmer.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Think of an ADT like a <strong>vending machine</strong>. As a user, you only need to know which buttons to press (the interface) to get your desired item. You do not need to understand the internal mechanics — the motors, sensors, and wiring — that make the machine work. Similarly, an ADT exposes only the operations while hiding the internal data representation. This concept is fundamental to modern software engineering as it promotes modularity, reusability, and maintainability of code.
            </p>

            <Example title="Common Examples of ADTs">
              <ComparisonTable
                headers={['ADT', 'Key Operations', 'Real-World Analogy']}
                rows={[
                  ['Stack', 'push, pop, peek, isEmpty', 'Stack of plates in a cafeteria'],
                  ['Queue', 'enqueue, dequeue, front, isEmpty', 'Line of people at a ticket counter'],
                  ['List', 'insert, delete, search, traverse', 'A to-do list or shopping list'],
                  ['Tree', 'insert, delete, traverse, search', 'Organizational hierarchy in a company'],
                  ['Graph', 'addVertex, addEdge, BFS, DFS', 'Road network connecting cities'],
                ]}
              />
            </Example>

            <p className="text-gray-700 mt-4 leading-relaxed">
              A formal ADT specification typically includes three components: (1) The <strong>data description</strong> — what kind of data is being stored; (2) The <strong>operation signatures</strong> — the names, parameters, and return types of all operations; and (3) The <strong>axioms or pre/post-conditions</strong> — mathematical rules that define the expected behavior. For instance, for a Stack ADT, an axiom could be: <code className="bg-gray-100 px-1 rounded">pop(push(S, x)) = S</code> — meaning if you push an element onto a stack and then pop it, you get back the original stack. This formal approach ensures correctness and consistency regardless of implementation choices.
            </p>

            <KeyPoints points={[
              'An ADT defines what operations can be performed, not how they are implemented.',
              'It enforces encapsulation and information hiding — internal details are hidden from the user.',
              'Common ADTs include Stack, Queue, List, Tree, and Graph.',
              'The same ADT can have multiple implementations (e.g., Stack can use arrays or linked lists).',
              'ADTs promote modularity, reusability, and easier maintenance of code.',
              'Three components: data description, operation signatures, and behavioral axioms.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 1b - Algorithm vs Program */}
          <SubQuestion id="q1b" title="1(b). Mention one key difference between an algorithm and a program">
            <Definition>
              An <strong>algorithm</strong> is a finite, well-defined sequence of computational steps that takes some input and produces an output. It is a step-by-step procedure to solve a problem in a language-independent manner. A <strong>program</strong>, on the other hand, is a specific implementation of an algorithm written in a particular programming language that can be executed on a computer.
            </Definition>

            <ComparisonTable
              headers={['Parameter', 'Algorithm', 'Program']}
              rows={[
                ['Nature', 'A conceptual, step-by-step procedure to solve a problem', 'A concrete implementation of an algorithm in a specific language'],
                ['Language', 'Language-independent (written in pseudocode or natural language)', 'Language-dependent (written in C, Java, Python, etc.)'],
                ['Executability', 'Cannot be executed directly on a machine', 'Can be compiled/interpreted and executed on a machine'],
                ['Hardware', 'Hardware-independent', 'May be platform or hardware-dependent'],
                ['Analysis', 'Analyzed for time and space complexity', 'Tested for correctness and performance'],
                ['Result', 'May never finish (if infinite), but designed to terminate', 'Runs on a machine and produces output or errors'],
              ]}
            />

            <p className="text-gray-700 mt-4 leading-relaxed">
              The <strong>key difference</strong> is: <em>An algorithm is a problem-solving procedure that is independent of any programming language, whereas a program is a language-specific implementation of an algorithm that can be executed on a computer.</em> Think of an algorithm as a <strong>recipe</strong> — it tells you what ingredients you need and the steps to follow. A program is like actually <strong>cooking the dish</strong> in your specific kitchen with your specific tools. The recipe is universal, but the actual cooking depends on the kitchen (programming language and machine).
            </p>

            <Example title="Example: Finding Maximum Element">
              <p className="mb-2"><strong>Algorithm (Pseudocode):</strong></p>
              <CodeBlock code={`Algorithm FindMax(A, n)
// Input: Array A of n elements
// Output: Maximum element
1. Set max ← A[0]
2. For i ← 1 to n-1
3.     If A[i] > max then
4.         max ← A[i]
5. Return max`} />
              <p className="mb-2"><strong>Program (C Implementation):</strong></p>
              <CodeBlock code={`int findMax(int A[], int n) {
    int max = A[0];
    for (int i = 1; i < n; i++) {
        if (A[i] > max)
            max = A[i];
    }
    return max;
}`} title="C Program" />
            </Example>

            <KeyPoints points={[
              'An algorithm is language-independent; a program is language-dependent.',
              'An algorithm may be expressed in pseudocode; a program is written in a programming language.',
              'An algorithm focuses on logic; a program focuses on execution.',
              'One algorithm can be implemented as many different programs across languages.',
              'Algorithm analysis focuses on complexity (Big O); program analysis focuses on runtime and correctness.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 1c - Tail Recursion */}
          <SubQuestion id="q1c" title="1(c). What is Tail Recursion?">
            <Definition>
              <strong>Tail Recursion</strong> is a special form of recursion where the recursive call is the <em>very last operation</em> performed in the function. This means there is no computation left to do after the recursive call returns — the result of the recursive call is directly returned as the result of the current function call. Because of this property, tail-recursive functions can be optimized by compilers into iterative loops, eliminating the need for additional stack frames.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              In a standard recursive function, each recursive call creates a new stack frame that must be preserved until the base case is reached and the recursion unwinds. This can lead to stack overflow for deep recursion. However, in tail recursion, since the recursive call is the last operation, there is no need to preserve the current stack frame — the compiler can simply reuse the same frame. This optimization is called <strong>Tail Call Optimization (TCO)</strong> or <strong>Tail Call Elimination</strong>, and it effectively converts the recursion into iteration at the machine level.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Imagine you are passing a message through a line of people. In normal recursion, each person must remember to tell you the reply after passing the message forward (so everyone waits). In tail recursion, each person simply passes the message and walks away — only the last person needs to give the final answer. This is why tail recursion is so much more memory-efficient.
            </p>

            <Example title="Tail Recursive vs Non-Tail Recursive Factorial">
              <p className="mb-2"><strong>Non-Tail Recursive (standard):</strong></p>
              <CodeBlock code={`// After the recursive call returns, we still
// need to multiply with n — so NOT tail recursive
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);  // multiplication AFTER recursive call
}`} />
              <p className="mb-2"><strong>Tail Recursive version:</strong></p>
              <CodeBlock code={`// The recursive call is the LAST operation
// accumulator carries the result so far
int factorialTail(int n, int accumulator) {
    if (n <= 1) return accumulator;
    return factorialTail(n - 1, n * accumulator);  // nothing after this call
}

// Wrapper function
int factorial(int n) {
    return factorialTail(n, 1);
}`} />
            </Example>

            <ComparisonTable
              headers={['Feature', 'Tail Recursion', 'Non-Tail Recursion']}
              rows={[
                ['Last operation', 'Recursive call', 'May be any operation'],
                ['Stack usage', 'Can be optimized to O(1)', 'Uses O(n) stack frames'],
                ['TCO applicable', 'Yes', 'No'],
                ['Accumulator needed', 'Often yes', 'No'],
                ['Risk of stack overflow', 'Low (with TCO)', 'High for deep recursion'],
              ]}
            />

            <KeyPoints points={[
              'Tail recursion means the recursive call is the absolute last operation in the function.',
              'Compilers can optimize tail recursion into iteration using Tail Call Optimization (TCO).',
              'An accumulator parameter is typically used to carry results through recursive calls.',
              'Tail recursion prevents stack overflow for large inputs.',
              'Example languages with TCO: Scheme, Scala, Haskell. C/C++ may or may not support it depending on compiler.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 1d - Worst-case time complexity of sequential search */}
          <SubQuestion id="q1d" title="1(d). What is the worst-case time complexity of sequential search?">
            <Definition>
              <strong>Sequential Search</strong> (also called Linear Search) is the simplest searching algorithm that checks each element in a collection one by one, from the first element to the last, until the target element is found or the entire collection has been traversed. The worst-case time complexity of sequential search is <strong>O(n)</strong>, where n is the number of elements in the collection.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              The worst case occurs when the element being searched for is either at the <strong>last position</strong> of the array or is <strong>not present</strong> at all. In both scenarios, the algorithm must examine every single element — all n elements — before concluding. This makes the number of comparisons directly proportional to the size of the input, resulting in linear time complexity.
            </p>

            <Example title="Numerical Scenarios">
              <p><strong>Scenario 1:</strong> Array = [5, 12, 3, 9, 7, 15, 2, 8, 11, 4], Search for element 4 (last position).</p>
              <p>The algorithm checks: 5→12→3→9→7→15→2→8→11→4. Total comparisons = <strong>10</strong> (equal to n=10). This is the worst case.</p>
              <p className="mt-3"><strong>Scenario 2:</strong> Same array, Search for element 100 (not present).</p>
              <p>The algorithm checks every element: 5→12→3→9→7→15→2→8→11→4. Total comparisons = <strong>10</strong>. Element not found after checking all elements. This is also the worst case.</p>
            </Example>

            <ComparisonTable
              headers={['Case', 'Condition', 'Comparisons', 'Complexity']}
              rows={[
                ['Best Case', 'Element found at first position', '1', 'O(1)'],
                ['Average Case', 'Element found at middle position', 'n/2', 'O(n)'],
                ['Worst Case', 'Element at last position or not found', 'n', 'O(n)'],
              ]}
            />

            <CodeBlock code={`// Sequential (Linear) Search in C
int sequentialSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key)
            return i;  // Found at index i
    }
    return -1;  // Not found
}
// Worst case: O(n) — key at last index or not present`} title="Sequential Search Implementation" />

            <KeyPoints points={[
              'Worst-case time complexity of sequential search is O(n).',
              'Worst case occurs when element is at the last position or not present.',
              'Best case is O(1) when element is at the first position.',
              'Works on both sorted and unsorted arrays.',
              'Simple but inefficient for large datasets compared to Binary Search O(log n).',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 1e - Counting Sort */}
          <SubQuestion id="q1e" title="1(e). What is the basic idea behind Counting Sort?">
            <Definition>
              <strong>Counting Sort</strong> is a non-comparison-based sorting algorithm that works by counting the number of occurrences of each distinct element in the input array and then using those counts to determine the correct positions of each element in the sorted output. It operates in <strong>O(n + k)</strong> time, where n is the number of elements and k is the range of input values.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Unlike comparison-based sorts (like Quick Sort or Merge Sort) which have a theoretical lower bound of O(n log n), Counting Sort bypasses comparisons entirely. Instead, it exploits the fact that the input consists of integers within a known range. It creates a <strong>count array</strong> (also called a frequency array) where the index represents the element value and the value at that index represents how many times that element appears. This count array is then used to place each element in its correct sorted position.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Imagine sorting a class of students by their test scores (0–100). Instead of comparing every pair of students, you could create 101 buckets labeled 0 through 100. You go through each student and drop them into the bucket matching their score. Then you simply read the buckets in order. That is essentially how Counting Sort works!
            </p>

            <FlowChart steps={[
              'Determine the range (max value k) of the input elements.',
              'Create a count array of size k+1, initialized to 0.',
              'Traverse the input array and increment count[arr[i]] for each element.',
              'Compute the cumulative sum of the count array (prefix sum).',
              'Place each element in the correct position in the output array using the count array.',
              'The output array is now sorted.',
            ]} />

            <Example title="Step-by-Step Example">
              <p><strong>Input:</strong> [4, 2, 2, 8, 3, 3, 1]</p>
              <p className="mt-2"><strong>Step 1:</strong> Max value = 8, so create count array of size 9 (indices 0-8).</p>
              <p><strong>Step 2:</strong> Count frequencies: count[1]=1, count[2]=2, count[3]=2, count[4]=1, count[8]=1</p>
              <p><strong>Step 3:</strong> Cumulative: count[1]=1, count[2]=3, count[3]=5, count[4]=6, count[8]=7</p>
              <p><strong>Step 4:</strong> Place elements: Output = [1, 2, 2, 3, 3, 4, 8]</p>
              <p className="mt-3"><strong>Scenario 2:</strong> Input: [5, 1, 5, 1, 3], Max=5</p>
              <p>Count: [0,2,0,1,0,2] → Cumulative: [0,2,0,3,0,5] → Output: [1, 1, 3, 5, 5]</p>
            </Example>

            <KeyPoints points={[
              'Counting Sort is a non-comparison-based sorting algorithm.',
              'Time complexity: O(n + k) where n = number of elements, k = range of values.',
              'Space complexity: O(n + k) — requires extra arrays for counting and output.',
              'It is a stable sorting algorithm (preserves relative order of equal elements).',
              'Works only for integer keys within a finite, known range.',
              'Not suitable when k (range) is very large compared to n.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 1f - Complete Binary Tree */}
          <SubQuestion id="q1f" title="1(f). Define Complete Binary Tree. Give Example.">
            <Definition>
              A <strong>Complete Binary Tree</strong> is a binary tree in which every level, except possibly the last (deepest) level, is completely filled, and all nodes in the last level are positioned as far left as possible. This means there are no "gaps" between nodes — the tree is filled level by level, from left to right.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              More formally, a complete binary tree with n nodes has a very specific structural property: if we number the nodes from 1 (root) to n using level-order traversal (breadth-first), then the node at position i has its left child at position 2i and its right child at position 2i+1. This property is exactly what makes it possible to store a complete binary tree efficiently in an array without any wasted space. Complete binary trees are the foundation of the <strong>Binary Heap</strong> data structure, which is used to implement priority queues and the Heap Sort algorithm.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Think of a movie theater filling up row by row. People sit in the first row completely, then the second row completely, and so on. The last row might not be full, but people sitting there occupy seats starting from the leftmost seat with no gaps. A complete binary tree follows this exact same "fill left to right, level by level" discipline.
            </p>

            <Example title="Example of a Complete Binary Tree">
              <div className="bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`
        1
      /   \\
     2     3
    / \\   / \\
   4   5 6   7
  / \\
 8   9

This is a COMPLETE binary tree:
- Levels 0, 1, 2 are completely filled
- Level 3 has nodes filled from left to right (8, 9)

        1
      /   \\
     2     3
    / \\   /
   4   5 6

This is also COMPLETE:
- All levels except last are full
- Last level nodes (4,5,6) are as far left as possible

        1
      /   \\
     2     3
    / \\     \\
   4   5     7    ← NOT COMPLETE (gap before 7)
`}</pre>
              </div>
            </Example>

            <ComparisonTable
              headers={['Property', 'Complete Binary Tree', 'Full Binary Tree', 'Perfect Binary Tree']}
              rows={[
                ['All levels filled', 'All except possibly last', 'Every node has 0 or 2 children', 'All levels completely filled'],
                ['Last level', 'Filled left to right', 'Can have gaps', 'Must be completely filled'],
                ['Array storage', 'No wasted space', 'May waste space', 'No wasted space'],
                ['Height', '⌊log₂n⌋', 'Varies', '⌊log₂n⌋ exactly'],
              ]}
            />

            <KeyPoints points={[
              'A complete binary tree fills levels from left to right without gaps.',
              'The last level may not be full, but all nodes are as far left as possible.',
              'It is the basis for binary heaps used in Heap Sort and Priority Queues.',
              'Can be efficiently stored in an array: parent of node[i] is at node[(i-1)/2].',
              'Height of a complete binary tree with n nodes is ⌊log₂n⌋.',
              'Number of internal nodes = ⌊n/2⌋, number of leaf nodes = ⌈n/2⌉.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 1g - Divide and Conquer */}
          <SubQuestion id="q1g" title="1(g). What is the basic idea behind Divide and Conquer Strategy?">
            <Definition>
              <strong>Divide and Conquer</strong> is a fundamental algorithm design paradigm that works by recursively breaking down a problem into two or more smaller subproblems of the same or related type, until these subproblems become simple enough to be solved directly (base case). The solutions to the subproblems are then combined (conquered) to produce the solution to the original problem.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              The Divide and Conquer strategy follows three clear phases: <strong>Divide</strong> — split the problem into smaller, independent subproblems; <strong>Conquer</strong> — solve each subproblem recursively (if small enough, solve directly as a base case); <strong>Combine</strong> — merge the solutions of the subproblems into the solution for the original problem. This approach naturally leads to recursive algorithms and is the backbone of many efficient algorithms in computer science.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Imagine you have a huge jigsaw puzzle. Instead of trying to solve the entire puzzle at once, you divide it into smaller sections (corners, edges, color groups), solve each section independently, and then combine all the sections to complete the full puzzle. Each section may be further divided if it's still too large — this recursive subdivision is exactly the divide and conquer approach.
            </p>

            <FlowChart steps={[
              'DIVIDE: Break the original problem into smaller subproblems.',
              'CONQUER: Recursively solve each subproblem.',
              'BASE CASE: If a subproblem is small enough, solve it directly without further recursion.',
              'COMBINE: Merge the solutions of subproblems to form the solution to the original problem.',
            ]} />

            <ComparisonTable
              headers={['Algorithm', 'Divide Step', 'Conquer Step', 'Combine Step', 'Time Complexity']}
              rows={[
                ['Merge Sort', 'Split array into two halves', 'Recursively sort each half', 'Merge two sorted halves', 'O(n log n)'],
                ['Quick Sort', 'Partition around pivot', 'Recursively sort partitions', 'No combine needed', 'O(n log n) avg'],
                ['Binary Search', 'Split array by mid element', 'Search in appropriate half', 'Return result directly', 'O(log n)'],
                ['Strassen\'s Matrix', 'Divide matrices into submatrices', 'Multiply submatrices recursively', 'Combine using formulas', 'O(n^2.81)'],
              ]}
            />

            <Example title="Numerical Example — Binary Search (Divide & Conquer)">
              <p><strong>Array:</strong> [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], Search for: 23</p>
              <p>Step 1: Array[0..9], mid = 4, arr[4] = 16 &lt; 23 → Search right half</p>
              <p>Step 2: Array[5..9], mid = 7, arr[7] = 56 &gt; 23 → Search left half</p>
              <p>Step 3: Array[5..6], mid = 5, arr[5] = 23 = 23 → <strong>Found at index 5!</strong></p>
              <p className="mt-3"><strong>Scenario 2:</strong> Search for: 25 in same array</p>
              <p>Step 1: mid=4, 16&lt;25 → right. Step 2: mid=7, 56&gt;25 → left.</p>
              <p>Step 3: mid=5, 23&lt;25 → right. Step 4: mid=6, 38&gt;25 → left. Step 5: left&gt;right → <strong>Not found</strong></p>
            </Example>

            <KeyPoints points={[
              'Divide and Conquer has three phases: Divide, Conquer, Combine.',
              'It naturally leads to recursive algorithms.',
              'Common recurrence relation: T(n) = aT(n/b) + f(n), solved using Master Theorem.',
              'Examples: Merge Sort, Quick Sort, Binary Search, Strassen\'s Matrix Multiplication.',
              'Often achieves O(n log n) time complexity for sorting problems.',
              'Master Theorem is used to analyze time complexity of D&C algorithms.',
            ]} />
          </SubQuestion>

        </div>
      </div>
    </div>
  );
}
