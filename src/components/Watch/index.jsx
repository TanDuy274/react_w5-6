import React from 'react';
import { useForm } from 'react-hook-form';
import './Watch.css';

Watch.propTypes = {};

function Watch(props) {
  function RHFInput({ register, watch, name }) {
    const watchAllFields = watch();

    console.log('watchAllFields', watchAllFields);

    return (
      <input
        type='text'
        {...register(name, { required: true, maxLength: 50 })}
      />
    );
  }

  const { register, watch } = useForm();

  console.log('watch re-render');
  const watchFields = watch(['address', 'name']); // render lần đầu: [undefined, undefined]
  console.log(watchFields);

  return (
    <form>
      <label>Name</label>
      <RHFInput
        name='name'
        register={register}
        watch={watch}
      />
      <label>Address</label>
      <RHFInput
        name='address'
        register={register}
        watch={watch}
      />
    </form>
  );
}

export default Watch;
