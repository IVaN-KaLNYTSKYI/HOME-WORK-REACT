import './Header.css'
function Header(props){
    const{text,age,id,del}=props
    return(
    <div className={"text"}>
        <span>{text}</span>
        <span>{age}</span>
        <button className={"btn-del"} onClick={()=>del(id)}>del</button>
       {/* <button onClick={()=>del(text)}>del</button>*/}
    </div>
    )
}

export default Header;
