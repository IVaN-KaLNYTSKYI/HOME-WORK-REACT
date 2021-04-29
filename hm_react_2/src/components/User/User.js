import './User.css';
import {useState} from 'react';


export  default function User (props){
    const {name,age,isMarried,address}=props
    return(
        <div className={"user"}>
            <h3>{name}</h3>
            <p>{age}-{isMarried}-{address.city}</p>
        </div>
    )
}