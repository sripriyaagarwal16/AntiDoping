import React, { useState } from "react";
import { useParams } from "react-router-dom"; // To get topic from URL
import { quizData } from "./Questions";
import Timer from "./Timer";
import "./Quiz.css";

const Quiz = () => {
  const { topic } = useParams(); // Extract topic from URL
  const questions = quizData[topic] || []; // Get questions for the topic
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  if (!questions.length) {
    return <h1>No Quiz Found for "{topic}"</h1>; // Handle invalid topic
  }

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleTimeUp = () => {
    setShowScore(true);
  };

  return (
    <div className="quiz-page">
      <h1>{topic} Quiz</h1>
      {!showScore ? (
        <>
          <Timer duration={60} onTimeUp={handleTimeUp} />
          <div className="question-box">
            <p>{questions[currentQuestion].question}</p>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleOptionClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="score-box">
          <h2>Your Score: {score}/{questions.length}</h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
