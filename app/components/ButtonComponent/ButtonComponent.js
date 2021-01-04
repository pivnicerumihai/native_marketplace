import React from "react";
import { TouchableHighlight, StyleSheet, Text } from "react-native";

function ButtonComponent({ color, title, bottomPx }) {
  return (
    <TouchableHighlight
      style={[styles.button, { backgroundColor: color, bottom: bottomPx }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    alignItems: "center",
    borderRadius: 30,
    width: "90%",
    marginHorizontal: "5%",
    justifyContent: "center",
    height: 50,
    elevation: 15,
  },
  text: {
    flexDirection: "column",
  },
});

export default ButtonComponent;
