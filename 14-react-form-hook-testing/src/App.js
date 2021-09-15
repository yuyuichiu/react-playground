import React from 'react'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import './App.css';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    // Plug in register function in input
    // The register function receive 2 parameters, first is the id & second are criteria
    // you can just pass the value, or an object that contains the error message as well

    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor='firstname'>First Name</label>
        <input type='text' {...register('firstname', {
          required: 'This field is required',
          pattern: { value: /^[A-Za-z]{5,}$/, message: 'Your name should only have letters' },
          minLength: { value: 5, message: 'Your name is too short for this form :(' },
        })}></input>
        {/* react-hook-form can output your predefined message like this */}
        {errors.firstname && <span>{errors.firstname.message}</span>}

        <label htmlFor='lastname'>Last Name</label>
        <input type='text' {...register('lastname', { required: 'This field is required' })}></input>
        {errors.lastname && <span>{errors.lastname.message}</span>}

        <label htmlFor='age'>Age</label>
        <input type='number' {...register('age', { 
          min: { value: 1, message: 'Please enter a valid age' },
          max: { value: 150, message: 'Please enter a valid age' },
          required: true
        })}></input>
        {errors.age && <span>{errors.age.message}</span>}

        <label htmlFOr='isDeveloper'>Are you a developer?</label>
        <select {...register('isDeveloper', { required: 'This field is required' })}>
          <option value="yes">Yes</option>
          <option value='no'>No</option>
        </select>
        {errors.isDeveloper && <span>This field is required!</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
