import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { InboxActions } from "../../store/InboxSlice";
import classes from './Inbox.module.css';


const InboxItem = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const emailClickHandler = (event) => {
        event.preventDefault();
        dispatch(InboxActions.changeViewMail(props));
        history.replace('/viewMail');
    }

    return (
        <>
            <div className={!props.read ? classes.dot : classes.noDot} onClick={emailClickHandler}>
                
                <div>{props.sender}</div>
                <div>{props.sub}</div>
                <div>{props.content}</div>
            </div>
        </>

    )
}
export default InboxItem;