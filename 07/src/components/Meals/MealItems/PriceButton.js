import React from 'react';

import styles from './PriceButton.module.css'

const PriceButton = (props) => {
  return <button className={`${styles.priceBtn}`}>
    {`$${props.price.toFixed(2)} UP`}
  </button>
}

export default PriceButton