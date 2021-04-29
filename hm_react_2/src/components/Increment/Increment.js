import {useState} from 'react';
export  default function Increment(){
    let [counter, setCounter] = useState(0);
    const increment =()=>{
        counter++;
        setCounter(counter);
    }
    const decrement =()=>{
        counter--;
        setCounter(counter);
    }
    const reset =()=>{
        counter=0;
        setCounter(counter);
    }
    return(
        <div>
               <button onClick={increment}>increment</button>
               <button onClick={decrement}>decrement</button>
               <button onClick={reset}>reset</button>
                counter={counter}
        </div>
    )
}