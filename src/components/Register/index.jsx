import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

Register.propTypes = {};

function Register(props) {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<SignIn />}
        />
        <Route
          path='/signin'
          element={<SignIn />}
        />
        <Route
          path='signup'
          element={<SignUp />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default Register;
