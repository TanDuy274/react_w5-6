import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import './SignIn.css';

SignIn.propTypes = {};

function SignIn(props) {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  return (
    <div className='form'>
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>

      {/* <Typography>Sign in</Typography> */}
      <p className='text-3xl font-bold text-blue-600/75'>Sign in</p>

      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <TextField
          {...register('username')}
          placeholder='User name'
          label='User name'
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
          className='link'
        >
          <p className='link-text'>Sign in</p>
        </NavLink>
        <NavLink
          to='/signup'
          className='link'
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
        <p>{data}</p>
      </form>
    </div>
  );
}

export default SignIn;
