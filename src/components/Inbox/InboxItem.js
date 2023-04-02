import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { InboxActions } from "../../store/InboxSlice";
import { uiActions } from "../../store/ui-Slice";
import classes from './Inbox.module.css';


const InboxItem = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const emailClickHandler =async (event) => {
        event.preventDefault();

        const emailUrl = localStorage.getItem('email')
        const response = await fetch(`https://mailbox-e109d-default-rtdb.firebaseio.com/StoredMail/${emailUrl}/recieved/${props.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({ ...props, read: true }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('Mail is read');
            dispatch(InboxActions.changeBlueDot(props.id))
            dispatch(InboxActions.changeUnreadCount());
            dispatch(uiActions.changeViewMail(props));
            history.replace('/viewMail');
        }
        else {
            const data_1 = await response.json();
            let errorMessag = "Error in changing read value";
            if (data_1 && data_1.error && data_1.error.message) {
                errorMessag = data_1.error.message;
            }
            alert(errorMessag)

        }
       
        
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
        <div className={classes.inbox_Item}>
            <div className={!props.read ? classes.dot : classes.noDot} />

                <div onClick={emailClickHandler} className={classes.inbox_Item_Click}>{props.sender}</div>
                <div>{props.sub.substring(0,20)}</div>
                <div>{props.content.substring(0,30)}...</div>
                <button onClick={deleteHandler}>Delete</button>
            
        </div>

    )
}
export default InboxItem;