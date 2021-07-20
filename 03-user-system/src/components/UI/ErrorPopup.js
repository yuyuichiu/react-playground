import React from "react";
import styled from "styled-components";

import Button from "./Button";
import Wrapper from "../Helper/Wrapper";
import "./ErrorPopup.css";

const ErrorMsg = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 70vw;
    max-width: 500px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 3px 5px rgba(0,0,0,0.3);
    z-index: 3;

    & h2, & p {
        margin: 0;
    }

    & button{
        margin: 10px auto;
        z-index: 5;
    }
`

export default function ErrorPopup(props) {
  const clickHandler = () => {
      console.log('I hear you');
      props.onErrorClear();
  }

  return (
    <div className={`backdrop ${props.error.hide && 'hide'}`}>
      <ErrorMsg>
        <header>
          <h2>{props.error.title}</h2>
        </header>
        <div>
          <p>{props.error.msg}</p>
        </div>
        <footer>
          <Button onClick={clickHandler}>Understand</Button>
        </footer>
      </ErrorMsg>
    </div>
  );
}
