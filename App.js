import React, { useState } from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageViewScreen from "./app/screens/ImageViewScreen";
import CardComponent from "./app/components/CardComponent/CardComponent";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput, View, Text, Switch } from "react-native";
import ScreenComponent from "./app/components/ScreenComponent/ScreenComponent";
import AppTextInputComponent from "./app/components/AppTextInputComponent/AppTextInputComponent";
import AppPickerComponent from "./app/components/AppPickerComponent/AppPickerComponent";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}
