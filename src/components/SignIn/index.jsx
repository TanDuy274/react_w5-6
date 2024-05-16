import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './SignIn.css';
import PropTypes from 'prop-types';

SignIn.propTypes = {
  handleEmail: PropTypes.func,
};

SignIn.defaultValue = {
  handleEmail: null,
};

function SignIn({ handleEmail }) {
  const initAcc = JSON.parse(localStorage.getItem('accArray'));

  const { register, reset, handleSubmit } = useForm();
  const [data, setData] = useState('');
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (data) => {
    let flag = false;
    initAcc.forEach((acc) => {
      if (acc.email === data.email && acc.password === data.password) {
        flag = true;
        console.log('ok');
        setLogin(true);
        console.log(location);
        navigate('/dashboard', { replace: true });
        handleEmail(data.email);
        return;
      }
    });
    if (!flag) {
      flag = false;
      console.log('not ok');
      setLogin(false);
    }
  };

  return (
    <div className='form'>
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>

      {/* <Typography>Sign in</Typography> */}
      <p className='text-3xl font-bold text-blue-600/75'>Sign in</p>

      <form onSubmit={handleSubmit((data) => handleSignIn(data))}>
        <TextField
          {...register('email')}
          placeholder='Email'
          label='Email'
          margin='normal'
          fullWidth
        />
        <TextField
          {...register('password')}
          placeholder='Password'
          type='password'
          label='Password'
          margin='normal'
          fullWidth
        />

        <NavLink
          to='/signin'
          className='link-signin'
        >
          <p className='link-text'>Sign in</p>
        </NavLink>
        <NavLink
          to='/signup'
          className='link-signup'
        >
          <p className='link-text'>Sign up</p>
        </NavLink>
        <Button
          variant='contained'
          type='submit'
          fullWidth
        >
          Sign in
        </Button>
        {/* <p>{data}</p> */}
      </form>
    </div>
  );
}

export default SignIn;
