import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Navbar from "./components/Navbar";
import { THEME } from "./theme";
import MainScreen from "./screens/MainScreen";
import TodoSreen from "./screens/TodoScreen";
import { TodoContext } from "./context/todo/todoContext";
import { ScreenContext } from "./context/screen/screenContext";

const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  let content = <MainScreen />;

  return (
    <View style={styles.wrapper}>
      <Navbar title="Todo App!" />
      <View style={styles.container}>
        {todoId ? <TodoSreen /> : <MainScreen />}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
    flex: 1
  },
  wrapper: {
    flex: 1
  }
});
export default MainLayout;
