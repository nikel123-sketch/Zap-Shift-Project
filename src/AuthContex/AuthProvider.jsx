import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

// use to google---
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // state--
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register user--or-- create user-
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // singUser--or---login user
  const singUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // singOut---or--logout user---
  const singOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // singIn with Google-
  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
   // --------------------------------------------

  // auth observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // authinfo--
  const authinfo = {
    registerUser,
    singUser,
    singOut,
    singInWithGoogle,
    setLoading,
    setUser,
    user,
    loading,
  };
  return <AuthContex value={authinfo}>{children}</AuthContex>;
};

export default AuthProvider;
