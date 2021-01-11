import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

function AccountInfoComponent({ imageUri, username, emailAddress }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageUri}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.emailAddress}>{emailAddress}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  image: {
    marginLeft: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    resizeMode: "contain",
  },
  textContainer: {
    paddingLeft: 20,
    justifyContent: "center",
  },
  username: {
    fontWeight: "bold",
  },
  emailAddress: {
    color: colors.medium,
  },
});
export default AccountInfoComponent;
