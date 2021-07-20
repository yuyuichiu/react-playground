import React, { useState } from 'react';
import styled from 'styled-components';

import FormSubmit from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? '#ccc' : 'red'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${props => props.invalid ? '#fff' : 'salmon'};
  }

  & input.invalid, & input.invalid:focus {
    background-color: salmon;
    border-color: red;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <FormSubmit type="submit">Add Goal</FormSubmit>
    </form>
  );
};

export default CourseInput;
