import './App.css';
import Characters from "./components/Characters/Characters";
import Inventorys from "./components/Inventorys/Inventorys";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import InventorDetails from "./components/InventorDitails/InventorDitails";


function App() {
    return (
        <Router>
            <div>
                <div><Link to={'/characters'}>Characters</Link></div>
                <div><Link to={'/inventorys'}>Inventorys</Link></div>
                <Switch>
                    <Route exact={true} path={'/characters'} render={()=>{
                        return <Characters/>
                    }}/>
                    <Route exact={true} path={'/inventorys'} render={({match: {url}})=>{
                        console.log(url)
                        return <Inventorys url={url}/>
                    }}/>
                    <Route path={'/inventorys/:id'} render={(props)=>{
                        console.log(props)
                        return <InventorDetails item={props}/>
                    }}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
