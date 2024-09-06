import React from 'react';
import { useForm } from 'react-hook-form';
import InputComponent from './InputComponent.jsx';

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const onSubmitForm = (data) => console.log('data', data);

  const watchFirstFields = watch(['firstField']);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <InputComponent
        register={register}
        label="First Field"
        type="text"
        title="firstField"
        validation={{
          required: 'First field is required',
          minLength: {
            value: 6,
            message: 'First field should be more then 5 symbols',
          },
        }}
        errors={errors}
        placeholder="more than 5 symbols"
      />

      {watchFirstFields[0]?.length > 5 && (
        <InputComponent
          register={register}
          label=" Second Field"
          type="text"
          title="secondField"
          validation={{
            required: 'Second field is required',
          }}
          errors={errors}
        />
      )}

      <button>submit</button>
    </form>
  );
}

export default DynamicForm;
