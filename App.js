import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "починить поло!!!!"
    }
  ]);

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

  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>
        <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
