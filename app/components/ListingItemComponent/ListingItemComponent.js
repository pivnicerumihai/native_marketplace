import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

function ListingItemComponent({ imageUri, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageUri} />
      <Text style={[defaultStyles.text, styles.title]}>{title}</Text>
      <Text style={[defaultStyles.text, styles.subtitle]}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    width: "90%",
    height: 250,
    resizeMode: "contain",
  },
  title: {
    marginLeft: "5%",
    padding: 2,
  },
  subtitle: {
    marginLeft: "5%",
    padding: 3,
    fontWeight: "700",
    color: colors.secondary,
  },
});
export default ListingItemComponent;
