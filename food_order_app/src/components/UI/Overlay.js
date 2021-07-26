import React from 'react';

import './Overlay.css'

export default function Overlay(props){
  return (<div onClick={props.onClick} className="overlay">
    {props.children}
  </div>)
}