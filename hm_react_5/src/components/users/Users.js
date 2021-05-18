import {useEffect, useState} from 'react';
import {getUserSearch} from "../../services/api";
import User from "../user/User";
import {Link, useLocation} from "react-router-dom";
export default function Users (props) {
    let {item:{location: {search}}} = props;
    let page = search.split('?page=')[1];
    console.log(page)
    let [users, setUsers] = useState([]);
    const [counter, setCounter] = useState(1)
    // const fetchData = async () => {
    //     const resp = await fetch('https://reqres.in/api/users?page=' + counter)
    //     const json = await resp.json()
    //     setUsers(json.data)
    // }
    useEffect(()=>{
        // fetchData()
        getUserSearch(page).then(value => setUsers([...value.data.data]))
    },[counter])

    const increment = () => {
        if (counter >= 2) {
            return
        }
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    console.log(counter);

    return(
 <div>
          {
              users.map(value => <User
              key={value.id}
                  {...value}
              />)
          }
         <button onClick={decrement}>back1</button>
          <button onClick={increment}>next1</button>
      </div>
  )
}