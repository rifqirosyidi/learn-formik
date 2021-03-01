import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  address: "",
  message: "",
  phone: "",
};

const onSubmit = (values) => {
  console.log("Form Data :", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email format"),
  address: Yup.string().required("Required"),
});

const MyForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field type="text" name="address" id="address" />
          <ErrorMessage name="address" />
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <Field as="textarea" name="message" id="message" />
          <ErrorMessage name="message" />
        </div>
        <div className="form-control">
          <label htmlFor="phone">phone</label>
          <Field name="phone">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <input type="text" id="phone" {...field}></input>
                  {meta.error && meta.touched ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
          <ErrorMessage name="phone" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MyForm;
