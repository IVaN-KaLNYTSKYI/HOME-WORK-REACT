import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {resetCommentIsLoading, setComment, setCommentError, setCommentIsLoading} from "../../redux";
import {Link} from "react-router-dom";
export default function Home () {
    const {isLoading,comment,error}=useSelector(({comments})=>comments)
    console.log(comment)
    const dispatch=useDispatch();

    const fetchComments= async ()=>{
        try {
            dispatch(setCommentIsLoading())

            const response=await fetch("https://jsonplaceholder.typicode.com/posts")
            const date= await response.json()

            dispatch(setComment(date))
        }
        catch (e){
            console.log(e,"error")
            dispatch(resetCommentIsLoading())
            dispatch(setCommentError("error"))
        }
    }
    useEffect(()=>{
        fetchComments()
    },[])
    if (isLoading) {
        return (
            <div>Loading!!!!</div>
        )
    }
    if (error) {
        return (
            <div>{error}</div>
        )
    }
  return(
      <div>
          {
              comment.map((comment)=>{
                  return<div key={comment.id}>{comment.title}-<Link to={"/home/"+comment.id}>detail</Link></div>
              })
          }
      </div>
  )
}