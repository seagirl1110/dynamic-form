import { PropTypes } from 'prop-types';
import React from 'react';

function InputComponent({
  register,
  label,
  type,
  title,
  validation,
  errors,
  placeholder,
}) {
  return (
    <label>
      <span>{label}</span>
      <input
        {...register(title, validation)}
        type={type}
        placeholder={placeholder}
      />
      {errors[title] && <span>{errors[title].message}</span>}
    </label>
  );
}

InputComponent.propTypes = {
  register: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  validation: PropTypes.object,
  errors: PropTypes.object,
  placeholder: PropTypes.string,
};

export default InputComponent;
