
import React, { useState, useCallback } from 'react';
import { QUIZ_QUESTIONS } from './constants';
import QuestionCard from './components/QuestionCard';
import ResultsCard from './components/ResultsCard';
import type { Question } from './types';

const App: React.FC = () => {
  const [questions] = useState<Question[]>(QUIZ_QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const handleAnswerSelect = useCallback((selectedIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswerIndex(selectedIndex);
    setIsAnswered(true);

    if (selectedIndex === questions[currentQuestionIndex].correctAnswerIndex) {
      setScore(prevScore => prevScore + 1);
    }
  }, [isAnswered, currentQuestionIndex, questions]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswerIndex(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  }, [currentQuestionIndex, questions.length]);

  const handleRestartQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
    setQuizFinished(false);
  }, []);

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 font-sans text-white">
      <div className="w-full max-w-4xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400">Second Conditional Quiz</h1>
          <p className="text-lg text-gray-300 mt-2">¡Pon a prueba tus conocimientos!</p>
        </header>

        <div className="bg-gray-800 rounded-lg shadow-2xl p-6 md:p-8 min-h-[500px] flex flex-col justify-between">
          {quizFinished ? (
            <ResultsCard
              score={score}
              totalQuestions={questions.length}
              onRestart={handleRestartQuiz}
            />
          ) : (
            <QuestionCard
              question={questions[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              selectedAnswerIndex={selectedAnswerIndex}
              isAnswered={isAnswered}
              onAnswerSelect={handleAnswerSelect}
              onNext={handleNextQuestion}
            />
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
