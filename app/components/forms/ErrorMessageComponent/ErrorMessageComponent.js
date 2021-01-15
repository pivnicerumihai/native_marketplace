import React from "react";
import { StyleSheet, Text } from "react-native";

function ErrorMessageComponent({ error, visible }) {
  if (!visible || !error) {
    return null;
  } else {
    return <Text style={styles.error}>{error}</Text>;
  }
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    paddingVertical: 2,
    paddingLeft: 6,
  },
});
export default ErrorMessageComponent;
