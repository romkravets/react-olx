import React from "react";
import {useField} from "formik";
import s from './Input.module.scss';

function Input({label, ...props}) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label className={s.container}>
        {label}
        <input {...field} {...props}/>
      </label>
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  )
}

export default Input;
