import React from "react";
import { Text } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";

function PickerItemComponent({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
export default PickerItemComponent;
