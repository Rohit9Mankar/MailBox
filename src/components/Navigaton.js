import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                <NavLink
                    to="/inbox"
                    >
                    Inbox
                </NavLink>
                </li>
                <li>
                <NavLink
                 to="/compose"
                >
                    Compose
                 </NavLink>
                </li>
              
            </ul>
        </nav>
    )
};
export default Navigation;