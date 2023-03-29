import { useSelector } from "react-redux"
import SentboxItem from "./SentBoxItem";

const SentList=()=>{
    const sentEmails=useSelector(state=> state.sentbox.sentArray);
    
    const sentEmailList=sentEmails.map((item)=>(
        <SentboxItem
        id={item.id}
        key={item.id}
        reciver={item.reciver}
        sender={item.sender}
        sub={item.sub}
        content={item.content}
        />

      ))

      return(
          <div>
             {sentEmailList}
          </div>
      )
};
export default SentList;