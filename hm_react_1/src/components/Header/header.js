import './Header.css'
function Header(props){
    return(
        <div className={"header"}>
            <h3>Name:{props.name}</h3>
            <h4>Surname:{props.surname}</h4>
        </div>
    )
}

export default Header;