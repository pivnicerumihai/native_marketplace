import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

function ScreenComponent({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default ScreenComponent;
