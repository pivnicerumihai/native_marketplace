import React from "react";
import { Image, View, Text, StyleSheet, Platform } from "react-native";

export default function CardComponent({ title, price, imageUri }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageUri} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "40%",
    marginTop: "10%",
    padding: 5,
  },
  image: {
    alignSelf: "center",
    flex: 0.8,
    width: "90%",
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    marginLeft: "5%",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
  },
  subtitle: {
    marginLeft: "5%",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    color: "aqua",
  },
});
