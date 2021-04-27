import './footer.css'
function Footer(props){
    return(
        <div className={"footer"}>
            <h3>Це зробив {props.name}</h3>
        </div>
    )
}
export default Footer;