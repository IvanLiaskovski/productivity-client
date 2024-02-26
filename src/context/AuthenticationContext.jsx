import React, { createContext, useContext, useState, useEffect } from "react";
import { useSignUpMutation } from "../api/user/userApi";
import { useLogInMutation } from "../api/user/userApi";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    Cookies.get("productivity-token") !== "null",
  );
  const [isDemo, setIsDemo] = useState(
    JSON.parse(Cookies.get("productivity-demo") || "false"),
  );
  const [errors, setErrors] = useState([]);

  const [signUp] = useSignUpMutation();
  const [logIn] = useLogInMutation();

  const signUpUser = async (userData) => {
    await signUp(userData)
      .unwrap()
      .then((data) => {
        if (data) {
          setErrors([]);
          loginUser(data);
        }
      })
      .catch((err) => {
        const errors = err.data.response.errors[0].errorsPretty;
        setErrors(errors);
      });
  };

  const loginUser = async (userData) => {
    await logIn(userData)
      .unwrap()
      .then(() => {
        setUser(userData);
        setIsDemo(false);
        setErrors([]);
        Cookies.set("productivity-demo", false);
      })
      .catch((err) => {
        if (err.status === 401) {
          setErrors([{ message: "Invalid email or password" }]);
        }
      });
  };

  const logoutUser = () => {
    setUser(null);
    Cookies.remove("productivity-token");
    window.location = "/user/login";
  };

  const tryDemo = () => {
    setIsDemo(true);
    Cookies.set("productivity-demo", true);
    Cookies.set("productivity-token", null);
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
        errors,
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
  }, []);

  return { user, isDemo };
};
