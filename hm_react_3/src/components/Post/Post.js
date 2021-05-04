
export default function Post(props){
    const {id,title,searchPost}=props
    return(
        <div className={"user"}>
            {id}--
            {title}--
            <button onClick={()=>searchPost(id)}>infa</button>
        </div>
    )
}
