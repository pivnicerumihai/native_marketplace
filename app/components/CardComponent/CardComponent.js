import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";

export default function CardComponent({
  title,
  subtitle,
  imageUri,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={imageUri} />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
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
