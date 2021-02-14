import React, {useState} from 'react'

import * as ImagePicker from "expo-image-picker"
import {useFormikContext} from 'formik';
import {View} from "react-native";

import ImageInputComponent from "../../ImageInputComponent/ImageInputComponent"
import ImageInputListComponent from "../../ImageInputListComponent/ImageInputListComponent"
import ErrorMessageComponent from '../ErrorMessageComponent/ErrorMessageComponent';

export default function AppFormImagePickerComponent({name}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    const onAddImage = async() => {
        try {
            const results = await ImagePicker.launchImageLibraryAsync();
            if (!results.cancelled) {
                setFieldValue(name, [
                    ...values[name],
                    results.uri
                ]);
            }
            
        } catch (error) {
            console.log("Error loading image!")
        }
    }

    const onRemoveImage = (selectedImage) => {

       values[name].splice(values[name].indexOf(selectedImage), 1);
        setFieldValue([...values[name]]);

    }

    return ( 
    <> 
    <View>
        <ImageInputListComponent
            imageArray={values[name]}
            onRemoveImage={onRemoveImage}/>
        <ImageInputComponent imageArray={values[name]} onAddImage={onAddImage}/>
    </View> 
    <ErrorMessageComponent error = {errors[name]} visible = {touched[name]} /> 
    </>
    )
}

