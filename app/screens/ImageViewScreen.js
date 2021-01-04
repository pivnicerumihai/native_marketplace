import React from "react";
import { View, StyleSheet, Image, ImageBackground, Button } from "react-native";

import colors from "../config/colors";

export default function ImageViewScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button color={colors.primary} title={"X"}></Button>
        <Button color={colors.secondary} title={"Delete"}></Button>
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.black,
  },
  image: { flex: 0.7, resizeMode: "contain" },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
});
