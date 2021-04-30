import "./User.css"
export default function User(props){
    const {id,name,username,email,phone,search}=props
    return(
        <div className={"user"}>
            {id}--
            {name}--
            {username}--
            {email}--
            {phone}
            <button onClick={()=>search(id)}>infa</button>
        </div>
    )
}