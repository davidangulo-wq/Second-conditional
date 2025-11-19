
import React from 'react';

interface IntroCardProps {
  onStart: () => void;
}

const IntroCard: React.FC<IntroCardProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col h-full bg-gray-800 text-white p-6 md:p-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Repaso Rápido: Second Conditional
        </h2>
        <p className="text-gray-400 mt-2 text-lg">Antes de empezar, recordemos las reglas.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow overflow-y-auto">
        {/* Usage Card */}
        <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-purple-500 transition-colors">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">🤔</span>
            <h3 className="text-2xl font-bold text-yellow-400">¿Para qué sirve?</h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-200">
            Se usa para hablar de situaciones <strong>imaginarias</strong>, <strong>hipotéticas</strong> o <strong>poco probables</strong> en el presente o futuro.
          </p>
          <p className="mt-4 text-sm text-gray-400 italic">"Si yo fuera rico... (pero no lo soy)"</p>
        </div>

        {/* Structure Card */}
        <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-blue-500 transition-colors">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">🏗️</span>
            <h3 className="text-2xl font-bold text-blue-400">La Estructura</h3>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg text-center mb-4 border border-gray-500 font-mono text-sm md:text-base shadow-inner">
            <span className="text-purple-400">If</span> + Sujeto + <span className="text-green-400">Past Simple</span>, ... <span className="text-pink-400">would</span> + Verbo
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>La parte del <strong>If</strong> usa el Pasado Simple.</li>
            <li>La consecuencia usa <strong>would</strong> (o wouldn't) + infinitivo.</li>
          </ul>
        </div>

        {/* Examples Card */}
        <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 hover:border-green-500 transition-colors md:col-span-2">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">💡</span>
            <h3 className="text-2xl font-bold text-green-400">Ejemplos Clave</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <p className="font-medium text-white">If I <strong>won</strong> the lottery, I <strong>would travel</strong> the world.</p>
              <p className="text-gray-500 text-sm mt-1">Si ganara la lotería, viajaría por el mundo.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <p className="font-medium text-white">If I <strong>were</strong> you, I <strong>would study</strong> more.</p>
              <p className="text-gray-500 text-sm mt-1">❗ Nota: Con el verbo 'to be', usamos <strong>were</strong> para todas las personas.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-16 rounded-full text-2xl transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
        >
          ¡Empezar Quiz!
        </button>
      </div>
    </div>
  );
};

export default IntroCard;
