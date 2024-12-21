import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // create user
  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user
  const updateUser = (updatedInfo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, updatedInfo);
  };

  // login with GOOGLE
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // login user
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out user
  const logoutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoader(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authDetails = {
    user,
    setUser,
    loader,
    registerUser,
    updateUser,
    loginUser,
    logoutUser,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authDetails}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
