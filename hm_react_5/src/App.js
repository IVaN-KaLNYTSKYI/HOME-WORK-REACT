import './App.css';
import Users from "./components/users/Users";
import {Link, BrowserRouter as Router, Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import UserDetails from "./components/userDetails/UserDetails";
import {useState} from "react";

function App() {
    let path = "/users"
    return (
        <Router>
            <div>
                <Link to={{pathname: path}}>user</Link>
                <Switch>
                <Route exact path={'/users'} render={(props) => {
                    console.log(props)
                    return <Users item={props}/>
                }}/>
                <Route path={'/users/:id'} render={({match: {params: {id}}}) => {
                    return <UserDetails id={id}/>
                }}/>
            </Switch>
               <Link to={{pathname: path,search:"page=1"}}><button>back</button></Link>
              <Link to={{pathname: path,search:"page=2"}}><button>next</button></Link>
            </div>
</Router>
);
}

export default App;
