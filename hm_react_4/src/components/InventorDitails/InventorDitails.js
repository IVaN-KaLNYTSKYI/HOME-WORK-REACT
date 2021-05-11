import {useEffect, useState} from 'react';
import {getInventorItem} from "../../services/api.futurama";
export default function InventorDetails({item}){
    let [user, setUser] = useState(null);
    useEffect(()=>{
        getInventorItem(item.match.params.id).then(value => setUser({...value}))
    })
    const {title}=user
    return(
        <div>
            {
                user&&<div>
                    {title}
                </div>
            }
        </div>
    )
}