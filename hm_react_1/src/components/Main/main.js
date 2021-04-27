import './main.css'
function Main(props){
    return(
        <div className={"main"}>
            <p>
             Я {props.name} {props.surname}<br/>
             Мені {props.namber}
            </p>
        </div>
    )
}

export default Main;