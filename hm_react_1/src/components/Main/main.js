import './main.css'
import {useState,useEffect} from 'react';
import Header from "../Header/header";
function Main(){
let [text,setText]=useState("");
let [arr,setArr]=useState(JSON.parse(localStorage.getItem("arr"))||[]);
useEffect(()=>{
    localStorage.setItem("arr",JSON.stringify(arr))
})
const add=(e)=>{
    e.preventDefault();
    setArr([...arr,{text}])
    setText("")
    console.log(arr)
}
const change=(e)=>{
    text=e.target.value
    setText(text)
}
const del=(text)=>{
    setArr(arr.filter((value => value.text!==text)))
}
    return(
        <div>
            {
                    arr.map((item,index )=>
                        <Header
                        key={index}
                            {...item}
                            del={del}
                        />
                    )
            }
          <form >
              <input
                  onChange={change}
              />
             <button onClick={add}>Add</button>
          </form>
        </div>
    )
}

export default Main;
