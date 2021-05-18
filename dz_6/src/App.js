import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
    return (
        <Router>
            <div>
                <Link style={{margin:"20px"}} to={"/"}>home</Link>
                <Link to={"/counter"}>counter</Link>
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Home/>

                    }}/>
                    <Route exact path={'/counter'} render={() => {
                        return <Counter/>
                    }}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
