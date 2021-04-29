import './Header.css'
function Header(props){
    return(
    <div>
                {props.arr.map((item,index )=>
                    <p key={index}>{item.comentari}</p>
                )
                }
    </div>
    )
}

export default Header;
