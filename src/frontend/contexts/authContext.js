import { useReducer, createContext, useContext } from "react";
import { authReducer } from "../reducers/index";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: {
      firstName: null,
      lastName: null,
      email: null,
      userName: null,
      password: null,
    },
    error: null,
    token: null,
  });
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
