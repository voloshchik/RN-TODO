import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Todo = ({ todo, onRemove }) => {
  const longPressHandler = () => {
    onRemove(todo.id);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        console.log("onPress", todo.id);
      }}
      onLongPress={longPressHandler}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10
  }
});
export default Todo;

// import React from 'react'
// import { Text, View, StyleSheet } from 'react-native'

// export const Todo = ({ todo }) => {
//   return (
//     <View style={styles.todo}>
//       <Text>{todo.title}</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   todo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#eee',
//     borderRadius: 5,
//     marginBottom: 10
//   }
// })
