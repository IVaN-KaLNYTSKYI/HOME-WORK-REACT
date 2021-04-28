import './footer.css'
function Footer(props){
    const {name}=props
    return(
        <div className={"footer"}>
            <h3>Це зробив {name}</h3>
        </div>
    )
}
export default Footer;