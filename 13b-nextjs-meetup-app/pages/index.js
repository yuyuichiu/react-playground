import React, { Fragment } from 'react';
import Header from "../components/header/Header"
import MeetupList from '../components/meetup/MeetupList'

/* The home page -- contains list of meetup items */
const dummy_meetups = [
  {
    title: 'Awesome Meetup',
    image: 'https://wkassets-production.s3.ap-east-1.amazonaws.com/styles/field_hero_images/s3/wkcda-tower.jpg?h=d23e7ba4&itok=IHyTkUbu',
    description: 'An awesome meetup in October'
  },
  {
    title: 'Another Cool Meetup',
    image: 'https://wpguynews.com/wp-content/uploads/2021/01/how-to-host-a-meetup-featured-image.jpg',
    description: 'Cool, let us meet at November 1'
  },
]

export default function HomePage(props) {
  return (<Fragment>
    <Header />
    <MeetupList meetups={dummy_meetups}/>
  </Fragment>)
}