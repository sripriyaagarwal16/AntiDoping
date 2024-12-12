import React, { useState } from "react";
import { ChatBot } from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI("AIzaSyBBZAWNNxD_7PrQX-dllGs60SjvSVnav3Y");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Custom ChatBot Theme
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
    component: <BotResponse />,
    asMessage: true,
    trigger: "userInput",
  },
];

// Custom Component for API Response
const BotResponse = ({ steps }) => {
  const [botMessage, setBotMessage] = useState("Thinking...");
  const userMessage = steps["userInput"].value;

  React.useEffect(() => {
    const fetchGeminiResponse = async () => {
      try {
        const result = await model.generateContent(userMessage);
        const response = await result.response;
        setBotMessage(response.text());
      } catch (error) {
        console.error("Error fetching Gemini response:", error);
        setBotMessage("Oops! Something went wrong. Please try again.");
      }
    };

    fetchGeminiResponse();
  }, [userMessage]);

  return <div>{botMessage}</div>;
};

// Main App Component
const chat = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <ChatBot
          steps={steps}
          headerTitle="Chat Support"
          floating={true}
        />
      </div>
    </ThemeProvider>
  );
};

export default chat;
