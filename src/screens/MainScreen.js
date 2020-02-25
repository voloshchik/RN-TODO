import React, { useState, useEffect, useContext,useCallback } from "react";
import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import { THEME } from "../theme";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";

const MainScreen = () => {
  const { todos, addTodo, removeTodo, fetchTodos } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);
  const [deviceWith, setDeviceWith] = useState(
    Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
  );
  const loadTodos = useCallback(async () => {
    await fetchTodos();
  }, [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, []);
  
  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWith(width);
    };
    Dimensions.addEventListener("change", update);
    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });
  let content = (
    <View style={{ width: deviceWith }}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
        )}
      />
    </View>
  );
  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrep}>
        <Image
          style={styles.image}
          source={require("../../assets/no-items.png")}
        />
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
