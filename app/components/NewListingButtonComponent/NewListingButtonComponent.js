import React from 'react'
import {StyleSheet, View} from 'react-native'
import defaultStyles from '../../config/styles'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler';

export default function NewListingButtonComponent({onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View >
                <MaterialCommunityIcons
                    name='plus-circle'
                    color={defaultStyles.colors.white}
                    size={40}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.primary,
        borderColor: defaultStyles.colors.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 25,
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
