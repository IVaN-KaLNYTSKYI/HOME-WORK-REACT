import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";
import {setCommentError, setCommentId} from "../../redux";

export default function HomeDetail ({id}) {
    const {comments_id,error}=useSelector(({comments})=>comments)
    console.log(comments_id)
    const dispatch=useDispatch()

    const fetchPostId= async ()=>{
        try {
            const response=await fetch("https://jsonplaceholder.typicode.com/posts/"+id)
            console.log(response)
            const date=await response.json()
            dispatch(setCommentId(date))
        }
        catch (e){
            console.log(e,"error")
            dispatch(setCommentError("error"))
        }
    }

    useEffect(()=>{
fetchPostId()
    },[])

    if (error) {
        return (
            <div>{error}</div>
        )
    }
  return(
      <div>
          {comments_id.title}
      </div>
  )
}