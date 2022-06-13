import { React } from "react";
import './Auth.css';
import FatouraLogoDark from "../../assets/images/Fatoura-Logo-Dark.png";
import { Container, Col, Row} from "reactstrap";
import Login from "./Login";
import Signup from "./Signup";

const Auth = (props) => {

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={6}>
                    <div className="left-container">
                        <img src={FatouraLogoDark} alt="Fatoura logo" className="logo" />
                        <Signup />
                    </div>
                </Col>
                <Col md={6} className="d-none d-md-block">
                    <div className="right-container"></div>
                </Col>
            </Row>
        </Container>
    );
}

export default Auth;