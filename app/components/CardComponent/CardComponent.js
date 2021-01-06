import React from "react";
import { Image, View, Text, StyleSheet, Platform } from "react-native";

export default function CardComponent({ title, subtitle, imageUri }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageUri} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    flex: 0.4,
    borderRadius: 150,
    height: 110,
    resizeMode: "contain",
  },
  title: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
  },
  subtitle: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    color: "aqua",
  },
});
