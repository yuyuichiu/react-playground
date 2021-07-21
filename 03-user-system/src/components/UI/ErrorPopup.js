import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Button from "./Button";

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

const Backdrop = styled.div`
  display: ${props => props.hide ? 'none' : 'block'};
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: rgba(0,0,0,0.3);
`

export default function ErrorPopup(props) {
  const clickHandler = () => {
      props.onErrorClear();
  }

  // Portal: render Pop-up to separate <div> without disrupting other logics
  return (<>
    {ReactDOM.createPortal((<Backdrop hide={props.error.hide}>
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
    </Backdrop>), document.getElementById('backdrop-root'))}
  </>);
}
