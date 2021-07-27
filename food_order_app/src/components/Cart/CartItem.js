import React from "react";
import { BsFillTrashFill } from 'react-icons/bs'

import styles from "./CartItem.module.css";
import AmountButton from "../UI/AmountButton";

export default function CartItem(props) {
  // Pass state up
  const amountEditHandler = (item, action) => {
    props.onAmountEdit(item, action);
  };

  return (
    <div className={styles.foodItem}>
      <div>
        <h3>{props.item.title}</h3>
        <p className={styles.item}>{props.item.description}</p>
        <p className={styles.foodPrice}>${props.item.price}</p>
      </div>

      <div className={styles.foodItemControl}>
        <AmountButton onClick={() => amountEditHandler(props.item, "0")}>
          <BsFillTrashFill/>
        </AmountButton>

        <AmountButton onClick={() => amountEditHandler(props.item, "+")}>
          +
        </AmountButton>

        <p>
          {
            props.cart[props.cart.findIndex((x) => x.id === props.item.id)]
              .amount
          }
        </p>

        <AmountButton onClick={() => amountEditHandler(props.item, "-")}>
          -
        </AmountButton>
      </div>
    </div>
  );
}
