import React, { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Timer from "./Timer";
import { quizData } from "./Questions";

const Quiz = () => {
  // 1. Hooks first
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // 2. Callbacks and event handlers with useCallback
  const handleTimeUp = useCallback(() => {
    setShowScore(true);
  }, []);

  const handleOptionClick = useCallback((selectedOption) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(selectedOption);
    const isCorrect = selectedOption === topicData?.questions[currentQuestion]?.answer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < topicData?.questions?.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  }, [currentQuestion, selectedAnswer, topicData]);

  const restartQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  }, []);

  // 3. Data fetching/processing
  const topicData = quizData.find(topic => topic.id === topicId);

  // 4. Conditional renders
  if (!topicData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Quiz Found for "{topicId}"</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  if (showScore) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <div className="text-lg mb-6">
            Your Score: <span className="text-green-600 font-bold">{score}/{topicData.questions.length}</span>
          </div>
          <div className="space-x-4">
            <button
              onClick={restartQuiz}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors"
            >
              Retry Quiz
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded transition-colors"
            >
              Back to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 5. Main render
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div 
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${topicData.background})` }}
          />
          
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">{topicData.topic}</h1>
              <Timer duration={60} onTimeUp={handleTimeUp} />
            </div>

            <div className="mb-8">
              <p className="text-lg mb-4">
                Question {currentQuestion + 1} of {topicData.questions.length}
              </p>
              <p className="text-xl font-medium">
                {topicData.questions[currentQuestion].question}
              </p>
            </div>

            <div className="space-y-3">
              {topicData.questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded transition-colors ${
                    selectedAnswer === null
                      ? 'bg-gray-100 hover:bg-gray-200'
                      : selectedAnswer === option
                        ? option === topicData.questions[currentQuestion].answer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : option === topicData.questions[currentQuestion].answer
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;