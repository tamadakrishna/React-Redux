import { createStore, applyMiddleware } from 'redux'


const loggerMiddleware = store => next => action => {
  console.log('logger middleware')
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const CustomMiddleware = applyMiddleware(loggerMiddleware)

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return { value: state.value + 1 }
    case 'decrement':
      return { value: state.value - 1 }
    default:
      return state
  }
}

let store = createStore(counterReducer,CustomMiddleware)


export default store;
