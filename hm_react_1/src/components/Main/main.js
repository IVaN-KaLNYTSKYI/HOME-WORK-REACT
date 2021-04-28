import './main.css'
function Main(props){
    const {name,surname,namber}=props
    return(
        <div className={"main"}>
            <p>
             Я {name} {surname}<br/>
             Мені {namber}
            </p>
        </div>
    )
}

export default Main;