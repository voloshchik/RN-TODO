import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TodoSreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="Назад" onPress={goBack} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default TodoSreen;
