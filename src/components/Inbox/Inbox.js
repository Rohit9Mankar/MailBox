import { useCallback,useEffect } from "react";
import InboxList from "./InboxList";
import { useDispatch } from "react-redux";
import { InboxActions } from "../../store/InboxSlice";
import Layout from "../Layout/Layout";
import useFetch from "../CustomHook/useFetch";

const Inbox = () => {
    const dispatch = useDispatch();
    const emailUrl = localStorage.getItem('email');
    //useFetch is custom hook to do api calls
    const { data, error } = useFetch(`https://mailbox-e109d-default-rtdb.firebaseio.com/StoredMail/${emailUrl}/recieved.json`);
    const refreshingInbox=useCallback(()=>{
        if(!error){
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
           else{
            alert(error);
           }
    },[data,dispatch,error])

    useEffect(() => {
        
        
        const intervalId = setInterval(() => {
         
            refreshingInbox();
        
        }, 2000);

        return () =>  clearInterval(intervalId) ;

    }, [refreshingInbox]);


    return (

        <Layout>
            <InboxList />
        </Layout>

    )
};
export default Inbox;