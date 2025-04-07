import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, bg, width, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={styles.button}
      style={{ backgroundColor: bg, width: width }}
    >
      {children}
    </button>
  );
};

export default Button;
