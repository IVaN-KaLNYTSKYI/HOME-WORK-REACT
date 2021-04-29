import {user} from "./UserDb/UserDb";
import './App.css';
import User from "./components/User/User";
import {useState} from 'react';
import Increment from "./components/Increment/Increment";
import Main from "./components/Main/Main";


function App() {

    return (
        <div className="App">
            <Main/>
            <br/>
            <Increment/>
        </div>
    );
}

export default App;
