import redux from 'redux'

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === 'ADD') {
    return { counter: state.counter + 1 }
  }
  if (action.type === 'REDUCE') {
    return { counter: state.counter - 1 }
  }
  return { counter: 0 }
}


const counterStore = redux.createStore(counterReducer);

// function counterSubscriber() {
//   console.log(counterStore.getState());
// }

// counterStore.subscribe(counterSubscriber);

// counterStore.dispatch({ type: 'ADD' });

export default counterStore