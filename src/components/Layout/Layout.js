import { Fragment } from "react";
import Navigation from "../Navigaton"

const Layout = (props) => {
    return (
        <Fragment>
            <Navigation />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}
export default Layout;