import React from 'react'
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native'

export default function ImageInputListComponent({imageArray, onRemoveImage}) {
    return (
        <View style={styles.imagesContainer}>
            {imageArray.length  > 0
                ? imageArray.map((image, i) => {
                    return (
                        <TouchableHighlight key={i} onPress={() => onRemoveImage(image)}>
                            <Image
                                style={styles.image}
                                source={{
                                uri: image,
                                width: 90,
                                height: 90
                            }}/>
                        </TouchableHighlight>
                    )
                })
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image: {
        margin: 5,
        borderRadius: 20
    }
})