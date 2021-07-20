import React from 'react';
import styled from 'styled-components'

const Item = styled.div`
    border: 1px solid black;
    width: auto;
    padding: 3px 5px;
    border-radius: 5px;
    margin: 10px 0;
    cursor: pointer;
`

// Props: userInfo (object)
export default function UserItem(props) {
    return (<Item>
        {`${props.userInfo.name} (${props.userInfo.age} years old)`}
    </Item>)
}