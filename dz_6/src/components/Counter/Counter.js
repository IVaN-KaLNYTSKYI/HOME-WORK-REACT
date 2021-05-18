import {useDispatch, useSelector} from "react-redux";

export default function Counter() {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch({type: "INC"})
    }
    const incrementSto = () => {
        dispatch({type: "INC_STO"})
    }
    const decrement = () => {
        dispatch({type: "DEC"})
    }
    const decrementSto = () => {
        dispatch({type: "DEC_STO"})
    }
    const reset = () => {
        dispatch({type: "RESET"})
    }
    console.log(counter)
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>inc</button>
            <button onClick={decrement}>dec</button>
            <button onClick={decrementSto}>dec(-100)</button>
            <button onClick={incrementSto}>inc(+100)</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}