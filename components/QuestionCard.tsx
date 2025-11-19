
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
}) => {
  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return `bg-gradient-to-br ${bgColors[index]}`;
    }

    const isCorrect = index === question.correctAnswerIndex;
    const isSelected = index === selectedAnswerIndex;

    if (isCorrect) {
      return "bg-gradient-to-br from-green-500 to-green-700 scale-105 ring-4 ring-white";
    }
    if (isSelected && !isCorrect) {
      return "bg-gradient-to-br from-red-500 to-red-700 opacity-50";
    }
    return "bg-gray-600 opacity-50";
  };

  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-6">
        <p className="text-lg text-gray-400">Pregunta {questionNumber} de {totalQuestions}</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">{question.question}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            disabled={isAnswered}
            className={`flex items-center justify-start p-4 rounded-lg text-white font-bold text-xl transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed shadow-lg ${getButtonClass(index)}`}
          >
            <div className="w-12 h-12 flex-shrink-0 bg-white bg-opacity-20 rounded-md flex items-center justify-center mr-4">
              {icons[index]}
            </div>
            <span>{option}</span>
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mt-6 text-center">
          <button
            onClick={onNext}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-12 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-md"
          >
            {questionNumber === totalQuestions ? 'Ver Resultados' : 'Siguiente'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
