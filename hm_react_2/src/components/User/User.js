import './User.css';
import {useState} from 'react';


export  default function User (props){
    const {name,age,isMarried,address,del,id}=props
    return(
        <div className={"user"}>
            <h3>{name}</h3>
            <p>{age}-{isMarried.toString()}-{address.city}</p>
            <button onClick={()=>del(id)}>del</button>
        </div>
    )
}