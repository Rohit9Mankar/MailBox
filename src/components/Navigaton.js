import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from './Layout.module.css';

const Navigation = () => {
    const unreadMailCount=useSelector(state => state.inbox.unreadCount);

    return (
        <nav className={classes.navigation}>
            <ul>
                <li>
                <NavLink
                    to="/main"
                    className={({ isActive }) => isActive ? classes.active : undefined}
                    >
                    Inbox [
                    <span style={{color:"blue"}}> {unreadMailCount} </span>
                    ]
                </NavLink>
                </li>
                <li>
                <NavLink
                 to="/compose"
                 className={({ isActive }) => isActive ? classes.active : undefined}
                >
                    Compose
                 </NavLink>
                </li>
                <li>
                <NavLink
                 to="/sentbox"
                 className={({ isActive }) => isActive ? classes.active : undefined}
                >
                    SentBox
                 </NavLink>
                </li>
                
            </ul>
        </nav>
    )
};
export default Navigation;