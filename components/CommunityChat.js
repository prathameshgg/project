import { useState, useEffect, useRef } from 'react';

const CommunityChat = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const ws = useRef(null);
  const chatEndRef = useRef(null);

  // Initialize WebSocket and localStorage check
  useEffect(() => {
    const savedUsername = localStorage.getItem('communityUsername');
    if (savedUsername) {
      setUsername(savedUsername);
    }

    ws.current = new WebSocket('wss://your-websocket-server-endpoint');
    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === 'message') {
        setMessages(prev => [...prev, data.payload]);
      } else if (data.type === 'users') {
        setActiveUsers(data.payload);
      }
    };

    return () => ws.current.close();
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle username submission
  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('communityUsername', username);
  };

  // Send message through WebSocket
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      user: username,
      content: message,
      timestamp: new Date().toLocaleTimeString(),
    };

    ws.current.send(JSON.stringify({
      type: 'message',
      payload: newMessage
    }));

    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Username Modal */}
      {!username && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <form onSubmit={handleUsernameSubmit} className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">Enter Your Name</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2 w-full mb-4"
              required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Join Chat
            </button>
          </form>
        </div>
      )}

      {/* Main Chat Interface */}
      {username && (
        <div className="flex h-screen">
          {/* Active Users List */}
          <div className="w-1/4 bg-white border-r p-4 hidden md:block">
            <h3 className="text-lg font-semibold mb-4">Active Users ({activeUsers.length})</h3>
            <ul>
              {activeUsers.map((user) => (
                <li key={user.id} className="py-2 px-4 hover:bg-gray-50 rounded">
                  {user.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b bg-white">
              <h1 className="text-xl font-semibold">Community Chat</h1>
              <p className="text-gray-600">Welcome, {username}! Feel free to start chatting.</p>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
              {messages.map((msg, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-semibold">{msg.user}</span>
                    <span className="text-sm text-gray-500">{msg.timestamp}</span>
                  </div>
                  <p className="text-gray-800">{msg.content}</p>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Message Input */}
            <form onSubmit={sendMessage} className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setIsTyping(!!e.target.value);
                  }}
                  placeholder="Type a message..."
                  className="flex-1 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Send
                </button>
              </div>
              {isTyping && <p className="text-sm text-gray-500 mt-2">Someone is typing...</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityChat; 