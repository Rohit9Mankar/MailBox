import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Layout from "../Layout/Layout";
import classes from './Inbox.module.css';


const InboxViewMail = () => {
    const emailObj = useSelector(state => state.ui.viewMail);
  
    const history = useHistory();

    const backToInboxHandler = () => {

            console.log('Going back to ');
         
            history.replace('/main');
      
    }

    return (
        <Layout>
            <div className={classes.view_Mail}>
                <button onClick={backToInboxHandler}>Back</button>
                <h6>Subject</h6>
                <div>{emailObj.sub}</div>
                <h6>Content</h6>
                <div>{emailObj.content}</div>
            </div>
        </Layout>

    )
};
export default InboxViewMail;