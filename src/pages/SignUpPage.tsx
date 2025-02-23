import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import styles from '../styles/SignUpPage.module.css';

const SignUpPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get('plan');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('http://localhost:8000/api/accounts/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate('/');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGoogleSignup = async () => {
    setError(null);
    try {
      await signUpWithGoogle();
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message || 'Google signup failed');
    }
  }

  return (
    <div className={`${styles.container} ${isSignUp ? styles.active : ''}`}>
      <div className={styles.formContainer}>
        <div className={`${styles.formSection} ${styles.signUp}`}>
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icon}><Mail /></a>
              <a href="#" className={styles.icon}><Facebook /></a>
              <a href="#" className={styles.icon}><Github /></a>
              <a href="#" className={styles.icon}><Linkedin /></a>
            </div>
            <span>or use your email for registration</span>
            <input 
              type="text" 
              placeholder="Name" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className={`${styles.formSection} ${styles.signIn}`}>
          <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icon}><Mail /></a>
              <a href="#" className={styles.icon}><Facebook /></a>
              <a href="#" className={styles.icon}><Github /></a>
              <a href="#" className={styles.icon}><Linkedin /></a>
            </div>
            <span>or use your email and password</span>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#" className={styles.forgotPassword}>Forgot Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>

      <div className={styles.toggleContainer}>
        <div className={styles.toggle}>
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all features</p>
            <button 
              className={styles.hidden}
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </button>
          </div>
          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>Create Account</h1>
            <p>Register with your personal details to use all features</p>
            {selectedPlan && (
              <p className={styles.planInfo}>
                Selected Plan: {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}
              </p>
            )}
            <button 
              className={styles.hidden}
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;