import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import styles from '../styles/SignUpPage.module.css';
import { 
  signUpWithEmail, 
  signUpWithGoogle, 
  signUpWithGithub, 
  signUpWithFacebook 
} from '../firebase/auth';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signUpWithEmail(email, password, username);
      setMessage('Signup successful!');
      setError('');
      navigate('/dashboard'); // or wherever you want to redirect after signup
    } catch (err: any) {
      setError(err.message);
      setMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      await signUpWithGoogle();
      setMessage('Signup successful via Google!');
      setError('');
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
      setMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignUp = async () => {
    setIsLoading(true);
    try {
      await signUpWithGithub();
      setMessage('Signup successful via GitHub!');
      setError('');
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
      setMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFacebookSignUp = async () => {
    setIsLoading(true);
    try {
      await signUpWithFacebook();
      setMessage('Signup successful via Facebook!');
      setError('');
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
      setMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Signup</h2>
      {message && <p className={styles.successMessage}>{message}</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      <div className={styles.socialButtons}>
        <button 
          type="button" 
          className={styles.googleButton} 
          onClick={handleGoogleSignUp}
          disabled={isLoading}
        >
          <FcGoogle size={24} style={{ marginRight: '8px' }} />
          Sign Up with Google
        </button>

        <button 
          type="button" 
          className={styles.githubButton} 
          onClick={handleGithubSignUp}
          disabled={isLoading}
        >
          <BsGithub size={24} style={{ marginRight: '8px' }} />
          Sign Up with GitHub
        </button>

        <button 
          type="button" 
          className={styles.facebookButton} 
          onClick={handleFacebookSignUp}
          disabled={isLoading}
        >
          <BsFacebook size={24} style={{ marginRight: '8px' }} />
          Sign Up with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
