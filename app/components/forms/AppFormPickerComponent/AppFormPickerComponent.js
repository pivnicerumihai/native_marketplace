import React from "react";
import { useFormikContext } from "formik";

import AppPickerComponent from "../../AppPickerComponent/AppPickerComponent";
import ErrorMessageComponent from "../ErrorMessageComponent/ErrorMessageComponent";

function AppFormPickerComponent({ items, name, width, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPickerComponent
        width={width}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessageComponent error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPickerComponent;
