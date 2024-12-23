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
import axios from "axios";

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
      if (currentUser?.email) {
        setUser(currentUser);
        // generate token
        axios
          .post(
            "http://localhost:5000/jwt",
            // "https://study-shelf-server.vercel.app/jwt",
            { email: currentUser?.email },
            { withCredentials: true }
          )
          .then((res) => {
            // console.log(res.data);
          });
      } else {
        setUser(null);
        // clear cookie from browser upon logout
        axios
          .post(
            "http://localhost:5000/logout",
            // "https://study-shelf-server.vercel.app/logout",
            {},
            { withCredentials: true }
          )
          .then((res) => {
            // console.log(res.data);
          });
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
