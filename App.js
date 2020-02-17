import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import Navbar from "./src/Navbar";
import AddTodo from "./src/AddTodo";
import Todo from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: " поченить поло"
    },
    {
      id: "1",
      title: " поченить поло"
    },
    {
      id: "2",
      title: " поченить поло"
    },
    {
      id: "3",
      title: " поченить поло"
    },
    {
      id: "4",
      title: " поченить поло"
    }
  ]);
  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title
    };
    setTodos(prev => [...prev, newTodo]);
  };
  return (
    <ScrollView>
      <Navbar title="Todo App!" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map(todo => {
            // Alert.alert(todo.id);
            return <Todo todo={todo} key={todo.id} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});
