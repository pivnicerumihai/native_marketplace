import React from "react";
import {View, Image, Text, ImageBackground, StyleSheet} from "react-native";

import ButtonComponent from "../components/ButtonComponent/ButtonComponent";

import colors from "../config/colors";

export default function WelcomeScreen({navigation}) {

    return (

        <View style={styles.container}>
            <ImageBackground
                blurRadius={1.5}
                source={require("../assets/background.jpg")}
                style={styles.imageBackground}/>
            <Image source={require("../assets/logo-red.png")} style={styles.logo}/>
            <Text style={styles.logoText}>Sell What You Don't Need</Text>
            <ButtonComponent
                title={"Login"}
                color={colors.primary}
                bottomPx={"10%"}
                onPress={() => navigation.navigate('Log In')}></ButtonComponent>

            <ButtonComponent
                title={"Register"}
                color={colors.secondary}
                bottomPx={"5%"}
                onPress={() => navigation.navigate('Register')}></ButtonComponent>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'contain'
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        alignSelf: "center",
        top: 100
    },
    logoText: {
        position: "absolute",
        alignSelf: "center",
        top: 200
    }
});
