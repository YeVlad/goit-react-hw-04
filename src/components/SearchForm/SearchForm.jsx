import { Formik, Form, Field } from "formik";
// , ErrorMessage
import toast, { Toaster } from "react-hot-toast";

export default function SearchForm({ setsearchWord, setPage }) {
  function handleSubmit(values, actions) {
    if (values.keyWord.trim().length > 0) {
      setPage(1);
      setsearchWord(values.keyWord);
      actions.resetForm();
    } else {
      const notifyEmpty = () =>
        toast("Sorry, but you must write something in the textarea");
      notifyEmpty();
    }
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
