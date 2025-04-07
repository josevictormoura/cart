import React from 'react';
import styles from './Input.module.css';

const Input = ({ id, label, type, value, setValue, ...pros }) => {
  return (
    <label key={id} className={styles.inputGroup} htmlFor={id}>
      <span>{label}</span>
      <input
        type={type}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...pros}
      />
    </label>
  );
};

export default Input;
