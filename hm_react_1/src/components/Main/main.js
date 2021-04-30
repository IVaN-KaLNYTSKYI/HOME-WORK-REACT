import './main.css'
import {useState} from 'react';
import Header from "../Header/header";
function Main(){
let [text,setText]=useState("");
let [arr,setArr]=useState([]);
const add=(e)=>{
    e.preventDefault();
setArr(arr.concat({
    text:text,
    id:Date.now()
}))
    console.log(arr)
}
const change=(e)=>{
    text=e.target.value
    setText(text)
}
const del=(id,e)=>{
    setArr(arr.filter((value => value.id!==id)))
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
