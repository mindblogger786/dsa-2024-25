import { useState, useEffect } from 'react';
import Question1 from './questions/Question1';
import Question2 from './questions/Question2';
import Question3 from './questions/Question3';
import Question4 from './questions/Question4';
import Question5 from './questions/Question5';
import Question6 from './questions/Question6';
import Question7 from './questions/Question7';

const questions = [
  { id: 1, title: 'Question 1', subtitle: 'ADT, Recursion & Basics', icon: '📝' },
  { id: 2, title: 'Question 2', subtitle: 'Stack, Sorting, Trees & MST', icon: '📊' },
  { id: 3, title: 'Question 3', subtitle: 'Arrays & Asymptotic Notations', icon: '📐' },
  { id: 4, title: 'Question 4', subtitle: 'Circular Queue & Hashing', icon: '🔄' },
  { id: 5, title: 'Question 5', subtitle: 'DFS, BFS & Heap Sort', icon: '🌲' },
  { id: 6, title: 'Question 6', subtitle: 'BST & B-Tree Construction', icon: '🌳' },
  { id: 7, title: 'Question 7', subtitle: 'Divide & Conquer & Dijkstra', icon: '⚔️' },
];

const components: Record<number, React.ComponentType> = {
  1: Question1, 2: Question2, 3: Question3, 4: Question4,
  5: Question5, 6: Question6, 7: Question7,
};

export default function App() {
  const [active, setActive] = useState(1);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [active]);

  const ActiveComponent = components[active];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-indigo-900 text-white px-4 py-3 flex items-center shadow-lg">
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 hover:bg-white/10 rounded-lg" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <h1 className="ml-3 font-bold text-lg">📚 DSA PYQ Solutions</h1>
      </header>

      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-indigo-950 via-indigo-900 to-purple-900 text-white z-50 transform transition-transform duration-300 lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5 overflow-y-auto h-full pb-32">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-3xl">📚</span>
            <div>
              <h1 className="text-xl font-bold">DSA PYQ</h1>
              <p className="text-indigo-300 text-[11px] leading-tight">Data Structures &amp; Analysis<br/>of Algorithms</p>
            </div>
          </div>
          <div className="mt-5 mb-3 h-px bg-indigo-700" />
          <p className="text-indigo-400 text-[10px] font-semibold uppercase tracking-wider mb-3">Questions</p>
          <nav className="space-y-1.5">
            {questions.map((q) => (
              <button key={q.id} onClick={() => { setActive(q.id); setMobileOpen(false); }}
                className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${active === q.id ? 'bg-white/15 shadow-lg border-l-4 border-amber-400 pl-2' : 'hover:bg-white/8 border-l-4 border-transparent'}`}>
                <span className="text-lg">{q.icon}</span>
                <div>
                  <div className="font-semibold text-sm">{q.title}</div>
                  <div className="text-[11px] text-indigo-300">{q.subtitle}</div>
                </div>
              </button>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-indigo-950 to-transparent">
          <div className="bg-white/5 rounded-xl p-3">
            <p className="text-indigo-300 text-xs">💡 Exam Preparation Guide</p>
            <p className="text-indigo-400 text-[10px] mt-1">Comprehensive solutions for 10–15 mark university questions</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:ml-72 pt-16 lg:pt-0 min-h-screen">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10">
          <div className="mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex items-center gap-2 text-indigo-200 text-sm mb-2"><span>📋</span><span>Previous Year Question</span></div>
            <h2 className="text-2xl sm:text-3xl font-bold">{questions[active - 1].title}</h2>
            <p className="text-indigo-200 mt-1">{questions[active - 1].subtitle}</p>
          </div>
          <ActiveComponent key={active} />
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200">
            <button onClick={() => setActive(Math.max(1, active - 1))} disabled={active === 1}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${active === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-50 border border-indigo-200'}`}>
              ← Previous
            </button>
            <span className="text-gray-400 text-sm">{active} of {questions.length}</span>
            <button onClick={() => setActive(Math.min(questions.length, active + 1))} disabled={active === questions.length}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${active === questions.length ? 'text-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'}`}>
              Next →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
