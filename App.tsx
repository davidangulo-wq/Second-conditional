
import React, { useState, useCallback } from 'react';
import { QUIZ_QUESTIONS } from './constants';
import QuestionCard from './components/QuestionCard';
import ResultsCard from './components/ResultsCard';
import IntroCard from './components/IntroCard';
import type { Question } from './types';

const App: React.FC = () => {
  const [questions] = useState<Question[]>(QUIZ_QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  
  // Game State
  const [gamePhase, setGamePhase] = useState<'intro' | 'playing' | 'finished'>('intro');
  const [scores, setScores] = useState<{ team1: number; team2: number }>({ team1: 0, team2: 0 });
  const [currentTeam, setCurrentTeam] = useState<1 | 2>(1);
  
  // Question State
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const POINTS_PER_QUESTION = 1000;

  const handleStartQuiz = useCallback(() => {
    setGamePhase('playing');
    setCurrentQuestionIndex(0);
    setScores({ team1: 0, team2: 0 });
    setCurrentTeam(1);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
  }, []);

  const handleAnswerSelect = useCallback((selectedIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswerIndex(selectedIndex);
    setIsAnswered(true);

    if (selectedIndex === questions[currentQuestionIndex].correctAnswerIndex) {
      setScores(prev => ({
        ...prev,
        [`team${currentTeam}`]: prev[`team${currentTeam}` as keyof typeof prev] + POINTS_PER_QUESTION
      }));
    }
  }, [isAnswered, currentQuestionIndex, questions, currentTeam]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswerIndex(null);
      setIsAnswered(false);
      // Switch turns
      setCurrentTeam(prev => prev === 1 ? 2 : 1);
    } else {
      setGamePhase('finished');
    }
  }, [currentQuestionIndex, questions.length]);

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 font-sans text-white">
      <div className="w-full max-w-5xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">Second Conditional Quiz</h1>
          
          {gamePhase !== 'intro' && (
            <div className="flex justify-center items-center gap-4 md:gap-12 mt-4">
              <div className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 border-2 ${currentTeam === 1 && gamePhase === 'playing' ? 'bg-blue-900/50 border-blue-500 scale-110 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'border-transparent opacity-70'}`}>
                <span className="text-blue-400 font-bold text-lg uppercase tracking-wider">Equipo 1</span>
                <span className="text-3xl font-black text-white">{scores.team1}</span>
              </div>
              
              <div className="text-gray-600 font-bold text-xl">VS</div>
              
              <div className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 border-2 ${currentTeam === 2 && gamePhase === 'playing' ? 'bg-pink-900/50 border-pink-500 scale-110 shadow-[0_0_20px_rgba(236,72,153,0.5)]' : 'border-transparent opacity-70'}`}>
                <span className="text-pink-400 font-bold text-lg uppercase tracking-wider">Equipo 2</span>
                <span className="text-3xl font-black text-white">{scores.team2}</span>
              </div>
            </div>
          )}
        </header>

        <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden min-h-[600px] flex flex-col">
          {gamePhase === 'intro' && (
            <IntroCard onStart={handleStartQuiz} />
          )}

          {gamePhase === 'playing' && (
            <div className="p-6 md:p-8 flex flex-col h-full justify-between">
              <QuestionCard
                question={questions[currentQuestionIndex]}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
                selectedAnswerIndex={selectedAnswerIndex}
                isAnswered={isAnswered}
                onAnswerSelect={handleAnswerSelect}
                onNext={handleNextQuestion}
                currentTeam={currentTeam}
              />
            </div>
          )}

          {gamePhase === 'finished' && (
            <div className="p-6 md:p-8 h-full">
              <ResultsCard
                scores={scores}
                onRestart={handleStartQuiz}
              />
            </div>
          )}
        </div>

        <footer className="text-center mt-8 text-gray-500">
          <p>Creado para alumnos de 3º ESO</p>
        </footer>
      </div>
    </main>
  );
};

export default App;
