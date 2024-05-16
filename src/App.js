import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import { default as SignIn } from './components/SignIn';
import SignUp from './components/SignUp';
import Register from './components/Register';
import Watch from './components/Watch';
import UseWatch from './components/UseWatch';
import TodoList from './components/Todo/TodoItem';
import Menu from './components/Menu';
import RouterUI from './components/RouterUI';
import { DatePicker } from 'antd';
import Todo from './components/Todo';
import CounterFeature from './components/Counter';
import HomePage from './components/HomePage';
import User from './components/User';
import Help from './components/Help';
import { Home } from '@mui/icons-material';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const getUserInfo = (email) => {
    setEmail(email);
  };

  let isLogin;

  const handleLogOut = () => {
    isLogin = false;
    navigate('/signin');
  };

  return (
    <>
      {email === '' ? (isLogin = false) : (isLogin = true)}
      <Routes>
        <Route
          path='/'
          element={<SignIn handleEmail={getUserInfo} />}
        />
        <Route
          path='/signin'
          element={<SignIn handleEmail={getUserInfo} />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/dashboard/*'
          // isLogin === true ? element={<RouterUI email={email} />} : {navigate('/signin')}
          // {navigate('/signin')}
          element={
            <RouterUI
              email={email}
              logOut={handleLogOut}
            />
          }
        />
        <Route
          path='*'
          Component={NotFound}
        />
      </Routes>
      {/* <RouterUI /> */}
      {/* <Register /> */}
      {/* watch
      <Watch />
      useWatch
      <UseWatch /> */}
      {/* <DatePicker /> */}
      {/* <Todo /> */}
      {/* <CounterFeature /> */}
    </>
  );
}

export default App;
