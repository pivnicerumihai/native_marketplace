import React from "react";
import { useFormikContext } from "formik";

import AppTextInputComponent from "../../AppTextInputComponent/AppTextInputComponent";
import ErrorMessageComponent from "../ErrorMessageComponent/ErrorMessageComponent";

function AppFormFieldComponent({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInputComponent
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      ></AppTextInputComponent>
      <ErrorMessageComponent error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormFieldComponent;
