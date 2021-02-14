import React from 'react'

import {MaterialCommunityIcons} from "@expo/vector-icons"

import defaultStyles from "../../config/styles";
import {TouchableHighlight, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Image, StyleSheet, Text, View} from 'react-native'

export default function ImageInputComponent({imageArray, onAddImage}) {
    return (

        <TouchableHighlight onPress={onAddImage}>
            <View style={styles.addImage}>
                <MaterialCommunityIcons
                    name="image-plus"
                    size={45}
                    color={defaultStyles.colors.medium}/>
            </View>
        </TouchableHighlight>

    )
}

const styles = StyleSheet.create({

    addImage: {
        backgroundColor: defaultStyles.colors.light,
        width: 100,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})