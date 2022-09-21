import { Formik, Field, Form, ErrorMessage } from 'formik';
import css from './LoginForm.module.css';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/auth-operations';

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});

const initialValue = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <label htmlFor="email" className={css.label}>
          Email
          <Field
            name="email"
            type="email"
            placeholder="Enter your email"
            className={css.input}
          />
        </label>
        <ErrorMessage
          name="email"
          render={msg => {
            toast.error(`${msg}`);
          }}
        />
        <label htmlFor="password" className={css.label}>
          Password
          <Field
            name="password"
            type="text"
            placeholder="Enter your password"
            className={css.input}
          />
          <ErrorMessage
            name="password"
            render={msg => {
              toast.error(`${msg}`);
            }}
          />
        </label>
        <button type="submit" className={css.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};
