
import React from 'react';

interface ResultsCardProps {
  scores: { team1: number; team2: number };
  onRestart: () => void;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ scores, onRestart }) => {
  let winnerTitle = '';
  let winnerColorClass = '';
  
  if (scores.team1 > scores.team2) {
    winnerTitle = '¡Equipo 1 Gana!';
    winnerColorClass = 'text-blue-400';
  } else if (scores.team2 > scores.team1) {
    winnerTitle = '¡Equipo 2 Gana!';
    winnerColorClass = 'text-pink-400';
  } else {
    winnerTitle = '¡Es un Empate!';
    winnerColorClass = 'text-yellow-400';
  }

  return (
    <div className="flex flex-col items-center justify-center text-center h-full py-10">
      <h2 className="text-5xl font-extrabold text-white mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        ¡Quiz Completado!
      </h2>
      
      <div className={`text-6xl md:text-7xl font-black mb-12 ${winnerColorClass} animate-pulse`}>
        {winnerTitle}
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-2xl justify-around gap-8 mb-12">
        <div className="bg-gray-700/50 p-8 rounded-2xl border-2 border-blue-500/30 flex flex-col items-center min-w-[200px]">
            <span className="text-blue-400 font-bold text-xl uppercase mb-2">Equipo 1</span>
            <span className="text-6xl font-black text-white">{scores.team1}</span>
            <span className="text-gray-400 text-sm mt-2">Puntos</span>
        </div>

        <div className="bg-gray-700/50 p-8 rounded-2xl border-2 border-pink-500/30 flex flex-col items-center min-w-[200px]">
            <span className="text-pink-400 font-bold text-xl uppercase mb-2">Equipo 2</span>
            <span className="text-6xl font-black text-white">{scores.team2}</span>
            <span className="text-gray-400 text-sm mt-2">Puntos</span>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full text-2xl transition-transform transform hover:scale-105 shadow-lg border-b-4 border-green-800 active:border-b-0 active:translate-y-1"
      >
        Jugar de nuevo
      </button>
    </div>
  );
};

export default ResultsCard;
