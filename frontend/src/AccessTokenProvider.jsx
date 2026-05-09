import { useState } from "react";
import { createContext } from "react";

const AuthProvider = createContext();

function AccessTokenProvider({ children }) {
  const [AccessToken, setAccessToken] = useState("");
  return (
    <AuthProvider.Provider value={{ AccessToken, setAccessToken }}>
      {children}
    </AuthProvider.Provider>
  );
}
export default AccessTokenProvider;
export { AuthProvider };
