import React, { useReducer, useContext } from "react";
import { Alert } from "react-native";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  FETCH_TODOS
} from "../types";
import { ScreenContext } from "../screen/screenContext";

const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    todos: [],
    loading: false,
    error: null
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreen } = useContext(ScreenContext);

  const addTodo = title => dispatch({ type: ADD_TODO, title });

  const removeTodo = id => {
    const todo = state.todos.find(t => t.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы действительно хотите удалить дело "${todo.title}?" `,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Удалить",
          onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id });
          }
        }
      ],
      { cancelable: false }
    );
  };
  const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title });
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const showError = error => dispatch({ type: SHOW_ERROR, error });
  const clearError = () => dispatch({ type: CLEAR_ERROR });
  const fethTodos = todos => dispatch({ type: FETCH_TODOS, todos });
  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, removeTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
