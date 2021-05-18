import './main.css'
import {useState, useEffect} from 'react';
import Header from "../Header/header";

function Main() {
    let [textSearch, setTextSearch] = useState("");
    let [text, setText] = useState("");
    let [textNotes, setTextNotes] = useState("");
    let [arr, setArr] = useState(JSON.parse(localStorage.getItem("arr")) /*|| []*/);
    useEffect(() => {
        localStorage.setItem("arr", JSON.stringify(arr))
    })

    const add = (e) => {
        e.preventDefault();
        setArr([...arr, {text, textNotes, id: Date.now()}])
        /* setText("")
         setAge("")*/
    }
    const change = (e) => {
        text = e.target.value
        setText(text)
    }
    const changetwo = (e) => {
        textNotes = e.target.value
        setTextNotes(textNotes)
    }
    const del = (id) => {
        setArr(arr.filter((value => value.id !== id)))
    }
    const update = (id) => {
        /* setArr(arr.filter((value => value.id !== id)))*/
    }
    const search = arr.filter((value => value.text.toLowerCase().includes(textSearch.toLowerCase())));

    return (
        <div className={'main'}>
            <div className={'search'}>
                <form className={"form2"}>
                    <input
                        onChange={event => setTextSearch(event.target.value)}
                        placeholder={"Search"}
                    />
                </form>
            </div>
            <div className={"box-main"}>
                <div className={"form"}>
                    <form>
                        <input
                            onChange={change}
                            placeholder={"Name"}
                        />
                        <input
                            onChange={changetwo}
                            placeholder={"TEXT"}
                        />
                        <button onClick={add}>Add</button>
                    </form>
                </div>
                <div className={"infa"}>
                    {
                        search
                            /*.filter((item)=>{
                            if(textSearch===""){
                                return item
                            }
                            else if (item.text.toLowerCase().includes(textSearch.toLowerCase())){     // ще такий спосіб пошуку
                                return item
                            }

                        })*/
                            .map((item, index) =>
                                <Header
                                    key={index}
                                    {...item}
                                    del={del}
                                    update={update}
                                />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Main;
