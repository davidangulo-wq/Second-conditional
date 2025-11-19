
import React from 'react';

interface ResultsCardProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  let message = '';
  if (percentage >= 90) {
    message = '¡Excelente trabajo! Eres un experto.';
  } else if (percentage >= 70) {
    message = '¡Muy bien hecho! Sigue así.';
  } else if (percentage >= 50) {
    message = '¡Buen intento! Un poco más de práctica y lo dominarás.';
  } else {
    message = '¡No te rindas! Repasa un poco más y vuelve a intentarlo.';
  }

  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <h2 className="text-4xl font-bold text-purple-400 mb-4">¡Has completado el quiz!</h2>
      <p className="text-2xl text-gray-300 mb-2">Tu puntuación final es:</p>
      <p className="text-7xl font-extrabold text-white my-4">{score} / {totalQuestions}</p>
      <p className="text-xl text-yellow-400 font-semibold">{message}</p>
      <button
        onClick={onRestart}
        className="mt-10 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg text-2xl transition-transform transform hover:scale-105 shadow-lg"
      >
        Jugar de nuevo
      </button>
    </div>
  );
};

export default ResultsCard;
