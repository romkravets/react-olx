import React from "react";
/*import {useField} from "formik";*/
import s from './Input.module.scss';

function Input({fields, label, onChange, name, ...props}) {
/*  const [field, meta] = useField(props);*/

  return (
    <div className={s.container}>
      <label htmlFor={name}>
        {label}
        <input
          id={name}
          value={fields[name]}
          onChange={(evt) => onChange(name, evt.target.value)}
          {...props}
        />
      </label>
    </div>
  )
}

export default Input;
