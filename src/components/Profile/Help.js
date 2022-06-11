import React from "react";
import './Help.css';
import { Container, Row, Button, Col } from "react-bootstrap";
import { Input } from "reactstrap";

const Help = () => {
    return (
        <Container fluid className="help">
            <div className="help-box box">
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="text-center">
                        <h1>Let's Get in Touch!</h1>
                    </Col>
                    <Col xs={12} md={6}>
                        <form>
                            <div className="form-div">
                                <Input type="text" placeholder="Full Name" />
                                <Input type="text" placeholder="Email Address" />
                                <Input type="textarea" placeholder="Message" rows={5} />
                            </div>
                            <Button className="white-button">Send</Button>
                        </form>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Help;