import React, { createContext, useContext, useState, useEffect } from "react";
import { useSignUpMutation } from "../api/user/userApi";
import { useLogInMutation } from "../api/user/userApi";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isDemo, setIsDemo] = useState(false);
  const [signUp] = useSignUpMutation();
  const [logIn] = useLogInMutation();

  useEffect(() => {
    const user = Cookies.get("productivity-token");
    if (user) {
      setUser(user);
    }
  }, []);

  const signUpUser = async (userData) => {
    const { data } = await signUp(userData);
    if (data) {
      loginUser(data);
    }
  };

  const loginUser = async (userData) => {
    await logIn(userData);
    setUser(userData);
    setIsDemo(false);
    Cookies.set("productivity-token", userData);
  };

  const logoutUser = () => {
    setUser(null);
    Cookies.remove("productivity-token");
    window.location = "/user/login";
  };

  const tryDemo = () => {
    setIsDemo(true);
    window.location = "/";
  };

  const checkLogin = () => {
    if (!user && !isDemo) {
      setUser(null);
      setIsDemo(false);
      window.location = "/user/login";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signUpUser,
        loginUser,
        logoutUser,
        checkLogin,
        isDemo,
        tryDemo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useCheckAuth = () => {
  const { checkLogin, user, isDemo } = useAuth();

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return { user, isDemo };
};
