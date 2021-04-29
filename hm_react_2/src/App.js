import {user} from "./UserDb/UserDb";
import './App.css';
import User from "./components/User/User";
import {useState} from 'react';
import Increment from "./components/Increment/Increment";


function App() {
    let [users, setUsers] = useState(user)
    users.sort((a, d) => a.age > d.age);

    const del=(id)=>{
        setUsers(users.filter(user => user.id !== id))
    }

    const removeUser = () => {
        users.pop();
        setUsers([...users]);
    }
    return (
        <div className="App">
            {
                users.map((value, index) =>
                    <User key={index}
                          {...value}
                          del={del}
                    />)


            }
            <button onClick={removeUser}>delete</button>
            <br/>
            <Increment/>
        </div>
    );
}

export default App;
