import './Header.css'

function Header(props) {
    const {text, textNotes, id, del, update} = props
    return (
        <div className={"text"}>
            <div className={"text-infa"}>
                <span>NAME:{text}</span>
                <span>TEXT:{textNotes}</span>
            </div>
            <div className={'box-btn'}>
                <button className={"btn-up"} onClick={() => update(id)}>update</button>
                <button className={"btn-del"} onClick={() => del(id)}>del</button>
            </div>
        </div>
    )
}

export default Header;
