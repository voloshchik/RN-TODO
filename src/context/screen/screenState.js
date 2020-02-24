import React from "react";
import { View, Text } from "react-native";
import { ScreenContext } from "./screenContext";
import { screenReducer } from "./screenReducer";
import { CHANGE_SCREEN } from "../types";

const ScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, null);
  const changeScreen = id => dispatch({ type: CHANGE_SCREEN, payload: id });
  return (
    <ScreenContext.Provider
      value={{
        changeScreen,
        todoId: state
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenState;
