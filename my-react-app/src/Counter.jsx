import {useState} from 'react'

function Counter(){

const [count, setCount] = useState(0);

const increment = () => {
    //  for use state only

    // setCount(count+1);


// to implement the react updater function we use 

    setCount((c)=>c+1)
    setCount((c)=>c+1)
}

const decrement= () => {
    //  for use state only

    //  setCount(count - 1)

     // to implement the react updater function we use 

    setCount((c)=>c-1)
    setCount((c)=>c-1)
    
}

const reset = () =>{
    setCount(0)

}

return (
   <div>
    <p>{count}</p>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    <button onClick={increment}>Increment</button>
   </div>

);


}

export default Counter