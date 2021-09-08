import React, { Fragment } from 'react';
import MeetupItem from './MeetupItem';

import styles from './MeetupList.module.css'

function MeetupList(props) {
  return (<Fragment>
    <ul>
      {props.meetups.map((m, idx) => { return <MeetupItem key={idx} meetupInfo={m} /> })}
    </ul>
  </Fragment>)
}

export default MeetupList