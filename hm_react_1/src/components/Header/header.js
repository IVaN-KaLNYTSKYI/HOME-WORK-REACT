import './Header.css'
function Header(props){
    const{text,del}=props
    return(
    <div className={"text"}>
        {text}
        <button onClick={()=>del(text)}>del</button>
       {/* <button onClick={()=>del(text)}>del</button>*/}
    </div>
    )
}

export default Header;
