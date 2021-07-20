import React from 'react';
import Card from '../UI/Card'
import UserItem from './UserItem';

import './Users.css'

// Props: users
export default function Users(props) {
    return (<Card>
        {props.users.map((user, idx) => <UserItem key={idx} userInfo={user}/>)}
    </Card>)
}