import { getAuth, signInWithEmailAndPassword } from "./firebase";

export function isSignedIn() {
  const auth = getAuth();
  return Boolean(auth.currentUser);
}

// To do: create Log out btn and (onClick{signOut} and redirect to home page)
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
  }
  catch (error) {
    // user invalid credentials
    return false;
  }

  // TODO: Save the response somewhere, so we can access it when sending the other requests.
  // TODO: Create a function to remove that variable, as a sign out function
  // TODO: Create a function that helps to check if the user is signed in
  // TODO: Return a response so we know if the user signed in
}
