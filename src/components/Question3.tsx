import { SubQuestion, Definition, CodeBlock, KeyPoints, ComparisonTable, Example, FlowChart, Hr } from './shared';

export default function Question3() {
  return (
    <div className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-6">
          <h2 className="text-2xl font-bold">Question 3: Arrays & Asymptotic Notations</h2>
          <p className="text-emerald-200 mt-1">Sub-questions (a and b)</p>
        </div>

        <div className="p-6 sm:p-8 space-y-0">

          {/* 3a - Arrays, Row Major, Column Major */}
          <SubQuestion id="q3a" title="3(a). Define Array. Explain Row Major Order and Column Major Order representations of a 2-D array with suitable examples.">
            <Definition>
              An <strong>Array</strong> is a linear data structure that stores a fixed-size sequential collection of elements of the same data type in contiguous memory locations. Arrays are the most fundamental and widely used data structure in programming. Each element in an array is identified by an index (or subscript), and the elements can be accessed directly using this index in constant time O(1).
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Arrays are essential because they provide the fastest random access to elements. In memory, all elements of an array are stored in consecutive locations, which makes them extremely cache-friendly. When we declare a 1-D array like <code className="bg-gray-100 px-1 rounded">int arr[5]</code>, the compiler allocates 5 consecutive memory locations (each of size sizeof(int), typically 4 bytes). For a 2-D array like <code className="bg-gray-100 px-1 rounded">int A[3][4]</code>, the compiler must decide how to map the two-dimensional logical structure onto the one-dimensional physical memory. This mapping is done using either <strong>Row Major Order</strong> or <strong>Column Major Order</strong>.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Think of a 2-D array as a classroom seating chart with rows and columns. Row Major Order means you number the seats by going across each row first (seat 1, 2, 3 in row 1, then seat 1, 2, 3 in row 2, etc.). Column Major Order means you number them by going down each column first (all seats in column 1, then column 2, etc.). Both methods cover all seats, but the numbering sequence differs.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Row Major Order</h4>
            <p className="text-gray-700 leading-relaxed">
              In Row Major Order, elements of a 2-D array are stored row by row. All elements of the first row are stored first, followed by all elements of the second row, and so on. This is the storage convention used by languages like <strong>C, C++, Python (NumPy default), and Pascal</strong>. The address of element A[i][j] in a 2-D array with base address B, where each element occupies W bytes, with M columns, is calculated as:
            </p>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-4 text-center text-lg font-mono">
              Address(A[i][j]) = B + [(i × M) + j] × W
            </div>
            <p className="text-gray-700 leading-relaxed">
              Here, B is the base address (starting address), i is the row index, j is the column index, M is the total number of columns, and W is the size of each element in bytes. The formula works because in row-major order, to reach row i, we must skip i complete rows (each containing M elements), and then we move j positions into the current row.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Column Major Order</h4>
            <p className="text-gray-700 leading-relaxed">
              In Column Major Order, elements are stored column by column. All elements of the first column are stored first, followed by all elements of the second column, and so on. This is the storage convention used by languages like <strong>FORTRAN, MATLAB, R, and Julia</strong>. The address formula for Column Major Order (with N rows) is:
            </p>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-4 text-center text-lg font-mono">
              Address(A[i][j]) = B + [(j × N) + i] × W
            </div>
            <p className="text-gray-700 leading-relaxed">
              Here, N is the total number of rows. To reach column j, we skip j complete columns (each containing N elements), then move i positions into the current column.
            </p>

            <Example title="Detailed Numerical Example">
              <p><strong>Scenario 1: Row Major Order Calculation</strong></p>
              <p>Consider int A[3][4] with base address B = 1000, element size W = 4 bytes (int).</p>
              <p>The array has 3 rows (M=3) and 4 columns (N=4). Let's find the address of A[2][3].</p>
              <p className="mt-2"><strong>Using Row Major:</strong> Address = B + [(i × N) + j] × W = 1000 + [(2 × 4) + 3] × 4</p>
              <p>= 1000 + [8 + 3] × 4 = 1000 + 11 × 4 = 1000 + 44 = <strong>1044</strong></p>

              <div className="bg-gray-50 border rounded-lg p-4 mt-3 text-sm font-mono">
                <pre>{`Memory layout (Row Major):
Index:  0    1    2    3    4    5    6    7    8    9   10   11
Elem: [0,0][0,1][0,2][0,3][1,0][1,1][1,2][1,3][2,0][2,1][2,2][2,3]
Addr: 1000 1004 1008 1012 1016 1020 1024 1028 1032 1036 1040 1044

A[2][3] is at index (2×4+3) = 11 → Address = 1000 + 11×4 = 1044 ✓`}</pre>
              </div>

              <p className="mt-4"><strong>Scenario 2: Column Major Order Calculation</strong></p>
              <p>Same array int A[3][4], B = 1000, W = 4, M = 3 rows, N = 4 columns.</p>
              <p>Find address of A[2][3].</p>
              <p className="mt-2"><strong>Using Column Major:</strong> Address = B + [(j × M) + i] × W = 1000 + [(3 × 3) + 2] × 4</p>
              <p>= 1000 + [9 + 2] × 4 = 1000 + 11 × 4 = 1000 + 44 = <strong>1044</strong></p>

              <div className="bg-gray-50 border rounded-lg p-4 mt-3 text-sm font-mono">
                <pre>{`Memory layout (Column Major):
Index:  0    1    2    3    4    5    6    7    8    9   10   11
Elem: [0,0][1,0][2,0][0,1][1,1][2,1][0,2][1,2][2,2][0,3][1,3][2,3]
Addr: 1000 1004 1008 1012 1016 1020 1024 1028 1032 1036 1040 1044

A[2][3] is at index (3×3+2) = 11 → Address = 1000 + 11×4 = 1044 ✓`}</pre>
              </div>
            </Example>

            <ComparisonTable
              headers={['Feature', 'Row Major Order', 'Column Major Order']}
              rows={[
                ['Storage sequence', 'Row by row', 'Column by column'],
                ['Address formula', 'B + [(i × N) + j] × W', 'B + [(j × M) + i] × W'],
                ['Languages', 'C, C++, Python, Java, Pascal', 'FORTRAN, MATLAB, R, Julia'],
                ['Best for', 'Row-wise traversal (more cache hits in C)', 'Column-wise traversal (more cache hits in FORTRAN)'],
                ['Element A[1][2] in 3×4', 'Index = 1×4+2 = 6', 'Index = 2×3+1 = 7'],
              ]}
            />

            <CodeBlock code={`// C Program demonstrating Row Major and Column Major Address Calculation
#include &lt;stdio.h&gt;

int main() {
    int A[3][4] = {
        {10, 20, 30, 40},
        {50, 60, 70, 80},
        {90, 100, 110, 120}
    };
    int base = (int)A;     // Base address
    int W = sizeof(int);   // Size of each element
    int M = 3, N = 4;      // Rows and Columns

    // Row Major: Address of A[2][3]
    int rowMajorAddr = base + ((2 * N) + 3) * W;
    printf("Row Major: A[2][3] address = %d, value = %d\\n",
           rowMajorAddr, A[2][3]);

    // Column Major: Address of A[2][3]
    int colMajorAddr = base + ((3 * M) + 2) * W;
    printf("Column Major: A[2][3] address = %d, value = %d\\n",
           colMajorAddr, A[2][3]);

    return 0;
}`} title="Address Calculation in C" />

            <KeyPoints points={[
              'An array stores elements of the same type in contiguous memory locations.',
              'Row Major Order stores elements row by row; used in C, C++, Java, Python.',
              'Column Major Order stores elements column by column; used in FORTRAN, MATLAB, R.',
              'Row Major Address: B + [(i × N) + j] × W, where N = number of columns.',
              'Column Major Address: B + [(j × M) + i] × W, where M = number of rows.',
              'Array access is O(1) — constant time using index-based addressing.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 3b - Asymptotic Notations */}
          <SubQuestion id="q3b" title="3(b). Explain the concept of Asymptotic Notations. Compare and contrast Big O, Theta (Θ), and Omega (Ω) notations with appropriate examples for each.">
            <Definition>
              <strong>Asymptotic Notations</strong> are mathematical tools used to describe the running time (time complexity) or space requirements (space complexity) of an algorithm as a function of the input size, particularly for large inputs. They provide a standardized way to analyze and compare algorithms without worrying about machine-specific constants or lower-order terms. The three most important asymptotic notations are Big O (O), Theta (Θ), and Omega (Ω).
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              When analyzing algorithms, we care about how they perform as the input size grows toward infinity (asymptotically). Asymptotic notations abstract away implementation details like processor speed, programming language, and compiler optimizations, focusing purely on the algorithm's fundamental growth rate. This allows us to make meaningful comparisons between algorithms and choose the best one for our use case. For example, an O(n log n) algorithm will eventually outperform an O(n²) algorithm regardless of hardware, given a large enough input.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Imagine three people running a marathon. Big O tells you the <em>maximum</em> time a runner could take (worst case). Omega tells you the <em>minimum</em> time they could achieve (best case). Theta tells you their <em>exact</em> performance range — both the upper and lower bound match. A runner with Θ(3 hours) will always finish in approximately 3 hours, while one with O(3 hours) could finish much faster, but never slower than 3 hours.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">1. Big O Notation (O) — Upper Bound</h4>
            <p className="text-gray-700 leading-relaxed">
              Big O notation provides an <strong>asymptotic upper bound</strong> on the growth rate of a function. It represents the worst-case scenario — the maximum time an algorithm could take for any input of size n. Formally, f(n) = O(g(n)) if there exist positive constants c and n₀ such that f(n) ≤ c · g(n) for all n ≥ n₀. This means f(n) never grows faster than g(n) (within a constant factor) for sufficiently large n.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">2. Omega Notation (Ω) — Lower Bound</h4>
            <p className="text-gray-700 leading-relaxed">
              Omega notation provides an <strong>asymptotic lower bound</strong> on the growth rate. It represents the best-case scenario — the minimum time an algorithm will take. Formally, f(n) = Ω(g(n)) if there exist positive constants c and n₀ such that f(n) ≥ c · g(n) for all n ≥ n₀. This means f(n) always grows at least as fast as g(n) for sufficiently large n.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">3. Theta Notation (Θ) — Tight Bound</h4>
            <p className="text-gray-700 leading-relaxed">
              Theta notation provides an <strong>asymptotic tight bound</strong> — both upper and lower bounds together. It gives the exact growth rate. Formally, f(n) = Θ(g(n)) if there exist positive constants c₁, c₂, and n₀ such that c₁ · g(n) ≤ f(n) ≤ c₂ · g(n) for all n ≥ n₀. This means f(n) grows at the same rate as g(n), within constant factors.
            </p>

            <ComparisonTable
              headers={['Feature', 'Big O (O)', 'Theta (Θ)', 'Omega (Ω)']}
              rows={[
                ['Meaning', 'Upper Bound (Worst Case)', 'Tight Bound (Exact)', 'Lower Bound (Best Case)'],
                ['Definition', 'f(n) ≤ c·g(n)', 'c₁·g(n) ≤ f(n) ≤ c₂·g(n)', 'f(n) ≥ c·g(n)'],
                ['Interpretation', 'Algorithm takes AT MOST this much time', 'Algorithm takes EXACTLY this much time', 'Algorithm takes AT LEAST this much time'],
                ['Used for', 'Guaranteeing performance', 'Precise analysis', 'Proving algorithm cannot do better'],
                ['Example: Linear Search', 'O(n) — worst: element at end', 'Θ(n) — average behavior', 'Ω(1) — best: element at start'],
                ['Example: Binary Search', 'O(log n)', 'Θ(log n)', 'Ω(1)'],
                ['Example: Bubble Sort', 'O(n²)', 'Θ(n²)', 'Ω(n)'],
              ]}
            />

            <Example title="Numerical Examples">
              <p><strong>Scenario 1: Prove that f(n) = 3n² + 5n + 7 is O(n²)</strong></p>
              <p>We need: 3n² + 5n + 7 ≤ c·n² for n ≥ n₀</p>
              <p>For n ≥ 6: 3n² + 5n + 7 ≤ 3n² + 5n² + 7n² = 15n² (since n ≥ 6, n ≤ n², 7 ≤ n²)</p>
              <p>Therefore, f(n) = O(n²) with c = 15, n₀ = 6.</p>
              <p>Similarly, f(n) = Ω(n²) since 3n² + 5n + 7 ≥ 3n² for all n ≥ 1 (c₁ = 3).</p>
              <p>Since f(n) = O(n²) and f(n) = Ω(n²), therefore <strong>f(n) = Θ(n²)</strong>.</p>

              <p className="mt-4"><strong>Scenario 2: Different growth rates for n = 1000</strong></p>
              <div className="bg-gray-50 border rounded-lg p-3 mt-2 text-sm font-mono">
                <pre>{`O(1)     = 1
O(log n) = ~10
O(n)     = 1,000
O(n log n) = ~10,000
O(n²)    = 1,000,000
O(2ⁿ)    = 10³⁰¹ (astronomical!)

This shows why choosing the right algorithm matters enormously!
An O(n²) algorithm processes 1000 elements in ~1 million operations,
while an O(n log n) algorithm does it in ~10,000 operations (100x faster).`}</pre>
              </div>
            </Example>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Common Growth Rates (Ordered by Complexity)</h4>
            <ComparisonTable
              headers={['Complexity', 'Name', 'Example Algorithm']}
              rows={[
                ['O(1)', 'Constant', 'Array access, Hash table lookup'],
                ['O(log n)', 'Logarithmic', 'Binary Search'],
                ['O(n)', 'Linear', 'Linear Search, Traversal'],
                ['O(n log n)', 'Linearithmic', 'Merge Sort, Heap Sort, Quick Sort (avg)'],
                ['O(n²)', 'Quadratic', 'Bubble Sort, Insertion Sort, Selection Sort'],
                ['O(n³)', 'Cubic', 'Matrix Multiplication (naive)'],
                ['O(2ⁿ)', 'Exponential', 'Recursive Fibonacci, Tower of Hanoi'],
                ['O(n!)', 'Factorial', 'Permutation generation, Brute-force TSP'],
              ]}
            />

            <KeyPoints points={[
              'Big O (O): Upper bound — worst-case complexity. Algorithm performs AT MOST this well.',
              'Theta (Θ): Tight bound — exact complexity. Algorithm performs EXACTLY this well.',
              'Omega (Ω): Lower bound — best-case complexity. Algorithm performs AT LEAST this well.',
              'If f(n) = Θ(g(n)), then f(n) = O(g(n)) AND f(n) = Ω(g(n)).',
              'In practice, we usually focus on Big O for worst-case analysis.',
              'Drop constants and lower-order terms: O(3n² + 5n + 7) simplifies to O(n²).',
            ]} />
          </SubQuestion>

        </div>
      </div>
    </div>
  );
}
