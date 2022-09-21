import { SharedLayout } from 'components/SharedLayout/';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivetRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const ContactsPage = lazy(() =>
  import('pages/contactsPage').then(module => ({
    ...module,
    default: module.ContactsPage,
  }))
);

const LoginPage = lazy(() =>
  import('pages/loginPage').then(module => ({
    ...module,
    default: module.LoginPage,
  }))
);

const RegisterPage = lazy(() =>
  import('pages/registerPage').then(module => ({
    ...module,
    default: module.RegisterPage,
  }))
);

const HomePage = lazy(() =>
  import('pages/homePage').then(module => ({
    ...module,
    default: module.HomePage,
  }))
);
export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivetRoute />}>
          <Route path="contacts/" element={<ContactsPage />} />
          {/* <Route path="edit/:contactId" element={<div>Edit</div>} /> */}
        </Route>

        <Route path="favorites" element={<p>Favorite contacts page</p>} />
      </Route>
    </Routes>
  );
};
