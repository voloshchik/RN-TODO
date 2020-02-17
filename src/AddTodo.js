import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("дело не можент быть пустым");
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="Бяйго Женя"
        onChangeText={text => setValue(text)}
        value={value}
      />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomColor: "#3949ab",
    borderBottomWidth: 2
  }
});
export default AddTodo;
