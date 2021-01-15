import React from "react";

import { TouchableHighlight, StyleSheet, Text, Platform } from "react-native";

import defaultStyles from "../../config/styles";

function ButtonComponent({ color, title, bottomPx, onPress }) {
  return (
    <TouchableHighlight
      style={[styles.button, { backgroundColor: color, bottom: bottomPx }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 30,
    width: "100%",
    justifyContent: "center",
    height: 50,
    elevation: 15,
  },
  text: {
    flexDirection: "column",
    color: defaultStyles.colors.white,
    fontSize: 18,
    fontFamily: defaultStyles.text.fontFamily,
  },
});

export default ButtonComponent;
