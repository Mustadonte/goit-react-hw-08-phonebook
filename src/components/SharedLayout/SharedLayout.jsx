import css from './SharedLayout.module.css';
import { NavBar } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader';
export const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <div className={css.container}>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};
