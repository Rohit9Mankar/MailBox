import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { SentboxActions } from "../../store/SentSlice";
import Layout from "../Layout/Layout";
import SentList from "./SentList";

const Sentbox=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        const fetchSentMail = async () => {
            const emailUrl = localStorage.getItem('email');
            const response = await fetch(`https://mailbox-e109d-default-rtdb.firebaseio.com/StoredMail/${emailUrl}/sent.json`);
            

            if (response.ok) {
                const data = await response.json();
                let loadedSentMails = [];
             
                for (let key in data) {
                    loadedSentMails.push({
                        id: key, ...data[key]
                    })

                }
              dispatch(SentboxActions.addToSentbox(loadedSentMails));
                
            }
            else {
                alert("something went wrong while loading sent mails");
            }


        }
        fetchSentMail();
    },[dispatch]);

    return(
        <Layout>
            <SentList />
        </Layout>
    )

}
export default Sentbox;