import React,{useState} from 'react'
import store from '../store/store'

const Counter = ()=> {

  const [state,setState] = useState(store.getState().value)

  //subscribe() -- starts listening to the state updates
  store.subscribe(() =>{ 
    setState(store.getState().value)
  }) 
  
  const unsubscribe = store.subscribe(() =>{ 
    console.log("UN SUBSCRIBE")
  }) 

  //unsubscribe -- stop listening to state updates
  unsubscribe();

  return (
    <div>
        <div><h1>{state}</h1></div>
        <div> 
            <button onClick={()=>{store.dispatch({ type: 'increment' })}}>increment</button>
            <button onClick={()=>{store.dispatch({ type: 'decrement' })}}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter