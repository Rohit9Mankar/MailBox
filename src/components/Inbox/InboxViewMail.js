import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { InboxActions } from "../../store/InboxSlice";


const InboxViewMail = () => {
    const emailObj = useSelector(state => state.ui.viewMail);
    const dispatch = useDispatch();
    const history = useHistory();

    const changeReadValueHandler = async () => {
        const emailUrl = localStorage.getItem('email')
        const response = await fetch(`https://mailbox-e109d-default-rtdb.firebaseio.com/StoredMail/${emailUrl}/recieved/${emailObj.id}.json`, {
            method: 'PUT',
            body: JSON.stringify({ ...emailObj, read: true }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('Mail is read');
            dispatch(InboxActions.changeBlueDot(emailObj.id))
            dispatch(InboxActions.changeUnreadCount());
            history.replace('/main/inbox');
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

    return (

        <div>
            <button onClick={changeReadValueHandler}>Back</button>
            <div>{emailObj.sub}</div>
            <div>{emailObj.content}</div>
        </div>
    )
};
export default InboxViewMail;