import React from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter'

const ForwardCounter = () => {
  const counter = useCounter(0); // state inside hooks is tied to this component

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
