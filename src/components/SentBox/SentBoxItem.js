import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { uiActions } from "../../store/ui-Slice";
import classes from '../Inbox/Inbox.module.css';



const SentboxItem = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const emailClickHandler = (event) => {
        event.preventDefault();
       dispatch(uiActions.changeViewMail(props));
        history.replace('/viewMail');
    }


    return (
        
            <div className={classes.inbox_Item}>

                <div onClick={emailClickHandler}>{props.reciver}</div>
                <div>{props.sub.substring(0,15)}</div>
                <div>{props.content.substring(0,30)}......</div>
                
            </div>
    

    )
}
export default SentboxItem;