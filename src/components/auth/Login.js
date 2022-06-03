import { React, useState } from "react";
import './Login.css';
import FatouraLogoDark from "../../assets/images/Fatoura-Logo-Dark.png";
import { GoogleLogin } from 'react-google-login';
import { Button, Form, FormGroup, Input, Container, Col, Row} from "reactstrap";

const Login = (props) => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    const [inputValues, setInputValues] = useState({
        email : '',
        password : ''
    });

    const [validationErrors, setValidationErrors] = useState({
        emailError : '',
        passwordError : ''
    });

    const validate = (name, value) => {
        switch (name) {
            case "email":
                if (!value) {
                    return "Email is Required";
                } 
                else if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
                    return "Enter a valid email address";
                } 
                else {
                    return "";
                }

            case "password":
                if (!value) {
                    return "Password is Required";
                } 
                else {
                    return "";
                }
                
            default: {
                return "";
            }
        }
    };

    const handleChange = (name) => e => {
        setInputValues({...inputValues, [name] : e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        let emailError = validate("email", e.target['email'].value);
        let passwordError = validate("password", e.target['password'].value);
        setValidationErrors({['emailError']: emailError, ['passwordError']: passwordError})
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={6}>
                    <div className="left-container">
                    <img src={FatouraLogoDark} alt="Fatoura logo" className="logo" />
                    <h4>Sign In</h4>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input type="email" placeholder="Enter email" name="email" onChange={handleChange("email")} />
                            <span className="error-text">{validationErrors["emailError"]}</span>

                            <Input type="password" placeholder="Enter password" name="password" onChange={handleChange("password")} />
                            <span className="error-text">{validationErrors["passwordError"]}</span>

                            <a href="#">Forgot your password?</a>
                        </FormGroup>
                        <Button type="submit" className="login">Let me in</Button>
                    </Form>

                    <p>Sign in with Social Media</p>
                    <div className="google">
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                    <p>Let me in? <a href="#">Sign up</a> </p>

                    </div>
                </Col>
                <Col md={6} className="d-none d-md-block">
                    <div className="right-container"></div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
