import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

// action attributes -- type & value
const emailReducer = (prevState, action) => {
  // when user is typing something
  if (action.type === 'USER_INPUT') {
    return {value: action.value, isValid: action.value.includes('@')}
  }
  // when user is not focusing on the email field
  if (action.type === 'USER_BLUR') {
    return {value: prevState.value, isValid: prevState.value.includes('@')}
  }

  return { value: '', isValid: false }
}

const pwReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.value, isValid: action.value.length > 7}
  }
  if (action.type === 'USER_BLUR') {
    return {value: state.value, isValid: state.value.length > 7}
  }

  return { value: '', isValid: false }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: '',
    isValid: null
  })

  const [pwState, dispatchPw] = useReducer(pwReducer, {
    value: '',
    isValid: null
  })

  
  // Alias for destructuring
  const { isValid: emailIsValid } = emailState;
  const { isValid: pwIsValid } = pwState;
  useEffect(function() {
    let formValidator = setTimeout(() => {
      setFormIsValid(emailIsValid && pwIsValid)
      console.log('timer executed')
    }, 200);

    return () => clearInterval(formValidator);
  }, [emailState, pwState])

  const emailChangeHandler = (event) => {
    dispatchEmailState({type: 'USER_INPUT', value: event.target.value});
    // setFormIsValid(emailState.isValid && pwState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPw({type: 'USER_INPUT', value: event.target.value});
    // setFormIsValid(emailState.isValid && pwState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmailState({type: 'USER_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPw({type: 'USER_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, pwState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          label="E-mail"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <div
          className={`${classes.control} ${
            pwState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            value={pwState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
