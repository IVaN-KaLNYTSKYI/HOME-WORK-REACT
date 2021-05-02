import './main.css'
import {useState, useEffect} from 'react';
import Header from "../Header/header";

function Main() {
    let [text, setText] = useState("");
    let [age, setAge] = useState("");
    let [arr, setArr] = useState(JSON.parse(localStorage.getItem("arr")) /*|| []*/);
    useEffect(() => {
        localStorage.setItem("arr", JSON.stringify(arr))
    })
    const add = (e) => {
        e.preventDefault();
        setArr([...arr, {text,age,id:Date.now()}])
       /* setText("")
        setAge("")*/
    }
    const change = (e) => {
        text = e.target.value
        setText(text)
    }
    const changetwo = (e) => {
        age = e.target.value
        setAge(age)
    }
    const del = (id) => {
        setArr(arr.filter((value => value.id !== id)))
    }
    return (
        <div className={'main'}>
            <div className={"form"}>
                <form>
                    <input
                        onChange={change}
                        placeholder={"Name"}
                    />
                    <input
                        onChange={changetwo}
                        placeholder={"Age"}
                    />
                    <button onClick={add}>Add</button>
                </form>
            </div>
            <div className={"infa"}>
                {
                    arr.map((item, index) =>
                        <Header
                            key={index}
                            {...item}
                            del={del}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Main;
