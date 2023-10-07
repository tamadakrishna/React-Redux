import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'



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

let store = createStore(counterReducer,applyMiddleware(thunk))

export const Increment = dispatch =>{
  console.log('thunk started')
  return setTimeout(()=>{
    dispatch({ type: 'increment' })
  },4000)
}


export default store;
