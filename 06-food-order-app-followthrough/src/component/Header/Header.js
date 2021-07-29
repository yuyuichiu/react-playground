import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../asset/food.jpg';
import classes from './Header.module.css'

export default function Header(props) {
  const cartVisibilityHandler = () => {
    props.onCartVisibilityToggle();
  }

  return (<>
    <header className={classes.header}>
      <h1>ReactOrders</h1>
      <HeaderCartButton onCartVisibilityToggle={cartVisibilityHandler}/>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="A table full of tasty food"/>
    </div>
  </>)
}