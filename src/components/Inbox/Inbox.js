import { useEffect } from "react";
import InboxList from "./InboxList";
import { useDispatch } from "react-redux";
import { InboxActions } from "../../store/InboxSlice";
import Layout from "../Layout/Layout";

const Inbox = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRecievedMail = async () => {
            const emailUrl = localStorage.getItem('email');
            const response = await fetch(`https://mailbox-e109d-default-rtdb.firebaseio.com/StoredMail/${emailUrl}/recieved.json`);
            const data = await response.json();

            if (response.ok) {
                let loadedMails = [];
                let unreadCount = 0;
                for (let key in data) {
                    if (!data[key].read) {
                        unreadCount += 1;
                    }
                    loadedMails.push({
                        id: key, ...data[key]
                    })

                }
                dispatch(InboxActions.assignUnreadCount(unreadCount));
                dispatch(InboxActions.addToInBox(loadedMails));
            }
            else {
                alert("something went wrong while loading mails");
            }


        }
    const interval=setInterval(()=>{
        fetchRecievedMail();
    },2000) ;

    return ()=> {clearInterval(interval)};

    }, [dispatch]);

    return (

        <Layout>
            <InboxList />
        </Layout>

    )
};
export default Inbox;