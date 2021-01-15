import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import ScreenComponent from "../components/ScreenComponent/ScreenComponent";

import {
  AppFormComponent,
  AppFormFieldComponent,
  SubmitButtonComponent,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppFormComponent
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormFieldComponent
          name="email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Email"
        ></AppFormFieldComponent>
        <AppFormFieldComponent
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          secureTextEntry
          placeholder="password"
        ></AppFormFieldComponent>
        <SubmitButtonComponent title="LOGIN" />
      </AppFormComponent>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
