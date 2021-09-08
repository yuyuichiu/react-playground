import React, { Fragment } from 'react';

import Header from "../../components/header/Header"
import NewMeetupForm from '../../components/meetup/NewMeetupForm';

export default function AddMeetup(props) {
  return (<Fragment>
    <Header />
    <NewMeetupForm />
  </Fragment>)
}