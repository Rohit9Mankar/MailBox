import { useSelector } from "react-redux";
import InboxItem from "./InboxItem";

const InboxList=()=>{
    const emailsInInBox=useSelector(state=> state.inbox.inboxArray);

    const inboxItems=emailsInInBox.map((item)=>(
          <InboxItem 
          id={item.id}
          key={item.id}
          sender={item.sender}
          sub={item.sub}
          content={item.content}
          />

        ))

        return(
            <>
            {inboxItems}
            
            </>
        )

};
export default InboxList;