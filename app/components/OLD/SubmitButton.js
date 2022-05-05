import React from "react";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";

function SubmitButton({ title, onPress }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title}
  textcolor = "black"
  color="yellow"
  onPress={handleSubmit, onPress} />;
}

export default SubmitButton;
