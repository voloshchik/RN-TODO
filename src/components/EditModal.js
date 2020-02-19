import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Modal } from "react-native";
import { THEME } from "../theme";

const EditModal = ({ visible, onCansel }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Введите дело"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button
            title="Отменить"
            onPress={onCansel}
            color={THEME.DANGER_COLOR}
          />
          <Button title="Сохранить" />
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
