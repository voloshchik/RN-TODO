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
import { Http } from "../../http";

const TodoState = ({ children }) => {
  const initialState = {
    todos: [],

    loading: false,
    error: null
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreen } = useContext(ScreenContext);

  const addTodo = async title => {
    clearError();
    // const response = await fetch(
    //   "https://rn-todo-app-c5d40.firebaseio.com/todos.json",
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ title })
    //   }
    // );
    // const data = await response.json();333
    try {
      const data = await Http.post(
        "https://rn-todo-app-c5d40.firebaseio.com/todos.json",
        { title }
      );
      dispatch({ type: ADD_TODO, title, id: data.name });
    } catch (e) {
      showError("Что-то пошло не так");
    }
  };

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
          onPress: async () => {
            // await fetch(
            //   `https://rn-todo-app-c5d40.firebaseio.com/todos/${id}.json`,
            //   {
            //     method: "DELETE",
            //     headers: { "Content-Type": "application/json" }
            //   }
            // );
            try {
              await Http.delete(
                `https://rn-todo-app-c5d40.firebaseio.com/todos/${id}.json`
              );
            } catch (e) {}

            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id });
          }
        }
      ],
      { cancelable: false }
    );
  };
  const updateTodo = async (id, title) => {
    clearError();
    try {
      // await fetch(`https://rn-todo-app-c5d40.firebaseio.com/todos/${id}.json`, {
      //   method: "PATCH",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ title })
      // });
      await Http.patch(
        `https://rn-todo-app-c5d40.firebaseio.com/todos/${id}.json`,
        { title }
      );
      dispatch({ type: UPDATE_TODO, id, title });
    } catch (e) {
      showError("Что-то пошло не так...");
      console.log("error", e);
    }
  };
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const showError = error => dispatch({ type: SHOW_ERROR, error });
  const clearError = () => dispatch({ type: CLEAR_ERROR });
  const fetchTodos = async () => {
    showLoader();
    clearError();
    try {
      // const response = await fetch(
      //   "https://rn-todo-app-c5d40.firebaseio.com/todos.json",
      //   {
      //     method: "GET",
      //     headers: { "Content-Type": "application/json" }
      //   }
      // );
      // const data = await response.json();
      const data = await Http.get(
        "https://rn-todo-app-c5d40.firebaseio.com/todos.json"
      );
      console.log("data", data);
      const todos = Object.keys(data).map(key => ({ ...data[key], id: key }));
      console.log("todos", todos);
      dispatch({ type: FETCH_TODOS, todos });
    } catch (e) {
      showError("Что-то пошло не так...");
      console.log("error", e);
    } finally {
      hideLoader();
    }
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos,
        loading: state.loading,
        error: state.error
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
