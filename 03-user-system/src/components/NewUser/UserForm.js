import React, { useState, useRef } from "react";
import styled from "styled-components";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorPopup from '../UI/ErrorPopup';
import "./UserForm.css";

const UserInput = styled.input`
  background: ${(props) => (props.invalid ? "#ff8d8d" : "#fff")};
  border-radius: 30px;
  padding-left: 7px;
  font: inherit;
  border: 1px solid #555;
`;

export default function UserForm(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [state, setState] = useState({
    nameInvalid: false,
    ageInvalid: false,
  });
  const [error, setError] = useState({hide: true});

  const errorClearHandler = () => {
    setError({hide: true})
  }

  const submitHandler = (event) => {
    event.preventDefault();
    // Invalid: pop up the error message
    if (nameInputRef.current.value.length === 0 || ageInputRef.current.value.length === 0) {
      setState((prevState) => {
        return {
          ...prevState,
          nameInvalid: nameInputRef.current.value.length === 0 ? true : false,
          ageInvalid: ageInputRef.current.value.length === 0 ? true : false,
        };
      });
      setError({
        title: 'Error',
        msg: `Please fill in all required fields.`,
        hide: false
      })
      return;
    }
    // Valid: post user on the dom
    else {
      setError({hide: true})
      props.onUserAdded({name: nameInputRef.current.value, age: ageInputRef.current.value});
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
  };

  return (<div>
    <ErrorPopup error={error} onErrorClear={errorClearHandler}/>
    <Card>
      <form className="userform" onSubmit={submitHandler}>
        <label>Username</label>
        <UserInput
          type="text"
          invalid={state.nameInvalid}
          id="username"
          ref={nameInputRef}
        />
        <label>Age (in Years)</label>
        <UserInput
          type="number"
          invalid={state.ageInvalid}
          ref={ageInputRef}
          id="Age"
          min="0"
          step="1"
        />
        <Button>Add User</Button>
      </form>
    </Card>
  </div>);
}
