import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {
  let content = (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
      )}
    />
  );
  if (todos.length === 0) {
    content = (
      <View>
        <Text>ssssdsds</Text>
        <Image source={require('../../assets/no-items.png')} />
      </View>
    );
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};
const styles = StyleSheet.create({});
export default MainScreen;
