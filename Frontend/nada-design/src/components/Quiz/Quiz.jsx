import React, { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Timer from "./Timer";
import { quizData } from "./Questions";
import './Quiz.css'; // Ensure this file matches the custom styles provided

const Quiz = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const topicData = quizData.find(topic => topic.id === topicId);

  // Moved useCallback to top level
  const handleTimeUp = useCallback(() => {
    setShowScore(true);
  }, []);

  const handleOptionClick = (selectedOption) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections

    setSelectedAnswer(selectedOption);
    const correct = selectedOption === topicData?.questions[currentQuestion]?.answer;

    if (correct) {
      setScore(score + 1);
    }

    // Move to next question after delay
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < topicData?.questions?.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  // Early return for invalid topic
  if (!topicData) {
    return (
      <div className="min-h-screen">
        <div className="score-card">
          <h1 className="score-title">No Quiz Found for "{topicId}"</h1>
          <button onClick={() => navigate('/')} className="button primary">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  if (showScore) {
    return (
      <div className="min-h-screen">
        <div className="score-card">
          <h2 className="score-title">Quiz Complete!</h2>
          <div className="score-value">
            Your Score: {score}/{topicData.questions.length}
          </div>
          <div className="quiz-footer">
            <button onClick={restartQuiz} className="button primary">
              Retry Quiz
            </button>
            <button onClick={() => navigate('/Handbook')} className="button secondary">
              Back to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="quiz-container">
        <div
          className="quiz-image"
          style={{ backgroundImage: `url(${topicData.background})` }}
        />
        <div className="quiz-content">
          <div className="timer">
            <Timer duration={60} onTimeUp={handleTimeUp} />
          </div>
          <div className="question-number">
            Question {currentQuestion + 1} of {topicData.questions.length}
          </div>
          <div className="question-text">
            {topicData.questions[currentQuestion].question}
          </div>
          <div className="options-container">
            {topicData.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`option ${
                  selectedAnswer !== null
                    ? option === topicData.questions[currentQuestion].answer
                      ? "correct"
                      : selectedAnswer === option
                      ? "incorrect"
                      : "disabled"
                    : ""
                }`}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
