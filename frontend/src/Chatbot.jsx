import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(true); // Track whether the chatbot is expanded or collapsed

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { user: "User", message: input };
      setMessages([...messages, userMessage]);
      setInput("");

      const response = await axios.post(
        "https://portfolio-backend-tbwd.onrender.com/api/chat",
        {
          inp: input,
        }
      );
      const botMessage = { user: "Bot", message: response.data.answer };
      setMessages([...messages, userMessage, botMessage]);
    }
  };

  // Toggle expand/collapse
  const toggleChatbot = () => {
    setIsExpanded((prevState) => !prevState);
  };

  function handleMessage(message) {
    console.log(message);
    const [subheading, content] = message.split(":");
    console.log(subheading);
    console.log(content);
    if (!content) {
      return "No content available after colon";
    }

    // Split the content by semicolon and trim each part
    const sections = content.split(";").map((section) => section.trim());

    // Return a formatted string with the subheading and sections
    return (
      <div>
        <strong>{subheading}:</strong>
        <ul>
          {sections.map((section, index) => (
            <li key={index}>{section}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      className={`fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ${
        isExpanded ? "h-auto" : "h-16"
      }`}
    >
      {!isExpanded ? (
        <div>
          <strong> Resume Chatbot</strong>
        </div>
      ) : (
        ""
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChatbot}
        className="absolute top-2 right-2 text-gray-500 bg-gray-200 p-1 rounded-full hover:bg-gray-300"
      >
        {isExpanded ? "−" : "＋"}
      </button>

      {isExpanded && (
        <div className="flex flex-col space-y-4 max-h-[400px] overflow-y-auto">
          {/* Title */}
          <div className="text-center text-xl font-bold text-gray-700">
            Resume Chatbot
          </div>

          {/* Display messages */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.user === "User" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`bg-${
                  msg.user === "User" ? "blue" : "gray"
                }-200 p-3 rounded-lg max-w-xs`}
              >
                <strong>{msg.user}:</strong>{" "}
                {msg.user === "Bot" ? handleMessage(msg.message) : msg.message}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Input field */}
      {isExpanded && (
        <div className="flex items-center space-x-2 mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ask about my resume"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
