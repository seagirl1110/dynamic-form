import { PropTypes } from 'prop-types';
import React from 'react';
import styles from './InputComponent.module.css';

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
    <label className={styles.input_wrapper}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        {...register(title, validation)}
        type={type}
        placeholder={placeholder}
      />
      {errors[title] && (
        <span className={styles.error_msg}>* {errors[title].message}</span>
      )}
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
