import { useEffect } from "react";
import InboxList from "./InboxList";
import { useDispatch } from "react-redux";
import { InboxActions } from "../../store/InboxSlice";

const Inbox = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRecievedMail = async () => {
            const emailUrl = localStorage.getItem('email');
            const response = await fetch(`https://mailbox-e109d-default-rtdb.firebaseio.com/StoredMail/${emailUrl}/recieved.json`);
            const data = await response.json();

            if (response.ok) {
                let loadedMails = [];
                for (let key in data) {
                    loadedMails.push({
                        id: key, ...data[key]
                    })

                }
                dispatch(InboxActions.addToInBox(loadedMails));
            }
            else{
                alert("something went wrong while loading mails");
            }


        }
        fetchRecievedMail();
    }, [dispatch])
    return (
        <InboxList />
    )
};
export default Inbox;