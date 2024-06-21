import { Formik, Form, Field } from "formik";
// , ErrorMessage
import { Toaster } from "react-hot-toast";

export default function SearchForm({ handleSubmit }) {
  return (
    <Formik
      initialValues={{
        keyWord: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className="footer">
        <button type="submit">Search</button>
        <Toaster />
        <Field
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="keyWord"
        ></Field>
      </Form>
    </Formik>
  );
}
