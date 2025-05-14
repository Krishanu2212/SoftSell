import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 Ask me anything about SoftSell." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  const suggested = [
    "How do I sell my license?",
    "How fast do I get paid?",
    "Is SoftSell secure?"
  ];

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
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
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // Replace with real key
            "HTTP-Referer": "http://localhost:5173", // Or your deployed domain
            "Content-Type": "application/json"
          }
        }
      );

      const reply = response.data.choices[0].message.content.trim();
      setMessages([...newMessages, { sender: "bot", text: reply }]);
    } catch (err) {
      console.error("OpenRouter Error:", err.response?.data || err.message);
      setMessages([
        ...newMessages,
        {
          sender: "bot",
          text: "Sorry, I couldn’t respond right now. Please try again later."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 sm:w-96 max-h-[85vh] bg-white dark:bg-gray-900 shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 rounded-t-xl flex justify-between items-center">
            <h4 className="font-semibold">SoftSell AI Chat</h4>
            <button onClick={() => setOpen(false)} className="text-white text-xl">×</button>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 dark:bg-gray-800">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-100 dark:bg-blue-600 text-right ml-auto text-blue-900 dark:text-white"
                    : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-sm italic text-gray-500 dark:text-gray-400">AI is typing...</div>
            )}
          </div>

          {/* Suggested */}
          <div className="px-3 pb-2">
            <div className="flex flex-wrap gap-2 mb-2">
              {suggested.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(q)}
                  className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
              >
                {loading ? "..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          💬
        </button>
      )}
    </div>
  );
}
