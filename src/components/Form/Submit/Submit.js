import React from "react";
import {useField} from "formik";

function Submit({text, ...props}) {

  return (
    <button type="submit">{text}</button>
  )
}

export default Submit;
