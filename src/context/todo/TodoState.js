import React, { useReducer } from "react";
import { View, Text } from "react-native";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";

const TodoState = ({ children }) => {
  const initialtate = {
    todos: [
      {
        id: "1",
        title: "починить поло!!!!"
      }
    ]
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todos: state.todos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
