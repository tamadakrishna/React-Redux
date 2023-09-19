import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'

const Counter = ()=> {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <div><h1>{count}</h1></div>
        <div> 
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter