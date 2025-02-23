import { doc, setDoc } from 'firebase/firestore';

import { auth } from './firebaseConfig';
export async function signUp(
  email: string,
  password: string,
  username: string
): Promise<void> {
  try {
    // Create a user using Firebase Authentication.
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // This is the newly created user.
    const user = userCredential.user;

    // Store additional details within Firestore using the user's uid as the document ID.
    await setDoc(doc(db, 'users', user.uid), {
      email,
      username,
      createdAt: new Date()
    });

    console.log('User signed up and data stored in Firestore!');
  } catch (error: any) {
    console.error('Signup error:', error.message);
    throw error;
  }
}

 