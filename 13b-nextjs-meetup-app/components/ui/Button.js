import React from 'react';

import styles from './Button.module.css'

export default function Button(props) {
  const { className, ...other } = props;

  return <button className={`${styles.btn} ${className}`} {...other}>
    {props.children}
  </button>
}