import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);

if (onAuthStateChanged(auth, (user) => user)) {
  console.log("User is signed in");
} else {
  console.log("No user is signed in");
}
export default auth;
