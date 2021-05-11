import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    Redirect
} from 'react-router-dom';

export default function Inventor(props) {
    const {title, id, url} = props
    return (
        <div>
            {title}-
            <Link to={url + '/' + id}>user {id} details</Link>

        </div>
    )
}