import React from "react";
import { useFormik } from "formik";

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    onSubmit: (values) => {
      console.log("Form Data :", values);
    },
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
