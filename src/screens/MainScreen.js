import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {
  if (todos.length === 0) {
    return <Text>ddddd</Text>;
  }
  let content = (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
      )}
    />
  );
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};
const styles = StyleSheet.create({});
export default MainScreen;
