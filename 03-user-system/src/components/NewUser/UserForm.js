import React, { useState } from "react";
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
  const [state, setState] = useState({
    nameInvalid: false,
    ageInvalid: false,
    name: "",
    age: "",
  });
  const [error, setError] = useState({hide: true});

  const nameInputHandler = (e) => {
    setState((prevState) => {
      return { ...prevState, name: e.target.value, nameInvalid: false };
    });
  };

  const ageInputHandler = (e) => {
    setState((prevState) => {
      return { ...prevState, age: e.target.value, ageInvalid: false };
    });
  };

  const errorClearHandler = () => {
    setError({hide: true})
  }

  const submitHandler = (event) => {
    event.preventDefault();
    // Invalid: pop up the error message
    if (state.name.length === 0 || state.age.length === 0) {
      setState((prevState) => {
        return {
          ...prevState,
          nameInvalid: state.name.length === 0 ? true : false,
          ageInvalid: state.age.length === 0 ? true : false,
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
    setState((prevState) => {
      return { ...prevState, name: "", age: "" };
    });
    setError({hide: true})
    props.onUserAdded({name: state.name, age: state.age});
  };

  return (<div>
    <ErrorPopup error={error} onErrorClear={errorClearHandler}/>
    <Card>
      <form className="userform" onSubmit={submitHandler}>
        <label>Username</label>
        <UserInput
          type="text"
          onChange={nameInputHandler}
          invalid={state.nameInvalid}
          value={state.name}
          id="username"
        />
        <label>Age (in Years)</label>
        <UserInput
          type="number"
          onChange={ageInputHandler}
          invalid={state.ageInvalid}
          value={state.age}
          id="Age"
          min="0"
          step="1"
        />
        <Button>Add User</Button>
      </form>
    </Card>
  </div>);
}
