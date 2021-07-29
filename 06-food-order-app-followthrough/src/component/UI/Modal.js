import React from 'react';
import reactDom from 'react-dom';
import styles from './Modal.module.css'

function Backdrop(props) {
  const backdropClickHandler = () => {
    props.onBackdropClick();
  }

  return <div className={styles.backdrop} onClick={backdropClickHandler}></div>
}

function ModalOverlay(props) {
  return <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div>
}

export default function Modal(props) {
  return reactDom.createPortal(<>
    <Backdrop onBackdropClick={props.onBackdropClick}/>
    <ModalOverlay>{props.children}</ModalOverlay>
  </>, document.getElementById('overlay'))
}