import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  lable: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const { errors } = formState;
  console.log(errors);
  // const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      // as={TextField}
      // fullWidth
      // margin='normal'
      // // label={label}
      // disabled={disabled}
      // variant='standard'
      // id='standard-error-helper-text'
      // error
      render={({ field: { onChange, onBlur, value, ref } }) => (
        // <ReactDatePicker
        //   onChange={onChange}
        //   onBlur={onBlur}
        //   selected={value}
        // />
        // console.log('test')
        <TextField
          name={name}
          control={form.control}
          fullWidth
          margin='normal'
          label={label}
          disabled={disabled}
          variant='standard'
          id='standard-error-helper-text'
          // error={!!hasError}
          helperText={errors[name]}
          // onBlur={onBlur}
          // onChangeText={onChange}
          // value={value}
        />
      )}
    />
    // <TextField
    //   //   {...register(register)}
    //   // error={errors.test}
    //   error={errors.firstName}
    //   id='standard-error-helper-text'
    //   label={label}
    //   // helperText={errors?.test && errors.test.message}
    //   helperText={errors?.firstName && errors.firstName.message}
    //   variant='standard'
    //   fullWidth
    //   margin='normal'
    // />
  );
}

export default InputField;
