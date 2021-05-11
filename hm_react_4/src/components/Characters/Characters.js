import {useEffect, useState} from 'react';
import {getUser} from "../../services/api.futurama";
import Character from "../Character/Character";

export default function Characters() {
    let [user, setUser] = useState([]);

    useEffect(() => {
        getUser().then(value => setUser([...value.data]))
    }, [])
    console.log(user)

    const users=user.filter(value => value.id<10);
    console.log(users)

    return (
        <div>
            {
                users.map(value => <Character
                    key={value.id}
                    {...value}
                />)
            }
        </div>
    )
}