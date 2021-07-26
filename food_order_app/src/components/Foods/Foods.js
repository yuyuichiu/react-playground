import React, { useState } from 'react';
import FoodItem from './FoodItem';

import Card from '../UI/Card'

export default function Foods(props) {
  const foods = [
    {
      id: 1,
      title: "Egg tart",
      description: "Warm, crispy tarts",
      price: 2.5,
    },
    {
      id: 2,
      title: "Apple Pie",
      description: "Pie made with fresh american apples.",
      price: 5,
    },
    {
      id: 3,
      title: "Chocolate Cake",
      description: "Cake made with chocolate",
      price: 10,
    },
    {
      id: 4,
      title: "Special Chocolate Cake",
      description: "Special version -- Cake made with chocolate",
      price: 20,
    },
  ]

  return (<Card>
    {foods.map((f,idx) => <FoodItem key={idx} foodInfo={f} onAddCartItem={(info) => props.onAddCartItem(info)} />)}
  </Card>)
}