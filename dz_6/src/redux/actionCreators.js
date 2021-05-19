import {RESET_IS_LOADING, SET_ERROR, SET_IS_LOADING, SET_POST} from "./actionTypes/index";

export const setIsLoading=()=>({type:SET_IS_LOADING})
export const resetIsLoading=()=>({type:RESET_IS_LOADING})
export const setError=(payload)=>({type:SET_ERROR,payload})
export const setPost=(data)=>({type:SET_POST,payload:data})