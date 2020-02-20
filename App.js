import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoSreen from "./src/screens/TodoScreen";
async function loadAppliction() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
  });
}
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodiId] = useState(null);
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "починить поло!!!!"
    }
  ]);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAppliction}
        onError={err => console.log(err)}
        onFinish={setIsReady(true)}
      />
    );
  }

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
    const todo = todos.find(t => t.id === id);

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
            setTodiId(null);
            setTodos(prev => {
              return prev.filter(todo => todo.id !== id);
            });
          }
        }
      ],
      { cancelable: false }
    );
  };
  const apdateTodo = (id, title) => {
    setTodos(old =>
      old.map(todo => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
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
    content = (
      <TodoSreen
        goBack={() => setTodiId(null)}
        todo={selectTodo}
        onRemove={removeTodo}
        onSave={apdateTodo}
      />
    );
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
