import React from "react";
import * as Yup from "yup";

import {
  AppFormComponent,
  AppFormFieldComponent,
  SubmitButtonComponent,
} from "../components/forms";
import ScreenComponent from "../components/ScreenComponent/ScreenComponent";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <ScreenComponent>
      <AppFormComponent
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormFieldComponent
          name="name"
          icon="account"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Name"
        />
        <AppFormFieldComponent
          name="email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
        />
        <AppFormFieldComponent
          name="password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
        />
        <SubmitButtonComponent title="Register" />
      </AppFormComponent>
    </ScreenComponent>
  );
}

export default RegisterScreen;
