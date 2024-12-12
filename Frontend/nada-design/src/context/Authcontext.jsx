import { createContext, useState, useContext, useEffect } from "react"; // <-- Import useContext here

// Create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isPlayer, setIsPlayer] = useState(false);
  const [isInvestigator, setIsInvestigator] = useState(false);
  const [isWhistleblower, setIsWhistleblower] = useState(false);


  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "Player") {
        setIsPlayer(true);
        setIsInvestigator(false);
        setIsWhistleblower(false);
    } else if (role === "Investigator") {
        setIsInvestigator(true);
        setIsWhistleblower(false);
        setIsPlayer(false);

    }
    else{
        setIsInvestigator(false);
        setIsWhistleblower(true);
        setIsPlayer(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isPlayer, isInvestigator,isWhistleblower }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);  // <-- Correctly using useContext
};
