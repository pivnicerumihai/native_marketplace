import React from "react";
import { View, Image, Text, ImageBackground, StyleSheet } from "react-native";

import ButtonComponent from "../components/ButtonComponent/ButtonComponent";

import colors from "../config/colors";

export default function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={0.8}
        source={require("../assets/background.jpg")}
        style={styles.imageBackground}
      />
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Text style={styles.logoText}>Sell What You Don't Need</Text>
      <ButtonComponent
        title={"Login"}
        color={colors.primary}
        bottomPx={"15%"}
      ></ButtonComponent>
      <ButtonComponent
        title={"Register"}
        color={colors.secondary}
        bottomPx={"5%"}
      ></ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageBackground: {
    flex: 1,
    flexDirection: "column",
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    alignSelf: "center",
    top: 100,
  },
  logoText: { position: "absolute", alignSelf: "center", top: 200 },
});
