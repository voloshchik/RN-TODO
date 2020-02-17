import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import  Navbar  from "./src/Navbar";
import  AddTodo  from "./src/AddTodo";
import  Todo  from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "test" },
    { id: 2, title: "test" },
    { id: 3, title: "test" },
    { id: 4, title: "test" },
    { id: 5, title: "test" },
    { id: 6, title: "test" },
    { id: 7, title: "test" }
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

  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} />}
        />
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
