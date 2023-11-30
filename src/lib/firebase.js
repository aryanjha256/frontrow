import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBf0SV5OqZXjxE1k3QsLLIRGf4nMsLg3EI",
  authDomain: "frontrow-chat.firebaseapp.com",
  projectId: "frontrow-chat",
  storageBucket: "frontrow-chat.appspot.com",
  messagingSenderId: "826950714133",
  appId: "1:826950714133:web:0849334059ec9d8f7ddf1c",
};

const app = initializeApp(firebaseConfig);

export default app;
