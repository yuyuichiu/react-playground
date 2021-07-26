import React from 'react';

import styles from './AmountButton.module.css'

export default function AmountButton(props) {
  return(<button onClick={props.onClick} className={styles.btn}>
    {props.children}
  </button>)
}