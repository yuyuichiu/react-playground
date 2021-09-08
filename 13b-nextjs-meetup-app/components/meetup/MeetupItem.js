import React from 'react';
import Button from '../ui/Button';

import styles from './MeetupItem.module.css'

function MeetupItem (props) {
  return <div className={styles.meetup}>
    <img src={props.meetupInfo.image}/>
    <h2>{props.meetupInfo.title}</h2>
    <p>{props.meetupInfo.description}</p>
    <Button>Show Details</Button>
  </div>
}

export default MeetupItem