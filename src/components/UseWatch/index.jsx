import React from 'react';
import { useForm, useWatch } from 'react-hook-form';

UseWatch.propTypes = {};

function UseWatch(props) {
  function RHFInput({ register, watch, name, control }) {
    const watchAllFields = useWatch({ control }); // Theo dõi mọi thay đổi
    const watchField = useWatch({ control, name }); // Theo dõi một field cụ thể
    // console.log("watchAllFields", watchAllFields);
    console.log('watchField', watchField);

    return (
      <input
        type='text'
        {...register(name, { required: true, maxLength: 50 })}
      />
    );
  }

  const { register, watch, control } = useForm();

  console.log('useWatch re-render');

  return (
    <form>
      <label>Name</label>
      <RHFInput
        control={control}
        name='name'
        register={register}
        watch={watch}
      />
      <label>Address</label>
      <RHFInput
        control={control}
        name='address'
        register={register}
        watch={watch}
      />
    </form>
  );
}

export default UseWatch;
