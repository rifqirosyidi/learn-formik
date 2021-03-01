import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  address: "",
};

const onSubmit = (values) => {
  console.log("Form Data :", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.address) {
    errors.address = "Required";
  }
  return errors;
};

const MyForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          name="name"
          id="name"
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          name="email"
          id="email"
        />

        <label htmlFor="address">Address</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.address}
          type="text"
          name="address"
          id="address"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
