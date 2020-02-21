import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AppCard = props => {
  return (
    <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  default: {
    padding: 20,
    borderWidth: 2,
    borderColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // shadowColor: "#000",
    backgroundColor: "#fff",
    elevation: 8,
    borderRadius: 10
  }
});
export default AppCard;
