import { getAuth, signInWithEmailAndPassword } from './firebase';

export function isSignedIn() {
  const auth = getAuth();
  return Boolean(auth.currentUser);
}
export function signOut() {
  const auth = getAuth();
  auth.signOut();
}

export async function signInWithPassword(email, password) {
  const auth = getAuth();

  try {
    // https://firebase.google.com/docs/auth/web/start#web-version-9_2
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    // user invalid credentials
    return false;
  }
}
