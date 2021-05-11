import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    Redirect
} from 'react-router-dom';
import InventorDetails from "../InventorDitails/InventorDitails";

export default function Inventor(props) {
    const {title, id, url} = props
    return (
        <div>
            {title}-
            <Link to={url + '/' + id}>user {id} details</Link>
            <Switch>
                <Route exact path={'/inventorys/:id'} render={(props) => {
                    console.log(props)
                    return <InventorDetails/>
                }}/>
            </Switch>
        </div>
    )
}