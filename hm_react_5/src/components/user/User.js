import {Link} from "react-router-dom";

export default function User (props) {
    let path="/users/"
    const {id}=props
    console.log(id)
  return(
      <div>
          {JSON.stringify(props)}
          <Link to={{pathname:(path+id)}}>fdf</Link>
      </div>
  )
}