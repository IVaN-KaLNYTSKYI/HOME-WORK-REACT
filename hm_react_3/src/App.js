
import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div >
        <Router>
            <ul>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
            </ul>
            <Switch>
                <Route path={"/users"}>
                    <Users/>
                </Route>
                <Route path={"/posts"}>
                    <Posts/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
