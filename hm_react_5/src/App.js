import logo from './logo.svg';
import './App.css';
import Users from "./components/users/Users";
import {Link, BrowserRouter as Router, Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import UserDetails from "./components/userDetails/UserDetails";

function App() {
    let path="/users"

    return (
        <Router>
            <div>
          <Link to={{pathname:path}}>user</Link>
                <Switch>
                <Route exact path={`/users`} render={()=>{
                    return <Users/>
                }}/>
                    <Route path={`/users/:id`} render={({match:{params:{id}}})=>{
                        return <UserDetails id={id}/>
                    }}/>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
