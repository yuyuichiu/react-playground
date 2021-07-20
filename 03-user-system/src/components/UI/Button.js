import React from 'react';
import styled from "styled-components";

const Btn = styled.button`
  color: #000;
  background: rgb(245, 235, 50);
  width: 120px;
  height: 30px;
  font: inherit;
  border: none;
  cursor: pointer;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.3);

  &:active {
      transform: scale(0.97);
  }
`;

export default function Button(props) {
    return (<Btn onClick={props.onClick}>{props.children}</Btn>)
}