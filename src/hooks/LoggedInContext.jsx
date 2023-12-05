import { createContext, useState, useContext } from "react";

const LoggedInContext = createContext();

export const useLoggedInContext = () => useContext(LoggedInContext);

export const LoggedInProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userAuth, setUserAuth] = useState({
    userID: "",
    tempAuthID: "",
  });

  const setLogIn = (bool) => {
    setLoggedIn(bool);
  };
  const handleAuth = (auth) => {
    setUserAuth(auth);
  };
  return (
    <LoggedInContext.Provider
      value={{ loggedIn, setLogIn, userAuth, handleAuth }}
    >
      {children}
    </LoggedInContext.Provider>
  );
};
