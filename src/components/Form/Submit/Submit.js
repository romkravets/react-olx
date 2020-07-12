import React from "react";
import { useFormikContext } from "formik";

function Submit(props) {
  const form = useFormikContext(props);

  return (
    <button type="submit" onClick={form.handleSubmit}>{props.text}</button>
  )
}

export default Submit;
