import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker"

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageViewScreen from "./app/screens/ImageViewScreen";
import CardComponent from "./app/components/CardComponent/CardComponent";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ScreenComponent from "./app/components/ScreenComponent/ScreenComponent";
import AppTextInputComponent from "./app/components/AppTextInputComponent/AppTextInputComponent";
import AppPickerComponent from "./app/components/AppPickerComponent/AppPickerComponent";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInputComponent from "./app/components/ImageInputComponent/ImageInputComponent";
import ImageInputListComponent from "./app/components/ImageInputListComponent/ImageInputListComponent";

export default function App() {

const [imageUriList,setImageUriList] = useState([]);

const onChangeImage = async() => {
  try {
   
    const results = await ImagePicker.launchImageLibraryAsync();
    if(!results.cancelled){
      setImageUriList([...imageUriList,results.uri]);
    }
  } catch (error) {
    console.log("Error loading image!")
  }
} 

  return (
<ScreenComponent>
  <ImageInputListComponent imageArray={imageUriList}/>
 <ImageInputComponent imageArray={imageUriList} onChangeImage={onChangeImage}/> 
 </ScreenComponent>)}
