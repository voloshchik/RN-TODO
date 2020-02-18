import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoSreen from "./src/screens/TodoScreen";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "починить поло!!!!"
    },
    {
      id: "2",
      title: "Написать программу!!!!"
    }
  ]);
  const [todoId, setTodiId] = useState("2");
  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ]);
  };
  const removeTodo = id => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== id);
    });
  };
  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={id => {
        setTodiId(id);
      }}
    />
  );
  const selectTodo = todos.find(todo => todo.id === todoId);
  if (todoId) {
    content = <TodoSreen goBack={() => setTodiId(null)} todo={selectTodo} />;
  }
  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
