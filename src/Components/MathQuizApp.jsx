import React, { useState } from 'react';

const MathQuizApp = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is 7 × 8?",
      options: [54, 56, 64, 72],
      correct: 1
    },
    {
      question: "Solve: 144 ÷ 12 = ?",
      options: [11, 12, 13, 14],
      correct: 1
    },
    {
      question: "What is 15% of 200?",
      options: [25, 30, 35, 40],
      correct: 1
    },
    {
      question: "If x + 7 = 15, what is x?",
      options: [6, 7, 8, 9],
      correct: 2
    },
    {
      question: "What is √64?",
      options: [6, 7, 8, 9],
      correct: 2
    }
  ];

  const handleStartQuiz = () => {
    setCurrentView('quiz');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswerSelect = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      if (index === questions[currentQuestion].correct) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentView('landing');
  };

  if (currentView === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-800">MathQuizApp</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎓 Free Math Assessment
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Test Your Math Skills in{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                5 Minutes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Challenge yourself with our interactive math quiz. Get instant feedback, track your progress, and discover where you excel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleStartQuiz}
                className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-xl text-lg font-bold flex items-center gap-3 transition-all hover:scale-105 shadow-2xl hover:shadow-purple-500/50"
              >
                Start Quiz Now
                <span className="text-2xl">→</span>
              </button>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-2xl">⏱️</span>
                <span className="font-medium">Only 5 minutes • No signup required</span>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
                <div className="text-gray-600 font-medium">Challenging Questions</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Instant Results</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
                <div className="text-gray-600 font-medium">Unlimited Retakes</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Visual Card */}
            <div className="relative order-2 md:order-1">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-purple-100 rounded-xl p-6 flex items-center justify-center aspect-square transform hover:scale-110 transition-transform">
                      <span className="text-5xl">🧮</span>
                    </div>
                    <div className="bg-blue-100 rounded-xl p-6 flex items-center justify-center aspect-square transform hover:scale-110 transition-transform">
                      <span className="text-5xl">🏆</span>
                    </div>
                    <div className="bg-pink-100 rounded-xl p-6 flex items-center justify-center aspect-square transform hover:scale-110 transition-transform">
                      <span className="text-5xl">🎯</span>
                    </div>
                    <div className="bg-green-100 rounded-xl p-6 flex items-center justify-center aspect-square transform hover:scale-110 transition-transform">
                      <span className="text-5xl">⚡</span>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 flex items-center justify-center aspect-square col-span-2 row-span-2 shadow-lg">
                      <div className="text-white text-center">
                        <div className="text-5xl font-bold mb-2">5</div>
                        <div className="text-base font-semibold">Questions</div>
                      </div>
                    </div>
                    <div className="bg-yellow-100 rounded-xl p-6 flex items-center justify-center aspect-square transform hover:scale-110 transition-transform">
                      <span className="text-5xl">📊</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-gray-500 text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Quick
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      Fun
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                      Educational
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-xl animate-bounce">
                <span className="text-3xl">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-4 shadow-xl" style={{animation: 'bounce 2s infinite'}}>
                <span className="text-3xl">🎉</span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What You'll Get</h2>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 rounded-lg p-3 flex-shrink-0">
                  <span className="text-3xl">📈</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Instant Score Analysis</h3>
                  <p className="text-gray-600">Get immediate feedback on your performance with detailed scoring and personalized insights.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <span className="text-3xl">🎓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Skill Assessment</h3>
                  <p className="text-gray-600">Discover your strengths and areas for improvement across different math topics.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                  <span className="text-3xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Challenge Your Friends</h3>
                  <p className="text-gray-600">Share your results and compete with classmates to see who's the real math champion.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-pink-100 rounded-lg p-3 flex-shrink-0">
                  <span className="text-3xl">💡</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Learning Resources</h3>
                  <p className="text-gray-600">Access curated study materials and practice problems to master math concepts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
          <div className="text-8xl mb-6">🏆</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quiz Complete!</h2>
          <div className="text-6xl font-bold text-purple-600 mb-4">{score}/{questions.length}</div>
          <p className="text-2xl text-gray-700 mb-8">You scored {percentage.toFixed(0)}%</p>
          
          {percentage >= 80 ? (
            <p className="text-lg text-gray-600 mb-8">Outstanding! You are pro now! 🎉</p>
          ) : percentage >= 60 ? (
            <p className="text-lg text-gray-600 mb-8">Good job! Keep practicing to improve further! 📚</p>
          ) : (
            <p className="text-lg text-gray-600 mb-8">Keep learning! Practice makes perfect! 💪</p>
          )}

          <button
            onClick={handleRetry}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-purple-600">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm font-semibold text-gray-600">Score: {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">{questions[currentQuestion].question}</h2>

        <div className="space-y-4 mb-8">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 rounded-lg text-left font-semibold transition-all ${
                selectedAnswer === null
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  : index === questions[currentQuestion].correct
                  ? 'bg-green-100 text-green-800 border-2 border-green-500'
                  : index === selectedAnswer
                  ? 'bg-red-100 text-red-800 border-2 border-red-500'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedAnswer !== null && index === questions[currentQuestion].correct && (
                  <span className="text-2xl text-green-600">✓</span>
                )}
                {selectedAnswer === index && index !== questions[currentQuestion].correct && (
                  <span className="text-2xl text-red-600">✗</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <button
            onClick={handleNext}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MathQuizApp;