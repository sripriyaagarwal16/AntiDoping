import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import ComplaintPage from "./pages/Complaintpage";
import Home from "./pages/Home";
import About from "./pages/About";
import Player from "./pages/Player";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Assesment from "./pages/Assesment";
import HandBook from "./pages/HandBook";
import Quiz from "./components/Quiz/Quiz";
import TopicList from "./components/Quiz/TopicList";
import Articles from "./pages/Article";
import VideosSection from "./pages/Videossection";
import Whistleblower from "./pages/Whistleblower";
import Prevyeardata from "./pages/Prevyeardata";
import Dashboard from "./pages/Dashboard";
import VotingPage from "./components/votingsystem/voting";
import PerformanceComparison from "./components/PerformanceComparisons/PerformanceComparisons";
import AncientPage from "./components/Ancientpage/ancientpage";
import Antidoping from "./pages/antidopingvalues";
import TrainingAndDietPractices from "./pages/Traininganddiet";
import Timeline from "./pages/Timeline";
import Inspiration from "./pages/Inspiration";
import Health from "./components/Healthrecommedation/healthrec";
import Admin from "./pages/Admin";
import Analyst from "./pages/analyst";
import Progress from './components/progresslog/Progress'
import Investigator from "./pages/Investigator";
import Comparison from "./components/worldcomparison/worldcomparison";
import Assesment_two from "./pages/Assesment2";
// import PlayerData from "./pages/playerdata";
import "./App.css"; // Include CSS for chatbot and floating button
 
const genAI = new GoogleGenerativeAI("AIzaSyBBZAWNNxD_7PrQX-dllGs60SjvSVnav3Y");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Custom Component for API Response
const useGeminiResponse = (userMessage) => {
  const [response, setResponse] = React.useState("Thinking...");

  React.useEffect(() => {
    let isMounted = true; // To prevent state updates on unmounted components
    const fetchGeminiResponse = async () => {
      try {
        const result = await model.generateContent(userMessage);
        const geminiResponse = await result.response.text();
        if (isMounted) setResponse(geminiResponse);
      } catch (error) {
        console.error("Error fetching Gemini response:", error);
        if (isMounted) setResponse("Oops! Something went wrong. Please try again.");
      }
    };

    fetchGeminiResponse();

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [userMessage]);

  return response;
};

const BotResponse = ({ steps }) => {
  const userMessage = steps["userInput"].value;
  const botMessage = useGeminiResponse(userMessage);

  return <div>{botMessage}</div>;
};

// ChatBot Theme
const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "#3b82f6",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#3b82f6",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// Steps for ChatBot interaction
const steps = [
  {
    id: "1",
    message: "Hi! I’m your virtual assistant. How can I help you today?",
    trigger: "userInput",
  },
  {
    id: "userInput",
    user: true,
    trigger: "fetchResponse",
  },
  {
    id: "fetchResponse",
    component: <BotResponse />,  // Display bot response
    asMessage: true,  // Render as a message
    trigger: "userInput",  // After a response, wait for user input again
  },
];

const App = () => {
  const [showChatBot, setShowChatBot] = useState(false); // Toggle ChatBot visibility

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  return (
    <Router>
      <Navbar /> {/* Assuming you want the Navbar to be always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/player" element={<Player />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assessment/:playerId" element={<Assesment />} />
        <Route path="/handbook" element={<HandBook />} />
        <Route path="/collaborate" element={<Dashboard />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/videos" element={<VideosSection />} />
        <Route path="/whistleblower" element={<Whistleblower />} />
        <Route path="/prevdata" element={<Prevyeardata />} />
        <Route path="/vote/:id" element={<VotingPage />} />
        <Route path="/quiz" element={<TopicList />} />
        <Route path="/quiz/:topicId" element={<Quiz />} />
        <Route path="/performancecomparison" element={<PerformanceComparison />} />
        <Route path="/ancientpage" element={<AncientPage />} />
        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/trainingdiet" element={<TrainingAndDietPractices />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/antidoping" element={<Antidoping />} />
        <Route path="/health" element={<Health />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/analyst" element={<Analyst />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/investigator" element={<Investigator />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/assesment_two" element={<Assesment_two />} />
        {/* <Route path="/playerdata" element={<PlayerData />} /> */}

        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-xl">Page not found</p>
              </div>
            </div>
          }
        />
      </Routes>

      {/* ChatBot Icon Button */}
      <div>
        <button className="chatbot-icon" onClick={toggleChatBot}>
          💬
        </button>
        {showChatBot && (
          <div className="chatbot-container">
            <button className="chatbot-close" onClick={toggleChatBot}>
              ✖
            </button>
            <ThemeProvider theme={theme}>
              <ChatBot steps={steps} headerTitle="Chat Support" />
            </ThemeProvider>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
