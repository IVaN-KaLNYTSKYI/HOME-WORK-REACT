import {useEffect, useState} from 'react';
import User from "../User/User";
import './Users.css'
export default function Users(){
   const [users,setUsers]=useState([])
    const [item,setItem]=useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers([...value]))
    },[]);
const search=(id)=>{
    let infaPro=users.find(value => value.id===id);
    setItem(infaPro)
}
    return(
<div className={"box"}>
    <div className={"all"}>
        {
            users.map((value)=><User
                key={value.id}
                {...value}
                search={search}
            />)
        }
    </div>
    <div className={"one"}>
        {
            item?(
                <div className={"infa"}>
                    {item.address.street}--
                    {item.address.suite}--
                    {item.address.city}--
                    {item.address.zipcode}
                </div>
            ):(
                <span>no infa</span>
            )
        }
    </div>
</div>
    )
}