import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  // Extract all the tools needed from our custom hook
  const { isLoading, error, sendRequest : addTask } = useHttp();

  // When triggered, executed the request function, which is extracted from our custom hook.
  const enterTaskHandler = (inputVal) => {
    // Nested function to apply scope for param, we can also use .bind() as an alternative
    const taskDataApply = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: inputVal };
  
      props.onAddTask(createdTask);
    }

    // The actual trigger, we enter requestConfig & how we apply the data as param.
    addTask({
      url: 'https://react-test-be173-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {text: inputVal}
     }, taskDataApply);
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
