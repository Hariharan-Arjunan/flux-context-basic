import React, { useContext, useReducer, createContext } from "react";
import UserContextReducer from "./UserContextReducer";
import { INITIAL_STATE } from "./UserContextActionCreators";

const UserContext = createContext(INITIAL_STATE);
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children, updates = INITIAL_STATE }) => {
  const [state, dispatch] = useReducer(UserContextReducer, updates);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };
