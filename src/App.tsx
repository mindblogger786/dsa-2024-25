import { useState, useEffect } from 'react';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Question5 from './components/Question5';
import Question6 from './components/Question6';
import Question7 from './components/Question7';

const questions = [
  { id: 'q1', label: 'Q1', title: 'Short Answer Questions (a–g)', sub: '7 sub-questions' },
  { id: 'q2', label: 'Q2', title: 'Data Structures, Stack, Sorting, Trees, Graphs', sub: '5 sub-questions' },
  { id: 'q3', label: 'Q3', title: 'Arrays & Asymptotic Notations', sub: '2 sub-questions' },
  { id: 'q4', label: 'Q4', title: 'Circular Queue & Hashing', sub: '2 sub-questions' },
  { id: 'q5', label: 'Q5', title: 'DFS, BFS & Heap Sort', sub: '2 sub-questions' },
  { id: 'q6', label: 'Q6', title: 'BST & B-Tree', sub: '2 sub-questions' },
  { id: 'q7', label: 'Q7', title: 'Divide & Conquer, Dijkstra', sub: '2 sub-questions' },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeQ, setActiveQ] = useState('q1');

  useEffect(() => {
    const handleScroll = () => {
      const sections = questions.map(q => document.getElementById(q.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveQ(questions[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveQ(id);
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-indigo-900 text-white z-50 flex items-center px-4 py-3 shadow-lg">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mr-3 p-2 hover:bg-indigo-800 rounded"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="font-bold text-lg">DSA Exam Guide</h1>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-indigo-950 to-indigo-900 text-white z-50 transform transition-transform duration-300 overflow-y-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-6 border-b border-indigo-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">DSA Exam Guide</h1>
              <p className="text-indigo-300 text-xs">Complete PYQ Solutions</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {questions.map((q) => (
            <button
              key={q.id}
              onClick={() => scrollTo(q.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                activeQ === q.id
                  ? 'bg-indigo-600 shadow-lg shadow-indigo-600/30'
                  : 'hover:bg-indigo-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="bg-white/20 text-xs font-bold px-2 py-1 rounded">{q.label}</span>
                <div>
                  <div className="font-semibold text-sm leading-tight">{q.title}</div>
                  <div className="text-indigo-300 text-xs mt-0.5">{q.sub}</div>
                </div>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-4 mx-4 mb-4 bg-indigo-800/50 rounded-lg">
          <p className="text-indigo-200 text-xs leading-relaxed">
            📚 MCA University Exam Preparation Guide — Data Structures & Analysis of Algorithms
          </p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-72 pt-16 lg:pt-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white rounded-2xl p-8 mb-10 shadow-xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Data Structures & Analysis of Algorithms
            </h1>
            <h2 className="text-xl text-indigo-200 mb-4">Previous Year Questions — Complete Solutions</h2>
            <p className="text-indigo-100 max-w-2xl leading-relaxed">
              Comprehensive, exam-oriented solutions covering all 7 questions with 20+ sub-questions.
              Each answer includes definitions, core concepts, visual representations, code implementations,
              numerical examples, and revision points.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">📝 7 Questions</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">🎯 20+ Sub-questions</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">💻 Code Examples</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">📊 Visual Diagrams</span>
            </div>
          </div>

          {/* Questions */}
          <div id="q1"><Question1 /></div>
          <div id="q2"><Question2 /></div>
          <div id="q3"><Question3 /></div>
          <div id="q4"><Question4 /></div>
          <div id="q5"><Question5 /></div>
          <div id="q6"><Question6 /></div>
          <div id="q7"><Question7 /></div>

          {/* Footer */}
          <div className="mt-16 mb-8 text-center text-gray-500 text-sm border-t pt-8">
            <p>DSA Exam Guide — Complete PYQ Solutions for MCA University Exams</p>
            <p className="mt-1">Data Structures & Analysis of Algorithms</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
