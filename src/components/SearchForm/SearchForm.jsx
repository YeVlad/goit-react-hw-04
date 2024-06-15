import { Formik, Form, Field } from "formik";
// , ErrorMessage

export default function SearchForm({ setsearchWord }) {
  function handleSubmit(values, actions) {
    setsearchWord(values.keyWord);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        keyWord: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className="footer">
        <button type="submit">Search</button>
        <Field type="text" name="keyWord"></Field>
      </Form>
    </Formik>
  );
}
