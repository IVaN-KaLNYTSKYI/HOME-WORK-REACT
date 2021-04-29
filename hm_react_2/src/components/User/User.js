import './User.css';


export  default function User (props){
    const {id, name, age, isMarried, address, del} = props

    return(
        <div className={"user"}>
            <h3>{name}</h3>
            <p>{age}-{isMarried.toString()}-{address.city}</p>
            <button onClick={() => del(id)}>del</button>
        </div>
    )
}
