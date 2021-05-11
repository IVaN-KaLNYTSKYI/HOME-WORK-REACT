import {useEffect, useState} from 'react';
import {getInventor} from "../../services/api.futurama";
import Inventor from "../Inventor/Inventor";


export default function Inventorys({url}) {
    let [user, setUser] = useState([]);

    useEffect(() => {
        getInventor().then(value => setUser([...value.data]))
    }, [])
    console.log(user)
console.log(url)
    const users=user.filter(value => value.id<31);
    console.log(users)

    return (
        <div>
            {
                users.map(value => <Inventor
                    key={value.id}
                    {...value}
                    url={url}
                />)
            }
        </div>
    )
}