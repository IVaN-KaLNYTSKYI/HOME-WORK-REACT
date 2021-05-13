import {useEffect, useState} from 'react';
import {getUserSearch} from "../../services/api";
import User from "../user/User";
import {Link} from "react-router-dom";
export default function Users () {

    let [page,setPage]=useState("")
    const decrement=()=>{
        setPage(1)
    }
    const increment=()=>{
        setPage(2)
    }
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        getUserSearch(page).then(value => setUsers([...value.data.data]))
    },[page])
  return(
      <div>
          {
              users.map(value => <User
              key={value.id}
                  {...value}
              />)
          }
          <button onClick={decrement}>back</button>
          <button onClick={increment}>next</button>

      </div>
  )
}