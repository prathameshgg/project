import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X } from 'lucide-react';
import styles from '../styles/ChatBot.module.css';
import OpenAI from "openai";

const ChatBot = () => {
  const [messages, setMessages] = useState<Array<{ content: string; isUser: boolean }>>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: import.meta.env.VITE_DEEPSEEK_API_KEY,
    defaultHeaders: {
      "Authorization": `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
      "HTTP-Referer": window.location.href,
      "X-Title": "SereniLink",
    },
    dangerouslyAllowBrowser: true
  });

  console.log('API Key:', import.meta.env.VITE_DEEPSEEK_API_KEY?.substring(0, 5) + '...');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        content: "I'm SereniLink Assistant. How can I help you today?",
        isUser: false
      }]);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (isLoading) return;

    // Create temporary message array
    const newMessages = [...messages, { content: input.trim(), isUser: true }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const completion = await openai.chat.completions.create({
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant."
          },
          ...newMessages.map(msg => ({
            role: msg.isUser ? "user" : "assistant",
            content: msg.content
          }))
        ]
      });

      setMessages(prev => [
        ...prev,
        { content: completion.choices[0].message.content || "", isUser: false }
      ]);
    } catch (error) {
      console.error('API Error:', error);
      setMessages(prev => [
        ...prev,
        { content: 'Sorry, I encountered an error. Please try again.', isUser: false }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles.chatContainer} ${isOpen ? styles.open : ''}`}>
      <button 
        className={styles.chatToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </button>
      
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <h3>SereniLink Assistant</h3>
            <p>How can I help you today?</p>
          </div>
          
          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${msg.isUser ? styles.user : styles.bot}`}>
                {msg.content}
              </div>
            ))}
            {isLoading && <div className={styles.loading}>Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className={styles.inputArea}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 