import React, { Children } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppTextBold from "./AppTextBold";
import { THEME } from "../../theme";

const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold>{children}</AppTextBold>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default AppButton;
