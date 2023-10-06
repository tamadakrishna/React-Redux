import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/counterSlice'

const loggerMiddleware = store => next => action => {
  console.log('logger middleware')
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default configureStore({
  reducer: {
    counter: counterSlice,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware.concat(loggerMiddleware)
  },
})