/**
 * Exam board coverage grid for the regional pages. Each card lists the qualifications we tutor
 * for that board and a few well-known specification codes, which students often search for.
 */
import React from 'react';

export interface ExamBoard {
  name: string;
  quals: string;
  codes?: string[];
  note?: string;
}

interface ExamBoardsProps {
  heading: string;
  intro: string;
  boards: ExamBoard[];
  /** Tailwind classes for the accent: border and badge colours */
  accent: { border: string; badge: string };
}

const ExamBoards: React.FC<ExamBoardsProps> = ({ heading, intro, boards, accent }) => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 text-center">{heading}</h2>
      <p className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto">{intro}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boards.map(board => (
          <article key={board.name} className={`flex flex-col rounded-2xl border-2 ${accent.border} p-6 bg-white`}>
            <h3 className="text-xl font-black text-slate-900">{board.name}</h3>
            <p className="mt-1 text-sm font-bold text-slate-500">{board.quals}</p>
            {board.note && <p className="mt-3 text-slate-600 text-sm leading-relaxed">{board.note}</p>}
            {board.codes && (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${board.name} specifications`}>
                {board.codes.map(code => (
                  <li key={code} className={`text-xs font-bold rounded-lg px-2.5 py-1 ${accent.badge}`}>{code}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExamBoards;
