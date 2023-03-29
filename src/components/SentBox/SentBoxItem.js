import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { uiActions } from "../../store/ui-Slice";




const SentboxItem = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const emailClickHandler = (event) => {
        event.preventDefault();
       dispatch(uiActions.changeViewMail(props));
        history.replace('/viewMail');
    }


    return (
        
            <div>

                <div onClick={emailClickHandler} style={{display:'flex'}}>{props.reciver}</div>
                <div>{props.sub}</div>
                <div>{props.content}</div>
                
            </div>
    

    )
}
export default SentboxItem;