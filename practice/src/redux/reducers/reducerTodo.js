import {SET_TODO, SET_TODO_FILTER} from "../actionTypes";

const initialState={
    list:[]
}

export const reducer=(state=initialState,action)=>{
    switch (action.type){
        case SET_TODO:{
            return {
                list:[...state.list,action.payload]
            }
        }
        case SET_TODO_FILTER:{
            const ret=state.list.filter((value,index)=>index!==action.payload)
            console.log(action.payload)
            console.log(ret)
            return {
               ...state,list: ret
            }
        }

        default:
            return state
    }
}
