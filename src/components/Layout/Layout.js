import { Fragment } from "react";
import Navigation from "../Navigaton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = (props) => {
    return (
        <Fragment>
            <h1>Mail Box</h1>
            <hr></hr>
            
                <Row>
                    <Col sm={3}>
                        <Navigation />
                    </Col>
                    <Col sm={9}>

                        <main>
                            {props.children}
                        </main>
                    </Col>
                </Row>
          


        </Fragment>
    )
}
export default Layout;