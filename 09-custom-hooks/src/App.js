import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const taskDataApply = (data) => {
    // Reserve the part that are unrelated to loading, error and things that handle fetch() -- they are performed in custom hooks now
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  }

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks({
      url: 'https://react-test-be173-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }, taskDataApply);
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
