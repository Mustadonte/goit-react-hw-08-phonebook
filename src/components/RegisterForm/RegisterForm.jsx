import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './RegisterForm.module.css';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/Auth/auth-operations';
import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});

const initialValue = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLogin = useAuth();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(signup(values));
    resetForm();
    if (isLogin) {
      <Navigate to="/contacts" />;
    }
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
          <Field
            name="name"
            type="text"
            placeholder="Enter your name"
            className={css.input}
          />
          <ErrorMessage
            name="name"
            render={msg => {
              toast.error(`${msg}`);
            }}
          />
        </label>

        <label htmlFor="email" className={css.label}>
          Email
          <Field
            name="email"
            type="email"
            placeholder="Enter your e-mail"
            className={css.input}
          />
          <ErrorMessage
            name="email"
            render={msg => {
              toast.error(`${msg}`);
            }}
          />
        </label>

        <label htmlFor="password" className={css.label}>
          Password
          <Field
            name="password"
            type="password"
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
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};
