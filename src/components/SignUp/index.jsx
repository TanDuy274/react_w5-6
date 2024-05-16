import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import './SignUp.css';
import ShowUsers from '../ShowUsers';

SignUp.propTypes = {};

function SignUp(props) {
  const initUser = JSON.parse(localStorage.getItem('accArray')) || [
    {
      id: 1,
      firstName: 'name 1',
      lastName: 'name 1',
      hobby: 'Hobby2',
      gender: 'female',
      email: 'name1@email.com',
      phoneNumber: 123,
      password: '123',
      confirmPassword: '123',
    },
    {
      id: 2,
      firstName: 'name 1',
      lastName: 'name 1',
      hobby: 'Hobby2',
      gender: 'female',
      email: 'name1@email.com',
      phoneNumber: 123,
      password: '123',
      confirmPassword: '123',
    },
  ];

  let nextId = initUser.length + 1;
  // let emailErrorMessage = '';

  const [data, setData] = useState(initUser);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const schema = yup
    .object({
      firstName: yup.string().required('First Name is required'),
      lastName: yup.string().required('Last Name is required'),
      hobby: yup.string().notOneOf([''], 'Hobby is required'),
      gender: yup.string().required('Gender is required'),
      email: yup.string().required('Email is required'),
      phoneNumber: yup.number().required('Phone number is required'),
      password: yup.string().required('Please enter password'),
      confirmPassword: yup
        .string()
        .required('Please confirm password')
        .oneOf([yup.ref('password')], 'Passwords do not match'),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const hobbys = [
    {
      value: 'Hobby1',
      label: 'Hobby1',
    },
    {
      value: 'Hobby2',
      label: 'Hobby2',
    },
    {
      value: 'Hobby3',
      label: 'Hobby3',
    },
    {
      value: 'Hobby4',
      label: 'Hobby4',
    },
  ];

  const submitForm = (user) => {
    let flag = true;
    data.forEach((acc) => {
      if (acc.email === user.email) {
        flag = false;
        setEmailError(true);
        setEmailErrorMessage('email duplicate');
        return;
      }
    });
    if (flag) {
      setData([...data, { id: nextId++, ...user }]);
      setEmailError(false);
      setEmailErrorMessage('');
      reset();
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit((user) => submitForm(user))}>
        <p className='text-3xl font-bold text-blue-600/75'>Sign up</p>
        <TextField
          {...register('firstName')}
          error={errors.firstName}
          id='standard-error-helper-text'
          label='First Name'
          helperText={errors.firstName && errors.firstName?.message}
          variant='standard'
          fullWidth
          margin='normal'
        />
        <TextField
          {...register('lastName')}
          error={errors.lastName}
          id='standard-error-helper-text'
          label='Last Name'
          helperText={errors.lastName && errors.lastName?.message}
          variant='standard'
          fullWidth
          margin='normal'
        />
        <div className='hobby-gender'>
          <div className='hobby'>
            <TextField
              {...register('hobby')}
              error={errors.hobby}
              id='hobby'
              select
              label='Hobby'
              helperText={errors.hobby && errors.hobby?.message}
              variant='standard'
              fullWidth
              margin='normal'
            >
              {hobbys.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className='gender'>
            <FormControl margin='normal'>
              <FormLabel error={errors.gender}>Gender</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Female'
                  {...register('gender')}
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                  {...register('gender')}
                />
              </RadioGroup>
              <FormHelperText error={errors.gender}>
                {errors.gender && errors.gender?.message}
              </FormHelperText>
            </FormControl>
          </div>
        </div>
        <TextField
          {...register('email')}
          error={errors.email || emailError}
          id='standard-error-helper-text'
          label='Email'
          helperText={(errors.email && errors.email?.message) || (emailError && emailErrorMessage)}
          variant='standard'
          fullWidth
          margin='normal'
        />
        <TextField
          {...register('phoneNumber')}
          error={errors.phoneNumber}
          id='standard-error-helper-text'
          label='Phone number'
          helperText={errors.phoneNumber && errors.phoneNumber?.messages}
          variant='standard'
          fullWidth
          margin='normal'
        />
        <TextField
          {...register('password')}
          error={errors.password}
          id='standard-error-helper-text'
          label='Password'
          type='password'
          helperText={errors.password && errors.password?.message}
          variant='standard'
          fullWidth
          margin='normal'
        />
        <TextField
          {...register('confirmPassword')}
          error={errors.confirmPassword}
          id='standard-error-helper-text'
          label='Confirm Password'
          type='password'
          helperText={errors.confirmPassword && errors.confirmPassword?.message}
          variant='standard'
          fullWidth
          margin='normal'
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
          Sign up
        </Button>
        <Button
          variant='outlined'
          type='reset'
          fullWidth
          onClick={(() => reset(), localStorage.setItem('accArray', JSON.stringify(data)))}
        >
          Reset
        </Button>
      </form>
      <ShowUsers data={data} />
    </div>
  );
}

export default SignUp;
