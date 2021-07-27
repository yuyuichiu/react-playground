import React from 'react';

import styles from './ActionButton.module.css'

export default function Button(props) {
  return (<div className={`${styles.button} ${props.className}`} onClick={props.onClick} ref={props.ref}>
    {props.children}
  </div>)
}