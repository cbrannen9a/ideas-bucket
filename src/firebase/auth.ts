import app from "./firebase";
import { firestoreSet } from "./firestore";
import { COLLECTIONS } from "../constants/collections";

export const onAuthStateChange = (
  callback: (value: {
    user: firebase.User | null;
    initializing: boolean;
  }) => void
) => {
  return app.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ user: user, initializing: false });
    } else {
      callback({ user: null, initializing: false });
    }
  });
};

export const requestLogin = async (username: string, password: string) => {
  await app.auth().signInWithEmailAndPassword(username, password);
};

export const requestLogout = async () => {
  await app.auth().signOut();
};

export const requestSignUp = async ({
  email,
  password,
  lastName,
  firstName,
}: {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
}) => {
  const result = await app
    .auth()
    .createUserWithEmailAndPassword(email, password);

  if (result.user && result.user.uid) {
    await firestoreSet({
      collection: COLLECTIONS.USERS,
      docId: result.user.uid,
      value: { email: result.user?.email, firstName, lastName },
    });
  }
};
