import { Formik, Form, Field } from "formik";
import { Toaster } from "react-hot-toast";

type Values = {
  keyWord: string;
};

type Props={
  handleSubmit:(values: Values, actions: any)=>void;
}

export default function SearchForm({ handleSubmit }:Props):React.ReactElement {
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
