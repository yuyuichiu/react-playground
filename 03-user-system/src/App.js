import React, { useState } from 'react';
import Users from './components/UserList/Users';
import UserForm from './components/NewUser/UserForm';
import Wrapper from './components/Helper/Wrapper';

import './App.css';

function App() {
  const [users, setUsers] = useState([
    {name: 'Alex', age: 40},
    {name: 'John Doe', age: 32},
  ])

  const userAddedHandler = (userInfo) => {
    let newUsers = users.slice();
    newUsers.unshift({name: userInfo.name, age: userInfo.age});

    setUsers(newUsers);
  }
  

  return (<Wrapper>
    <UserForm onUserAdded={userAddedHandler}/>
    <Users users={users}/>
  </Wrapper>);
}

export default App;
