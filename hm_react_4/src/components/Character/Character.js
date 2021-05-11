
export default function Character(props){
    const {name:{last},images:{main}}=props
    return(
        <div>
            {last}--
            <img alt={last} src={main}/>
        </div>
    )
}