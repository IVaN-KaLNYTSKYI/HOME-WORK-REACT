
import './App.css';
import Counter from "./components/Counter/Counter";
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import HomeDetail from "./components/home-detail/HomeDetail";

function App() {
    return (
        <Router>
            <div>
                <Link style={{margin:"20px"}} to={"/home"}>home</Link>
                <Link to={"/counter"}>counter</Link>
                <Switch>
                    <Route exact path={'/home'} render={() => {
                        return <Home/>

                    }}/>
                    <Route exact path={'/counter'} render={() => {
                        return <Counter/>
                    }}/>
                    <Route path={"/home/:id"} render={({match:{params:{id}}})=>{
                        return <HomeDetail id={id}/>
                    }}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
