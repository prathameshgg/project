import { 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './config';

// Email/Password signup
export const signUpWithEmail = async (email: string, password: string, username: string) => {
  try {
    // Create auth user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store additional user data in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      username,
      email,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    });

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Google signup
export const signUpWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Store user data in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      username: user.displayName,
      email: user.email,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      photoURL: user.photoURL
    }, { merge: true }); // merge: true will update existing documents

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// GitHub signup
export const signUpWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    await setDoc(doc(db, 'users', user.uid), {
      username: user.displayName,
      email: user.email,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      photoURL: user.photoURL
    }, { merge: true });

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Facebook signup
export const signUpWithFacebook = async () => {
  try {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    await setDoc(doc(db, 'users', user.uid), {
      username: user.displayName,
      email: user.email,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      photoURL: user.photoURL
    }, { merge: true });

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}; 