import React from "react";
import { useFormik } from "formik";

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
  });

  console.log(formik.values);
  return (
    <div>
      <form>
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

        <button>Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
