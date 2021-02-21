import React from "react";
import {View, StyleSheet, Image} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import colors from "../config/colors";

export default function ImageViewScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <MaterialCommunityIcons
                    style={{
                    marginLeft: 25
                }}
                    name="close"
                    color={colors.white}
                    size={35}/>
                <MaterialCommunityIcons
                    style={{
                    marginRight: 25
                }}
                    name="trash-can-outline"
                    color={colors.white}
                    size={35}/>
            </View>
            <Image style={styles.image} source={require("../assets/chair.jpg")}></Image>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.black
    },
    image: {
        flex: 0.7,
        resizeMode: "contain"
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    }
});
