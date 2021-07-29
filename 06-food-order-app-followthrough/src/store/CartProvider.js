import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  // totalAmount means totalPrice of all items in cart
  items: [],
  totalAmount: 0
}

const cartReducer = (prevState, action) => {
  if (action.type === 'ADD') {
    // Check for repeated item before editing the cart
    const existingItemIndex = prevState.items.findIndex(x => x.id === action.item.id);
    const existingItem = prevState.items[existingItemIndex];
    let updatedItem;
    let updatedItems;

    if(existingItem) {
      // edit the copy of target item
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount
      };
      // then clone the prevState items, and replace the old one
      updatedItems = [...prevState.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // If new item, we simply concat an item into the clone items array
      updatedItems = [...prevState.items].concat(action.item);
    }

    // Update total amount by adding the new amount to the current one
    const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount
    return {items: updatedItems, totalAmount: updatedTotalAmount}
  }
  if (action.type === 'REMOVE'){
    const targetItemIndex = prevState.items.findIndex(x => x.id === action.item.id);
    const targetItem = prevState.items[targetItemIndex];
    const updatedTotalAmount = prevState.totalAmount - targetItem.price;
    let updatedItems;
    if(targetItem.amount === 1){
      // remove target data by filter
      updatedItems = prevState.items.filter(item => item.id !== action.item.id)
    } else {
      const updatedItem = { ...targetItem, amount: targetItem.amount - 1 };
      updatedItems = [...prevState.items]
      updatedItems[targetItemIndex] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount }
  }

  return defaultCartState;
}

// A component to setup Context Providers
// -- setup the initial values from context template
// -- pass it as a Provider for us to put onto affected areas
export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item })
  }

  const removeItemToCartHandler = (item) => {
    dispatchCartAction({type: 'REMOVE', item: item })
  }

  // The initial values of the context
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  }

  return (
  <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>)
}