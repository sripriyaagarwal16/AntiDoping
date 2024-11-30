// src/data/Questions.jsx
import './question.css';


export const quizData = [
  {
    id: "intro",
    topic: "Introduction to Anti-Doping",
    background: "/assets/intro.jpg",
    questions: [
      {
        question: "What is the purpose of anti-doping regulations?",
        options: [
          "Promote fair play",
          "Encourage doping",
          "Increase profits",
          "Support cheating",
        ],
        answer: "Promote fair play",
      },
      {
        question: "Which organization is responsible for international anti-doping efforts?",
        options: [
          "WADA",
          "FIFA",
          "IOC",
          "UEFA",
        ],
        answer: "WADA",
      },
    ],
  },
  {
    id: "health",
    topic: "Health Risks of Doping",
    background: "/assets/health.jpg",
    questions: [
      {
        question: "What is a major health risk of doping?",
        options: [
          "Improved health",
          "Organ failure",
          "Increased focus",
          "Better stamina",
        ],
        answer: "Organ failure",
      },
      {
        question: "Which system is most commonly affected by steroid use?",
        options: [
          "Digestive system",
          "Nervous system",
          "Endocrine system",
          "Respiratory system",
        ],
        answer: "Endocrine system",
      },
    ],
  },
];