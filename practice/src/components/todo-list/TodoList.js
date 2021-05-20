import {useDispatch, useSelector} from "react-redux";
import {SET_TODO, SET_TODO_FILTER} from "../../redux/actionTypes";
import {useState} from "react";
import List from "../list/List";

export default function TodoList() {
    const {list} = useSelector((state) => state)
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    console.log(list)

    const onChangeValue = ({target: {value}}) => {
        setInputValue(value)
    }
    const add = (e) => {
        e.preventDefault()
        dispatch({type: SET_TODO, payload: inputValue})
    }
    console.log(list)
    const remove=(id)=>{
        dispatch({type:SET_TODO_FILTER,payload:id})
    }

    return (
        <div>
            <input type={"text"} value={inputValue} onChange={onChangeValue}/>
            <button onClick={add}>add</button>
            {
                list.map((value, index) => <List
                    key={index}
                    item={value}
                    index={index}
                    remove={remove}
                />)
            }
        </div>
    )
}