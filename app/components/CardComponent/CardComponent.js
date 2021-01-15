import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";

export default function CardComponent({
  title,
  subtitle,
  imageUri,
  onPress,
  renderRightActions,
  showChevrons,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={imageUri} />
          <View>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            <Text numberOfLines={2} style={styles.subtitle}>
              {subtitle}
            </Text>
          </View>
          {showChevrons ? (
            <MaterialCommunityIcons
              style={styles.chevron}
              name="chevron-right"
              color={defaultStyles.colors.medium}
              size={24}
            />
          ) : null}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  image: {
    flex: 0.3,
    borderRadius: 150,
    height: 110,
    resizeMode: "contain",
  },
  title: {
    paddingHorizontal: 10,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
  },
  subtitle: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    color: "aqua",
    paddingHorizontal: 10,
  },
  chevron: {
    marginLeft: "auto",
    alignSelf: "center",
  },
});
