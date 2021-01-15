import React from "react";
import { Text } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function PickerItemComponent({ label, icon, backgroundColor, style, onPress }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        size={40}
        color="white"
        style={[styles.icon, { backgroundColor: backgroundColor }]}
      />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
  icon: {
    alignSelf: "center",
    borderRadius: 100,
    padding: 10,
  },
});
export default PickerItemComponent;
