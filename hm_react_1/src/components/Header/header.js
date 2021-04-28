import './Header.css'
function Header(props){
    const {name,surname}=props
    return(
        <div className={"header"}>
            <h3>Name:{name}</h3>
            <h4>Surname:{surname}</h4>
        </div>
    )
}

export default Header;