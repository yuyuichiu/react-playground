import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import useHttp from '../../hooks/use-http';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { error, isLoading, sendRequest:fetchMeals } = useHttp();

  useEffect(() => {
    // Load meals from the server on initial render
    const applyData = (data) => data.then((x) => setMeals(Object.values(x)[0]));

    fetchMeals({
      method: 'GET',
      url: 'https://react-test-be173-default-rtdb.asia-southeast1.firebasedatabase.app/foodMeals.json'
    }, applyData)
  }, [])

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  const content = (<>
    {isLoading && <h2 className={classes.loading}>Loading...</h2>}
    {error && <h2 className={classes.error}>Something went wrong on loading the menu. Please try again later.</h2>}
    {meals.length > 0 && <ul>{mealsList}</ul>}
  </>);

  return (
    <section className={classes.meals}>
      <Card>
        {content}
      </Card>
    </section>
  );
};

export default AvailableMeals;
