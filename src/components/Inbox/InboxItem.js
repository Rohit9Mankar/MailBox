const InboxItem=(props)=>{
    return(
        <div style={{display:"flex"}}>
            <div>{props.sender}</div>
            <div>{props.sub}</div>
            <div>{props.content}</div>
        </div>
    )
}
export default InboxItem;