import { useState } from "react";
import axios from "axios";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about selling licenses." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const suggested = [
    "How do I sell my license?",
    "How fast do I get paid?",
    "Is SoftSell secure?",
  ];

  const sendMessage = async (text) => {
    const newMessages = [...messages, { sender: "user", text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            model: "openai/gpt-3.5-turbo", 
            messages: [
            { role: "system", content: "You are a helpful assistant for license resale platform called SoftSell." },
            { role: "user", content: text },
            ],
        },
        {
            headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "HTTP-Referer": "http://localhost:5173", 
            "Content-Type": "application/json",
            },
        }
      );

      const reply = response.data.choices[0].message.content.trim();
      setMessages([...newMessages, { sender: "bot", text: reply }]);
    } catch (err) {
      console.error("OpenAI Error →", err.response?.data || err.message);
      setMessages([
        ...newMessages,
        {
          sender: "bot",
          text: "Sorry, I'm currently unavailable. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col border border-gray-300 dark:border-gray-600">
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <h4 className="font-semibold">SoftSell AI Chat</h4>
            <button onClick={() => setOpen(false)} className="text-white text-lg">✕</button>
          </div>
          <div className="flex-1 p-3 h-64 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-sm p-2 rounded ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-blue-800 self-end ml-auto"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="px-3 pb-2">
            {suggested.map((q, i) => (
              <button
                key={i}
                className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 dark:hover:bg-gray-700"
                onClick={() => sendMessage(q)}
              >
                {q}
              </button>
            ))}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim()) sendMessage(input.trim());
              }}
              className="flex mt-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 p-2 border rounded-l bg-white dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 rounded-r"
                disabled={loading}
              >
                {loading ? "..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-md hover:bg-blue-700 transition-all"
        >
          💬
        </button>
      )}
    </div>
  );
}
