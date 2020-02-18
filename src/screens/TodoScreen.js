import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TodoSreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" onPress={goBack} color="#757575" />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            color="#e53935"
            onPress={goBack}
            onPress={() => console.log("delete")}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "40%"
  }
});
export default TodoSreen;
