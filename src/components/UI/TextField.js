import { Fragment } from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const inValidClass =
    meta.error && meta.touched && "form-control shadow-none is-invalid";
  return (
    <Fragment>
      <label htmlFor={field.name} className="form-label">
        {label}
      </label>
      <input
        {...props}
        {...field}
        className={inValidClass ? inValidClass : "form-control shadow-none"}
        autoComplete="off"
        required
      />
      <div className="invalid-feedback">
        <ErrorMessage name={field.name} />
      </div>
    </Fragment>
  );
};

export default TextField;
