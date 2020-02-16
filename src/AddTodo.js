import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const AddTodo = ({onSubmit}) => {
const pressHandler=()=>{
    onSubmit('Test Todo')
}
  return (
    <View style={styles.block}>
       
      <TextInput style={styles.input}  placeholder='Бяйго Женя'/>
      <Button title="Добавит" onPress={pressHandler} />
      
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:15
  },
  input: {
    width: "70%",
    padding:10,
    borderStyle: "solid",
    borderBottomColor: "#3949ab",
    borderBottomWidth:2
  }
});
export default AddTodo;
