import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [typeLogIn, setTypeLogIn] = useState("Sign In");
  function toggleAuthType(e) {
    setTypeLogIn(e.target.getAttribute("auth"));
  }

  return (
    <AuthContext.Provider value={{ typeLogIn, toggleAuthType }}>
      {children}
    </AuthContext.Provider>
  );
};
