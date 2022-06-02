import { React, useState } from "react";
import './Login.css';
import './Signup.css';
import { GoogleLogin } from 'react-google-login';
import { Button, Form, FormGroup, Input, Container, Col, Row} from "reactstrap";

const Signup = (props) => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    const [inputValues, setInputValues] = useState({
        fname : '',
        lname : '',
        email : '',
        mobile : '',
        password : '',
        referal : ''
    });

    const [validationErrors, setValidationErrors] = useState({
        fnameError : '',
        lnameError : '',
        emailError : '',
        mobileError : '',
        passwordError: ''
    });

    const validate = (name, value) => {
        switch (name) {
            case "fname":
                if (!value) {
                    return "First name is Required";
                } 
                else {
                    return "";
                }

            case "lname":
                if (!value) {
                    return "Last name is Required";
                } 
                else {
                    return "";
                }

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

            case "mobile":
                if (!value) {
                    return "Mobile number is Required";
                } 
                else if (value.length != 10) {
                    return "Enter a valid mobile number";
                } 
                else {
                    return "";
                }

            case "password":
                if (!value) {
                    return "Password is Required";
                } 
                else if (value.length < 8 || value.length > 15) {
                    return "Please fill at least 8 character";
                } 
                else if (!value.match(/[a-z]/g)) {
                    return "Please enter at least lower character.";
                } 
                else if (!value.match(/[A-Z]/g)) {
                    return "Please enter at least upper character.";
                } 
                else if (!value.match(/[0-9]/g)) {
                    return "Please enter at least one digit.";
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
        setValidationErrors({ ['fnameError']: validate("fname", e.target['fname'].value), ['lnameError']: validate("lname", e.target['lname'].value), ['emailError']: validate("email", e.target['email'].value), ['mobileError']: validate("mobile", e.target['mobile'].value), ['passwordError']: validate("password", e.target['password'].value) })
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={6}>
                    <div className="left-container">
                    <img src="https://fatoura.work/assets/images/Fatoura-Logo-Dark.png" alt="Fatoura logo" className="logo" />
                    <h4>Sign Up</h4>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <div className="name">
                                <div>
                                    <Input type="text" placeholder="Enter first name" name="fname" className="fname" onChange={handleChange("fname")} />
                                    <span className="error-text">{validationErrors["fnameError"]}</span>
                                </div>

                                <div>
                                    <Input type="text" placeholder="Enter last name" name="lname" className="lname" onChange={handleChange("lname")} />
                                    <span className="error-text">{validationErrors["lnameError"]}</span>
                                </div>
                            </div>

                            <Input type="email" placeholder="Enter email" name="email" onChange={handleChange("email")} />
                            <span className="error-text">{validationErrors["emailError"]}</span>

                            <Input type="tel" placeholder="Enter mobile number" name="mobile" onChange={handleChange("mobile")} />
                            <span className="error-text">{validationErrors["mobileError"]}</span>

                            <Input type="password" placeholder="Enter password" name="password" onChange={handleChange("password")} />
                            <span className="error-text">{validationErrors["passwordError"]}</span>

                            <Input type="text" placeholder="Enter referal code (optional)" name="referal" onChange={handleChange("referal")} />
                            <span className="error-text">{validationErrors["referalError"]}</span>
                        </FormGroup>
                        <Button type="submit" className="login">Create Account</Button>
                    </Form>

                    <p>Sign up with Social Media</p>
                    <div className="google">
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Sign up with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                    <p>Already a member? <a href="#">Sign In</a> </p>

                    </div>
                </Col>
                <Col md={6} className="d-none d-md-block">
                    <div className="right-container"></div>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
