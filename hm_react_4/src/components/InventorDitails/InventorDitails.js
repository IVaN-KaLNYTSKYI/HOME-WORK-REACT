import {useEffect,useReducer, useState} from 'react';

function reducer(state, action){
    switch (action.type){
        case 'ADD_POSTS':
            return {...state, user: action.payload};
    }

}
export default function InventorDetails({item}){
    const{location: {state:{title,id}}}=item
    let [state, dispatch] = useReducer(reducer, {user:null});
    let {user} = state;

    /*const{match:{params:{id}}}=item
    let [user, setUser] = useState(null);
    useEffect(()=>{
        getInventorItem(id).then(value => setUser({...value}))
    },[])
    console.log(user)
    */

    useEffect(()=>{
        dispatch({type: 'ADD_POSTS', payload:{title,id}})
    },[])
    console.log(user)
    return(
        <div>
            {
                user&&<div>
                    {user.title}
                </div>
            }
        </div>
    )
}