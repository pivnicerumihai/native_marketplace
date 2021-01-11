import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function OptionComponent({ iconUri, optionName, backgroundColor, lastItem }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconUri}
        size={24}
        style={[styles.icon, { backgroundColor: backgroundColor }]}
        color={colors.white}
      ></MaterialCommunityIcons>
      <Text style={styles.text}>{optionName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  icon: {
    padding: 10,
    borderRadius: 50,
  },
  text: {
    marginLeft: 10,
    alignSelf: "center",
    fontSize: 16,
  },
});
export default OptionComponent;
