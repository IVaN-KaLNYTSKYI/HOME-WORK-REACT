import {useEffect, useState} from 'react';
import {getInventorItem} from "../../services/api.futurama";
export default function InventorDetails({item}){
    const{match:{params:{id}}}=item
    let [user, setUser] = useState(null);
    useEffect(()=>{
        getInventorItem(id).then(value => setUser({...value}))
    },[])
    console.log(user)
    return(
        <div>
            {
                user&&<div>
                    {user.data.title}
                </div>
            }
        </div>
    )
}