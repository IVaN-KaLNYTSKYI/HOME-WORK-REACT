import './Header.css'
function Header(props){
    const{text,id,del}=props
    return(
    <div>
        {text}
        <button onClick={()=>del(id)}>del</button>
    </div>
    )
}

export default Header;
