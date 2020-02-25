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

  // const removeTodo = id => {
  //   const todo = todos.find(t => t.id === id);

  //   Alert.alert(
  //     "Удаление элемента",
  //     `Вы действительно хотите удалить дело "${todo.title}?" `,
  //     [
  //       {
  //         text: "Cancel",
  //         style: "cancel"
  //       },
  //       {
  //         text: "Удалить",
  //         onPress: () => {
  //           setTodiId(null);
  //           setTodos(prev => {
  //             return prev.filter(todo => todo.id !== id);
  //           });
  //         }
  //       }
  //     ],
  //     { cancelable: false }
  //   );
  // };

  let content = (
    <MainScreen
    // todos={todos}
    // addTodo={addTodo}
    // removeTodo={removeTodo}
    // openTodo={changeScreen}
    />
  );
  // const selectTodo = todos.find(todo => todo.id === todoId);
  // if (todoId) {
  //   content = <TodoSreen />;
  // }
  return (
    <View>
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
    paddingVertical: 20
  }
});
export default MainLayout;
