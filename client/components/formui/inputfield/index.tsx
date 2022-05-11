import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, { error }] = useField(props);
  return (
    <div className="flex flex-col text-left">
      <label htmlFor={field.name}>{label}</label>
      <input
        {...field}
        {...props}
        // type="text"
        id={field.name}
        // value={values.username}
        // onChange={handleChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputField;
