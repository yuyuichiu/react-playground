import React from 'react';
import Card from '../UI/Card';
import titleRibbon from '../../assets/ribbon.png'

import styles from './Meals.module.css'
import MealItem from './MealItems/MealItem';

const Meals = (props) => {
  return <div className={styles.meals}>
    <div className={styles.intro}>
      <img src={titleRibbon} />
      <h3>{'Drink and Desserts'}</h3>
    </div>

    <div className={styles.mealList}>
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
    </div>
  </div>
}

export default Meals