import './Header.css'
function Header(props){
    return(
    <div>
                {
                    props.arr.map((item,index )=>
                    <p key={index}>{item.text}</p>
                )
                }
    </div>
    )
}

export default Header;
