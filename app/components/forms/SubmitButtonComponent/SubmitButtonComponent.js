import React from "react";
import { useFormikContext } from "formik";

import ButtonComponent from "../../ButtonComponent/ButtonComponent";

import defaultStyles from "../../../config/styles";

function SubmitButtonComponent({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <ButtonComponent
      title={title}
      onPress={handleSubmit}
      color={defaultStyles.colors.primary}
    ></ButtonComponent>
  );
}

export default SubmitButtonComponent;
