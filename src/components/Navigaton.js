import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const unreadMailCount=useSelector(state => state.inbox.unreadCount);

    return (
        <nav>
            <ul>
                <li>
                <NavLink
                    to="/main"
                    >
                    Inbox{unreadMailCount}
                </NavLink>
                </li>
                <li>
                <NavLink
                 to="/compose"
                >
                    Compose
                 </NavLink>
                </li>
                <li>
                <NavLink
                 to="/sentbox"
                >
                    SentBox
                 </NavLink>
                </li>
            </ul>
        </nav>
    )
};
export default Navigation;