import {useEffect, useState} from 'react';
import {getUser} from "../../services/api";
export default function UserDetails ({id}) {
    let [users, setUsers] = useState(null);
    useEffect(()=>{
        getUser(id).then(value => setUsers({...value.data.data}))
    },[id])
    console.log(users)
  return(
      <div>
          {JSON.stringify(users)}
      </div>
  )
}