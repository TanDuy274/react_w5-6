import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About';
import Help from '../Help';
import HomePage from '../HomePage';
import Menu from '../Menu';
import NotFound from '../NotFound';
import User from '../User';
import './RouterUI.css';
import Todo from '../Todo';
import SignIn from '../SignIn';

RouterUI.propTypes = {};

function RouterUI({ email, logOut }) {
  return (
    <div className='router'>
      <Menu logOut={logOut} />
      <Routes>
        <Route
          path='/'
          element={<HomePage email={email} />}
        />
        <Route
          path='home'
          element={<HomePage email={email} />}
        />
        <Route
          path='user'
          Component={User}
        />
        <Route
          path='todo'
          Component={Todo}
        />
        <Route
          path='help'
          Component={Help}
        />
        <Route
          path='*'
          Component={NotFound}
        />
      </Routes>
    </div>
  );
}

export default RouterUI;
