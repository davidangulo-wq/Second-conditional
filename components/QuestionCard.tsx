
import React from 'react';
import type { Question } from '../types';
import { TriangleIcon, DiamondIcon, CircleIcon, SquareIcon } from './Icons';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswerIndex: number | null;
  isAnswered: boolean;
  onAnswerSelect: (index: number) => void;
  onNext: () => void;
  currentTeam: 1 | 2;
}

const icons = [
  <TriangleIcon className="w-6 h-6" />,
  <DiamondIcon className="w-6 h-6" />,
  <CircleIcon className="w-6 h-6" />,
  <SquareIcon className="w-6 h-6" />,
];

const bgColors = [
  "from-red-500 to-red-700 hover:from-red-600 hover:to-red-800",
  "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
  "from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800",
  "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800",
];

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswerIndex,
  isAnswered,
  onAnswerSelect,
  onNext,
  currentTeam
}) => {
  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return `bg-gradient-to-br ${bgColors[index]}`;
    }

    const isCorrect = index === question.correctAnswerIndex;
    const isSelected = index === selectedAnswerIndex;

    if (isCorrect) {
      return "bg-gradient-to-br from-green-500 to-green-700 scale-105 ring-4 ring-white z-10";
    }
    if (isSelected && !isCorrect) {
      return "bg-gradient-to-br from-red-500 to-red-700 opacity-50 grayscale";
    }
    return "bg-gray-600 opacity-30 grayscale";
  };

  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-8 relative">
        <div className="absolute top-0 left-0 w-full flex justify-center -mt-4">
            <span className={`px-6 py-1 rounded-b-lg font-bold text-sm uppercase tracking-widest shadow-lg ${currentTeam === 1 ? 'bg-blue-600 text-white' : 'bg-pink-600 text-white'}`}>
                Turno del Equipo {currentTeam}
            </span>
        </div>
        
        <div className="mt-8">
            <p className="text-lg text-gray-400 font-medium">Pregunta {questionNumber} / {totalQuestions}</p>
            <h2 className="text-2xl md:text-4xl font-bold mt-4 leading-tight max-w-3xl mx-auto">{question.question}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-grow content-center">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            disabled={isAnswered}
            className={`flex items-center justify-start p-6 rounded-xl text-white font-bold text-xl md:text-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:cursor-not-allowed shadow-lg border-2 border-transparent ${getButtonClass(index)}`}
          >
            <div className="w-14 h-14 flex-shrink-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center mr-6 shadow-inner">
              {icons[index]}
            </div>
            <span className="text-left drop-shadow-md">{option}</span>
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mt-8 text-center animate-fade-in-up">
          <button
            onClick={onNext}
            className="bg-white text-gray-900 hover:bg-gray-100 font-extrabold py-4 px-12 rounded-full text-xl transition-all transform hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.4)] border-4 border-transparent hover:border-purple-400"
          >
            {questionNumber === totalQuestions ? 'Ver Resultados' : 'Siguiente Pregunta'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
