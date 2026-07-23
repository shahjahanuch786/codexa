import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSSd_XMpIx1Q2j3st8_3tTOsUNEwTCDDQ",
  authDomain: "codexa-ai-5edfb.firebaseapp.com",
  projectId: "codexa-ai-5edfb",
  storageBucket: "codexa-ai-5edfb.firebasestorage.app",
  messagingSenderId: "810231738990",
  appId: "1:810231738990:web:7cd71a21e3cafd66176c7f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);