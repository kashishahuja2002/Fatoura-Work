import { React } from "react";
import './Auth.css';
import FatouraLogoDark from "../../assets/images/Fatoura-Logo-Dark.png";
import { Container, Col, Row} from "reactstrap";
import { Outlet } from "react-router-dom";
import sectionImage from "../../assets/images/section3.3.svg";

const Auth = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={6}>
                    <div className="left-container">
                        <img src={FatouraLogoDark} alt="Fatoura logo" className="logo" />
                        <Outlet />
                    </div>
                </Col>
                <Col md={6} className="d-none d-md-block">
                    <div className="right-container">
                        <img src={sectionImage} alt="Section" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Auth;
