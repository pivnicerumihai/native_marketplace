import React from "react";

import { TouchableHighlight, StyleSheet, Text, Platform } from "react-native";

import colors from "../../config/colors";

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
    color: colors.white,
    fontSize: 18,
    textTransform: "capitalize",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
  },
});

export default ButtonComponent;
