import { SectionCard, DefBox, KeyPoints, CompTable, SubHeading } from '../components/shared';

export default function Question3() {
  return (
    <div className="space-y-8">

      {/* ── (a) Array – Row Major & Column Major ── */}
      <SectionCard title="(a) Define Array. Explain Row Major Order &amp; Column Major Order">
        <DefBox title="Definition — Array">
          <p>
            An <strong>array</strong> is a <strong>linear data structure</strong> that stores a fixed-size, <strong>contiguous collection of elements</strong> of the <strong>same data type</strong>. Each element is accessed using an <strong>index</strong> (or a pair of indices in 2-D arrays). Arrays provide <strong>O(1) random access</strong> to any element using base address arithmetic, making them one of the most fundamental and widely used data structures.
          </p>
          <p className="mt-2">
            In a <strong>2-D array (matrix)</strong>, elements are logically arranged in rows and columns. However, computer memory is <strong>1-D (linear)</strong>, so we need a mapping formula to convert 2-D indices into a 1-D memory address. Two standard mapping techniques are <strong>Row Major Order</strong> and <strong>Column Major Order</strong>.
          </p>
        </DefBox>

        <SubHeading>Row Major Order</SubHeading>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-3">
          <p className="text-sm text-blue-900 leading-relaxed">
            In <strong>Row Major Order</strong>, elements of a 2-D array are stored in memory <strong>row by row</strong>. All elements of the first row are stored first, followed by all elements of the second row, and so on. This is the default storage order in <strong>C, C++, Python (NumPy default)</strong>.
          </p>
          <p className="text-sm text-blue-900 mt-2"><strong>Address Formula:</strong></p>
          <p className="text-sm text-blue-900 font-mono bg-blue-100 p-2 rounded mt-1">
            Address(A[i][j]) = Base + [(i × n + j) × size_of_element]
          </p>
          <p className="text-xs text-blue-700 mt-1">Where <em>n</em> = number of columns, indexing starts from 0.</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 my-3 border border-gray-200">
          <p className="text-sm font-semibold text-gray-800 mb-2">Example: 3×3 matrix stored in Row Major</p>
          <div className="grid grid-cols-3 gap-1 max-w-xs mb-3">
            {[['a₀₀','bg-indigo-200'],['a₀₁','bg-indigo-300'],['a₀₂','bg-indigo-400'],
              ['a₁₀','bg-purple-200'],['a₁₁','bg-purple-300'],['a₁₂','bg-purple-400'],
              ['a₂₀','bg-pink-200'],['a₂₁','bg-pink-300'],['a₂₂','bg-pink-400']].map(([label, color], i) => (
              <div key={i} className={`${color} text-center py-2 rounded text-xs font-mono text-gray-800`}>{label}</div>
            ))}
          </div>
          <p className="text-sm text-gray-600">Memory: <span className="font-mono text-xs">a₀₀ | a₀₁ | a₀₂ | a₁₀ | a₁₁ | a₁₂ | a₂₀ | a₂₁ | a₂₂</span></p>
          <p className="text-xs text-gray-500 mt-1 italic">Row 0 → Row 1 → Row 2</p>
        </div>

        <SubHeading>Column Major Order</SubHeading>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 my-3">
          <p className="text-sm text-green-900 leading-relaxed">
            In <strong>Column Major Order</strong>, elements are stored <strong>column by column</strong>. All elements of the first column are stored first, then the second column, and so on. This is the default storage order in <strong>Fortran, MATLAB, R, Julia</strong>.
          </p>
          <p className="text-sm text-green-900 mt-2"><strong>Address Formula:</strong></p>
          <p className="text-sm text-green-900 font-mono bg-green-100 p-2 rounded mt-1">
            Address(A[i][j]) = Base + [(j × m + i) × size_of_element]
          </p>
          <p className="text-xs text-green-700 mt-1">Where <em>m</em> = number of rows, indexing starts from 0.</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 my-3 border border-gray-200">
          <p className="text-sm font-semibold text-gray-800 mb-2">Example: Same 3×3 matrix in Column Major</p>
          <p className="text-sm text-gray-600">Memory: <span className="font-mono text-xs">a₀₀ | a₁₀ | a₂₀ | a₀₁ | a₁₁ | a₂₁ | a₀₂ | a₁₂ | a₂₂</span></p>
          <p className="text-xs text-gray-500 mt-1 italic">Col 0 → Col 1 → Col 2</p>
        </div>

        <SubHeading>Numerical Example</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-3 border border-gray-200 text-sm text-gray-700">
          <p>Consider a 3×4 array <code className="bg-gray-200 px-1 rounded">A[3][4]</code> with base address 1000 and element size = 2 bytes.</p>
          <p className="mt-2"><strong>Find address of A[2][3]:</strong></p>
          <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
            <li><strong>Row Major:</strong> Address = 1000 + (2 × 4 + 3) × 2 = 1000 + 11 × 2 = <strong>1022</strong></li>
            <li><strong>Column Major:</strong> Address = 1000 + (3 × 3 + 2) × 2 = 1000 + 11 × 2 = <strong>1022</strong></li>
          </ul>
        </div>

        <CompTable
          headers={['Aspect', 'Row Major Order', 'Column Major Order']}
          rows={[
            ['Storage Sequence', 'Row by row (row 0, then row 1, ...)', 'Column by column (col 0, then col 1, ...)'],
            ['Address Formula', 'Base + (i × n + j) × size', 'Base + (j × m + i) × size'],
            ['Used In', 'C, C++, Java, Python', 'Fortran, MATLAB, R, Julia'],
            ['Best For', 'Row-wise traversal (cache friendly)', 'Column-wise traversal (cache friendly)'],
          ]}
        />

        <KeyPoints points={[
          'Array stores elements of the same type in contiguous memory locations.',
          'Row Major: stores elements row by row. Formula: Base + (i×n + j)×size.',
          'Column Major: stores elements column by column. Formula: Base + (j×m + i)×size.',
          'Row Major is default in C/C++; Column Major in Fortran/MATLAB.',
          'Cache performance depends on access pattern matching storage order.',
        ]} />
      </SectionCard>

      {/* ── (b) Asymptotic Notations ── */}
      <SectionCard title="(b) Explain Asymptotic Notations — Big O, Theta (Θ), Omega (Ω)">
        <DefBox title="Definition — Asymptotic Notations">
          <p>
            <strong>Asymptotic notations</strong> are mathematical tools used to describe the <strong>growth rate</strong> of an algorithm's running time (or space) as a function of the input size <em>n</em>, for sufficiently large values of <em>n</em>. They allow us to compare algorithms <strong>independently of machine speed, compiler, or hardware</strong> — focusing only on the fundamental efficiency.
          </p>
        </DefBox>

        <SubHeading>1. Big O Notation (O) — Upper Bound</SubHeading>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-3">
          <p className="text-sm text-red-900 leading-relaxed">
            <strong>Big O</strong> represents the <strong>upper bound (worst-case)</strong> of an algorithm's growth rate. It defines the maximum amount of time/space an algorithm will take, regardless of input. Formally: <em>f(n) = O(g(n))</em> if there exist positive constants <em>c</em> and <em>n₀</em> such that <strong>f(n) ≤ c · g(n)</strong> for all n ≥ n₀.
          </p>
          <p className="text-sm text-red-900 mt-2"><strong>Example:</strong> Bubble Sort has worst-case O(n²). Binary Search has O(log n).</p>
        </div>

        <SubHeading>2. Omega Notation (Ω) — Lower Bound</SubHeading>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 my-3">
          <p className="text-sm text-green-900 leading-relaxed">
            <strong>Omega (Ω)</strong> represents the <strong>lower bound (best-case)</strong> of an algorithm's growth rate. It defines the minimum time an algorithm will take for any input. Formally: <em>f(n) = Ω(g(n))</em> if there exist positive constants <em>c</em> and <em>n₀</em> such that <strong>f(n) ≥ c · g(n)</strong> for all n ≥ n₀.
          </p>
          <p className="text-sm text-green-900 mt-2"><strong>Example:</strong> Insertion Sort has best-case Ω(n) (already sorted). Linear search has Ω(1).</p>
        </div>

        <SubHeading>3. Theta Notation (Θ) — Tight Bound</SubHeading>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-3">
          <p className="text-sm text-blue-900 leading-relaxed">
            <strong>Theta (Θ)</strong> represents the <strong>tight bound (average/exact)</strong> of an algorithm's growth rate. It means the algorithm grows at <strong>both</strong> the upper and lower bound at the same rate. Formally: <em>f(n) = Θ(g(n))</em> if there exist positive constants <em>c₁, c₂</em> and <em>n₀</em> such that <strong>c₁ · g(n) ≤ f(n) ≤ c₂ · g(n)</strong> for all n ≥ n₀.
          </p>
          <p className="text-sm text-blue-900 mt-2"><strong>Example:</strong> Merge Sort is Θ(n log n) in all cases. Binary Search is Θ(log n).</p>
        </div>

        <SubHeading>Visual Representation — Growth Rate Comparison</SubHeading>
        <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 overflow-x-auto">
          <svg viewBox="0 0 500 280" className="w-full max-w-lg mx-auto" style={{ height: 'auto' }}>
            <defs>
              <marker id="arrowhead2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#374151"/></marker>
            </defs>
            {/* Axes */}
            <line x1="50" y1="250" x2="480" y2="250" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrowhead2)"/>
            <line x1="50" y1="250" x2="50" y2="20" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrowhead2)"/>
            <text x="480" y="270" textAnchor="end" fill="#374151" fontSize="12">n (input size)</text>
            <text x="20" y="20" textAnchor="start" fill="#374151" fontSize="11">Time</text>
            {/* O(1) */}
            <line x1="55" y1="210" x2="470" y2="210" stroke="#16a34a" strokeWidth="2"/>
            <text x="475" y="214" fill="#16a34a" fontSize="10" fontWeight="bold">O(1)</text>
            {/* O(log n) */}
            <path d="M55,240 Q120,225 180,218 Q280,212 380,209 Q430,208 470,207" fill="none" stroke="#2563eb" strokeWidth="2"/>
            <text x="475" y="207" fill="#2563eb" fontSize="10" fontWeight="bold">O(log n)</text>
            {/* O(n) */}
            <line x1="55" y1="245" x2="470" y2="130" stroke="#d97706" strokeWidth="2"/>
            <text x="475" y="128" fill="#d97706" fontSize="10" fontWeight="bold">O(n)</text>
            {/* O(n log n) */}
            <path d="M55,248 Q150,230 250,190 Q350,140 420,90 Q450,70 470,55" fill="none" stroke="#7c3aed" strokeWidth="2"/>
            <text x="455" y="48" fill="#7c3aed" fontSize="10" fontWeight="bold">O(n log n)</text>
            {/* O(n²) */}
            <path d="M55,248 Q150,240 250,210 Q320,160 400,70 Q430,45 460,20" fill="none" stroke="#dc2626" strokeWidth="2"/>
            <text x="445" y="18" fill="#dc2626" fontSize="10" fontWeight="bold">O(n²)</text>
            {/* Legend */}
            <rect x="55" y="5" width="160" height="20" rx="4" fill="white" fillOpacity="0.8"/>
            <text x="60" y="18" fill="#374151" fontSize="9">Growth rates: 1 &lt; log n &lt; n &lt; n log n &lt; n²</text>
          </svg>
        </div>

        <SubHeading>Comparison Table</SubHeading>
        <CompTable
          headers={['Notation', 'Meaning', 'Bound', 'Formal Definition', 'Example']}
          rows={[
            ['O (Big O)', 'Upper bound', 'Worst case', 'f(n) ≤ c·g(n)', 'Bubble Sort = O(n²)'],
            ['Ω (Omega)', 'Lower bound', 'Best case', 'f(n) ≥ c·g(n)', 'Insertion Sort = Ω(n)'],
            ['Θ (Theta)', 'Tight bound', 'Both upper & lower', 'c₁·g(n) ≤ f(n) ≤ c₂·g(n)', 'Merge Sort = Θ(n log n)'],
          ]}
        />

        <SubHeading>Common Growth Rates (Fastest to Slowest)</SubHeading>
        <div className="overflow-x-auto my-4 rounded-xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-green-100 to-red-100">
                <th className="px-4 py-2 text-left font-bold">Rank</th>
                <th className="px-4 py-2 text-left font-bold">Complexity</th>
                <th className="px-4 py-2 text-left font-bold">Name</th>
                <th className="px-4 py-2 text-left font-bold">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1', 'O(1)', 'Constant', 'Array access'],
                ['2', 'O(log n)', 'Logarithmic', 'Binary search'],
                ['3', 'O(n)', 'Linear', 'Sequential search'],
                ['4', 'O(n log n)', 'Linearithmic', 'Merge sort'],
                ['5', 'O(n²)', 'Quadratic', 'Bubble sort'],
                ['6', 'O(2ⁿ)', 'Exponential', 'Recursive Fibonacci'],
              ].map(([rank, complexity, name, example], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2">{rank}</td>
                  <td className="px-4 py-2 font-mono font-bold">{complexity}</td>
                  <td className="px-4 py-2">{name}</td>
                  <td className="px-4 py-2">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <KeyPoints points={[
          'Big O (O): Upper bound — worst-case performance.',
          'Omega (Ω): Lower bound — best-case performance.',
          'Theta (Θ): Tight bound — exact growth rate (when upper = lower).',
          'If f(n) = Θ(g(n)), then f(n) = O(g(n)) AND f(n) = Ω(g(n)).',
          'Growth rate order: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).',
          'Used to compare algorithms independent of hardware.',
        ]} />
      </SectionCard>
    </div>
  );
}
