import {
    Link
} from 'react-router-dom';

export default function Inventor(props) {
    const {title, id, url} = props
    let path = url + '/' + id;
    return (
        <div>
            {title}-
          {/*  <Link to={url + '/' + id}>user {id} details</Link>*/}
            <Link to={{pathname: path, state:props}}> deteils </Link>

        </div>
    )
}