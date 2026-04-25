import React from 'react';

export function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div className="my-4 rounded-lg overflow-hidden border border-gray-700">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-gray-300 text-xs font-mono">{title}</div>
      )}
      <pre className="bg-gray-900 text-green-300 p-4 overflow-x-auto text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function KeyPoints({ points }: { points: string[] }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg my-6 shadow-sm">
      <h4 className="font-bold text-amber-800 mb-3 text-lg">🔑 Key Points for Revision</h4>
      <ul className="list-disc list-inside space-y-2">
        {points.map((p, i) => (
          <li key={i} className="text-amber-900">{p}</li>
        ))}
      </ul>
    </div>
  );
}

export function Definition({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-4 shadow-sm">
      <h4 className="font-bold text-blue-800 mb-2">📖 Definition</h4>
      <div className="text-blue-900">{children}</div>
    </div>
  );
}

export function Example({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-5 my-4 shadow-sm">
      {title && <h4 className="font-bold text-green-800 mb-3">📌 {title}</h4>}
      <div className="text-green-900">{children}</div>
    </div>
  );
}

export function FlowChart({ steps }: { steps: string[] }) {
  return (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 my-4 shadow-sm">
      <h4 className="font-bold text-purple-800 mb-3">🔄 Step-by-Step Flowchart</h4>
      <div className="space-y-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="bg-purple-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span className="text-purple-900 pt-0.5">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4 rounded-lg border border-gray-300 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-indigo-700 text-white">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 border-t border-gray-200 text-gray-800">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SubQuestion({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mb-12 scroll-mt-24">
      <h3 className="text-2xl font-bold text-indigo-800 mb-6 pb-2 border-b-2 border-indigo-200">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function Hr() {
  return <hr className="my-10 border-t-2 border-gray-300" />;
}
