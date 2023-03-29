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

    const deleteHandler = async (event) => {
        event.preventDefault();
        const emailUrl = localStorage.getItem('email');

        const response=await fetch(`https://mailbox-e109d-default-rtdb.firebaseio.com/StoredMail/${emailUrl}/recieved/${props.id}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.ok){
            console.log('mail deleted');
            dispatch(InboxActions.deleteMail(props.id));
        }
        else{
            const data_1 = await response.json();
            let errorMessag = "Error Occured while deleting mail";
            if (data_1 && data_1.error && data_1.error.message) {
                errorMessag = data_1.error.message;
            }
            alert(errorMessag)
        }
    }

    return (
        <>
            <div className={!props.read ? classes.dot : classes.noDot} >

                <div onClick={emailClickHandler}>{props.sender}</div>
                <div>{props.sub}</div>
                <div>{props.content}</div>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </>

    )
}
export default InboxItem;