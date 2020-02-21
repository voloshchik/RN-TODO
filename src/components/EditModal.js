import React, { useState } from "react";
import {} from '@expo/vector-icons'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Alert
} from "react-native";
import { THEME } from "../theme";
import AppButton from "./ui/AppButton";

const EditModal = ({ visible, onCansel, value, onSave }) => {
  const [title, setTitle] = useState(value);
  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Ошибка",
        `Минимальная длинна названия 3 символа.Сейчас ${
          title.trim().length
        } символов`
      );
    } else {
      onSave(title);
    }
  };
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrapper}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Введите дело"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <AppButton onPress={onCansel} color={THEME.DANGER_COLOR}>
            Отменить
          </AppButton>
          {/* <Button
            title="Отменить"
            onPress={onCansel}
            color={THEME.DANGER_COLOR}
          /> */}
          <AppButton onPress={saveHandler}>Сохранить</AppButton>
          {/* <Button title="Сохранить" onPress={saveHandler} /> */}
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderBottomColor: THEME.MAIN_COLOR,
    padding: 10,
    borderBottomWidth: 2,
    width: "80%"
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around"
  }
});
export default EditModal;
