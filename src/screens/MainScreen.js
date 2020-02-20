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
      <View style={styles.imgWrep}>
        <Image
          style={styles.image}
          source={require("../../assets/no-items.png")}
        />
        {/* <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          }}
        /> */}
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
const styles = StyleSheet.create({
  imgWrep: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 300
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});
export default MainScreen;
