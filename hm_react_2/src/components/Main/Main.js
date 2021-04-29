import User from "../User/User";
import {useState} from 'react';
import {user} from '../../UserDb/UserDb'
export default function Main(){
    let [users, setUsers] = useState(user)
    users.sort((a, d) => a.age > d.age);
    const removeUser = () => {
        users.pop();
        setUsers([...users]);
    }
    const del=(id)=>{
        setUsers(users.filter((item)=>item.id!==id))
    }
    return(
        <div>
            {
                users.map((value, index) =>
                    <User key={index}
                          {...value}
                          del={del}
                    />)


            }
            <button onClick={removeUser}>delete</button>
        </div>
    )
}