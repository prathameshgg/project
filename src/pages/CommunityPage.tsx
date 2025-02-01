import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { format } from 'date-fns';
import { 
  Search, 
  Send, 
  Hash, 
  Users, 
  Settings, 
  MessageSquare,
  Crown,
  Shield,
  User
} from 'lucide-react';
import styles from '../styles/CommunityPage.module.css';

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Message {
  id: string;
  text: string;
  userId: string;
  timestamp: Date;
  roomId: string;
}

interface Room {
  id: string;
  name: string;
  description: string;
  active_users: number;
}

interface User {
  id: string;
  username: string;
  avatar_url: string;
  role: string;
  created_at: string;
}

const CommunityPage: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [rooms] = useState([
    { id: 'general', name: 'General Chat' },
    { id: 'support', name: 'Mental Health Support' },
    { id: 'selfcare', name: 'Self Care Tips' },
    { id: 'events', name: 'Community Events' }
  ]);
  const [activeRoom, setActiveRoom] = useState('general');
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showUsernameModal, setShowUsernameModal] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remove or modify the authentication check
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      // Remove this redirect if you want to allow non-authenticated access
      // if (!session) {
      //   navigate('/signup');
      //   return;
      // }
    };

    checkAuth();

    // Set up real-time subscriptions
    const messagesSubscription = supabase
      .channel('messages')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
      }, (payload) => {
        setMessages(prev => [...prev, payload.new as Message]);
      })
      .subscribe();

    // Handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      messagesSubscription.unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [navigate]);

  useEffect(() => {
    // Fetch initial data
    const fetchData = async () => {
      // Fetch online users
      const { data: usersData } = await supabase
        .from('users')
        .select('*')
        .eq('online', true);
      if (usersData) {
        setUsers(usersData);
      }
    };

    fetchData();
  }, [activeRoom]);

  useEffect(() => {
    const savedUsername = localStorage.getItem('communityUsername');
    if (savedUsername) {
      setUsername(savedUsername);
      setShowUsernameModal(false);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('communityUsername', username);
      setShowUsernameModal(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      text: newMessage,
      userId: 'user123', // Temporary user ID
      timestamp: new Date(),
      roomId: activeRoom
    };

    setMessages(prev => [...prev, newMsg]);
    setNewMessage('');
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Crown size={16} className={styles.adminIcon} />;
      case 'moderator':
        return <Shield size={16} className={styles.modIcon} />;
      default:
        return <User size={16} className={styles.userIcon} />;
    }
  };

  const filteredMessages = messages.filter(msg => msg.roomId === activeRoom);

  return (
    <div className={styles.communityPage}>
      {showUsernameModal && (
        <div className={styles.usernameModal}>
          <form onSubmit={handleUsernameSubmit}>
            <h2>Enter Your Name</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a display name"
              required
            />
            <button type="submit">Join Community</button>
          </form>
        </div>
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isMobile ? styles.mobileSidebar : ''}`}>
        <div className={styles.sidebarHeader}>
          <h2>Chatrooms</h2>
          <Search size={20} />
        </div>
        <div className={styles.roomList}>
          {rooms.map(room => (
            <button
              key={room.id}
              className={`${styles.roomButton} ${activeRoom === room.id ? styles.active : ''}`}
              onClick={() => setActiveRoom(room.id)}
            >
              <Hash size={20} />
              <span>{room.name}</span>
              <span className={styles.userCount}>{room.active_users}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className={styles.chatArea}>
        <div className={styles.chatHeader}>
          <div className={styles.roomInfo}>
            <Hash size={24} />
            <h2>{rooms.find(r => r.id === activeRoom)?.name || 'Select a Room'}</h2>
          </div>
          <div className={styles.headerActions}>
            <Users size={24} />
            <Settings size={24} />
          </div>
        </div>

        {loading ? (
          <div className={styles.loading}>
            Loading messages...
          </div>
        ) : (
          <div className={styles.messageList}>
            {filteredMessages.map(message => (
              <div key={message.id} className={styles.message}>
                <div className={styles.messageHeader}>
                  <span className={styles.userId}>User {message.userId}</span>
                  <span className={styles.timestamp}>
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className={styles.messageText}>{message.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        <form onSubmit={handleSendMessage} className={styles.messageForm}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className={styles.messageInput}
          />
          <button type="submit" className={styles.sendButton}>
            <Send size={20} />
          </button>
        </form>
      </main>

      {/* Users Sidebar */}
      <aside className={`${styles.usersSidebar} ${isMobile ? styles.mobileUsersSidebar : ''}`}>
        <div className={styles.sidebarHeader}>
          <h2>Online Users</h2>
          <MessageSquare size={20} />
        </div>
        <div className={styles.userSearch}>
          <Search size={16} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.userList}>
          {users
            .filter(user => 
              user.username.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(user => (
              <button
                key={user.id}
                className={styles.userButton}
                onClick={() => setSelectedUser(user)}
              >
                <img
                  src={user.avatar_url}
                  alt={user.username}
                  className={styles.avatar}
                />
                <span>{user.username}</span>
                {getRoleIcon(user.role)}
              </button>
            ))}
        </div>
      </aside>

      {/* User Profile Modal */}
      {selectedUser && (
        <div className={styles.modal} onClick={() => setSelectedUser(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <img
              src={selectedUser.avatar_url}
              alt={selectedUser.username}
              className={styles.modalAvatar}
            />
            <h2>{selectedUser.username}</h2>
            <p>Role: {selectedUser.role}</p>
            <p>Joined: {format(new Date(selectedUser.created_at), 'PP')}</p>
            <button className={styles.messageButton}>
              <MessageSquare size={16} />
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityPage;