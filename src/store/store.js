import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/counterSlice'
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    counter: counterSlice,
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})