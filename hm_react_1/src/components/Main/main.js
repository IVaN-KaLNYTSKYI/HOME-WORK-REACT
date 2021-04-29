import './main.css'
import {useState} from 'react';
import Header from "../Header/header";
function Main(){
let [text,setText]=useState("");
let [arr,setArr]=useState([]);
const add=(e)=>{
    e.preventDefault();
   let newItem={
    comentari:text,
    id:Date.now()
}
setArr(arr.concat(newItem))
    console.log(arr)
}
const change=(e)=>{
    text=e.target.value
    setText(text)
}
    return(
        <div>
            <Header arr={arr}/>
          <form onSubmit={add}>
              <input
                  onChange={change}
              />
             <button>Add</button>
          </form>
        </div>
    )
}

export default Main;
