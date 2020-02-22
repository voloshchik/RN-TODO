import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Navbar from "./components/Navbar";
import { THEME } from "./theme";
import MainScreen from "./screens/MainScreen";
import TodoSreen from "./screens/TodoScreen";
import { TodoContext } from "./context/todo/todoContext";

const MainLayout = () => {
  const todosContext = useContext(TodoContext);
  const [todoId, setTodiId] = useState(null);
  const [todos, setTodos] = useState([]);
  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ]);
  };
  const removeTodo = id => {
    const todo = todos.find(t => t.id === id);

    Alert.alert(
      "Удаление элемента",
      `Вы действительно хотите удалить дело "${todo.title}?" `,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Удалить",
          onPress: () => {
            setTodiId(null);
            setTodos(prev => {
              return prev.filter(todo => todo.id !== id);
            });
          }
        }
      ],
      { cancelable: false }
    );
  };
  const apdateTodo = (id, title) => {
    setTodos(old =>
      old.map(todo => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };
  let content = (
    <MainScreen
      todos={todosContext.todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={id => {
        setTodiId(id);
      }}
    />
  );
  const selectTodo = todos.find(todo => todo.id === todoId);
  if (todoId) {
    content = (
      <TodoSreen
        goBack={() => setTodiId(null)}
        todo={selectTodo}
        onRemove={removeTodo}
        onSave={apdateTodo}
      />
    );
  }
  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>{content}</View>
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
