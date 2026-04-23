import { ReactNode } from 'react';

export function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 mb-8 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="p-6 space-y-4">{children}</div>
    </div>
  );
}

export function CodeBlock({ code, language = 'c' }: { code: string; language?: string }) {
  return (
    <div className="rounded-xl overflow-hidden my-4 border border-gray-700">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <span className="text-gray-400 text-xs font-mono">{language}</span>
      </div>
      <pre className="bg-gray-900 p-4 overflow-x-auto">
        <code className="text-green-300 text-sm font-mono leading-relaxed">{code}</code>
      </pre>
    </div>
  );
}

export function CompTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4 rounded-xl border border-gray-200">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-100 to-purple-100">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-sm font-bold text-indigo-900 border-b border-indigo-200">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-indigo-50 transition-colors`}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function KeyPoints({ points }: { points: string[] }) {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-5 rounded-r-xl my-4">
      <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
        <span>🔑</span> Key Points for Quick Revision
      </h4>
      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i} className="text-amber-900 text-sm flex items-start gap-2">
            <span className="text-amber-500 mt-0.5">▸</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DefBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-4">
      <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
        <span>📖</span> {title}
      </h4>
      <div className="text-blue-900 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function NoteBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-5 my-4">
      <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
        <span>💡</span> Important Note
      </h4>
      <div className="text-green-900 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function AlgoSteps({ steps }: { steps: string[] }) {
  return (
    <div className="bg-gray-50 rounded-xl p-5 my-4 border border-gray-200">
      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span>⚙️</span> Algorithm Steps
      </h4>
      <ol className="space-y-2">
        {steps.map((s, i) => (
          <li key={i} className="text-sm text-gray-700 flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h4 className="font-bold text-gray-800 mt-4 mb-2 text-base">{children}</h4>;
}
