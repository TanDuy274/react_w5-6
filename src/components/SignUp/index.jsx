import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css';
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
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

SignUp.propTypes = {};

function SignUp(props) {
  const schema = yup.object({
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [data, setData] = useState('');
  // console.log(data);

  const currencies = [
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

  // const [value, setValue] = React.useState('female');

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue((event.target as HTMLInputElement).value);
  // };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        {/* <Typography>Sign Up</Typography> */}

        <p className='text-3xl font-bold text-blue-600/75'>Sign up</p>

        <TextField
          {...register('firstName')}
          error={errors.firstName}
          id='standard-error-helper-text'
          label='First Name'
          helperText={errors?.firstName && errors.firstName.message}
          variant='standard'
          fullWidth
          margin='normal'
        />

        <TextField
          {...register('lastName')}
          error={errors.lastName}
          id='standard-error-helper-text'
          label='Last Name'
          helperText={errors?.lastName && errors.lastName.message}
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
              // defaultValue='EUR'
              helperText={errors?.hobby && errors.hobby.message}
              variant='standard'
              fullWidth
              margin='normal'
            >
              {currencies.map((option) => (
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
              <RadioGroup
                row
                // aria-labelledby='demo-controlled-radio-buttons-group'
                // name='controlled-radio-buttons-group'
                // value={value}
                // onChange={handleChange}
              >
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
              <FormHelperText>{errors?.gender && errors.gender.message}</FormHelperText>
            </FormControl>
          </div>
        </div>

        <TextField
          {...register('email')}
          error={errors.email}
          id='standard-error-helper-text'
          label='Email'
          helperText={errors?.email && errors.email.message}
          variant='standard'
          fullWidth
          margin='normal'
        />

        <TextField
          {...register('phoneNumber')}
          error={errors.phoneNumber}
          id='standard-error-helper-text'
          label='Phone number'
          helperText={errors?.phoneNumber && errors.phoneNumber.messages}
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
          helperText={errors?.password && errors.password.message}
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
          helperText={errors?.confirmPassword && errors.confirmPassword.message}
          variant='standard'
          fullWidth
          margin='normal'
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
          Sign up
        </Button>
      </form>
      <p>{data}</p>
    </div>
  );
}

export default SignUp;
