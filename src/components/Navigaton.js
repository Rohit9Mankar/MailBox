import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const unreadMailCount=useSelector(state => state.inbox.unreadCount);

    return (
        <nav>
            <ul>
                <li>
                <NavLink
                    to="/main/inbox"
                    >
                    Inbox{unreadMailCount}
                </NavLink>
                </li>
                <li>
                <NavLink
                 to="/main/compose"
                >
                    Compose
                 </NavLink>
                </li>
              
            </ul>
        </nav>
    )
};
export default Navigation;