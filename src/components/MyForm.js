import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MyErrorMessage from "./MyErrorMessage";

const initialValues = {
  name: "",
  email: "",
  address: "",
  message: "",
  phone: "",
  socials: {
    github: "",
    twitter: "",
  },
  friends: ["", ""],
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
          <ErrorMessage name="name" component={MyErrorMessage} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" component={MyErrorMessage} />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field type="text" name="address" id="address" />
          <ErrorMessage name="address">
            {(errMsg) => {
              return <div className="error">{errMsg}</div>;
            }}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <Field as="textarea" name="message" id="message" />
          <ErrorMessage name="message" component={MyErrorMessage} />
        </div>
        <div className="form-control">
          <label htmlFor="phone">phone</label>
          <Field name="phone">
            {(props) => {
              const { field, meta } = props;
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

        {/* Nested Properties */}
        <div className="form-control">
          <label htmlFor="github">Github Profile Url</label>
          <Field type="text" id="github" name="socials.github" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter Profile Url</label>
          <Field type="text" id="twitter" name="socials.twitter" />
        </div>

        {/* Array */}
        <div className="form-control">
          <label htmlFor="firstFriend">First Friend</label>
          <Field type="text" id="firstFriend" name="friends[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="secondFriend">Second Friend</label>
          <Field type="text" id="secondFriend" name="friends[1]" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MyForm;
