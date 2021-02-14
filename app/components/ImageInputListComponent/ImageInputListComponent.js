import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function ImageInputListComponent({imageArray}) {
  console.log(imageArray);
    return (
        <View style={styles.imagesContainer}>
         {imageArray.length > 0 ? imageArray.map((image,i) => {
return( <Image style={styles.image} key={i} source={{uri:image,width:90,height:90}}/> )
})
:
null}
        </View>
    )
}

const styles = StyleSheet.create({
    imagesContainer:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    image:{
        margin:5,
        borderRadius:20
    }})