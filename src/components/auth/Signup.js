import { React, useState } from "react";
import './Login.css';
import './Signup.css';
import { GoogleLogin } from 'react-google-login';
import { Button, Form, FormGroup, Input} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupApi } from "./Redux/authActions";
import { useForm } from "react-hook-form";

const Signup = () => {
    const dispatch = useDispatch();

    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    watch();
    const onSubmit = (data) => {
        console.log(data);
        dispatch(signupApi());
    }

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <>
            <h4>Sign Up</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="name">
                        <div>
                            <input type="text" placeholder="First name" {...register("fname", {required: "First Name is required", minLength: {value: 3, message: "Enter minimum 3 characters"} })} />
                            {errors.fname && <span className="error-text">{errors.fname.message}</span>}
                        </div>
                        <div>
                            <input type="text" placeholder="Last name" {...register("lname", {required: "Last Name is required", minLength: {value: 3, message: "Enter minimum 3 characters"} })} />
                            {errors.lname && <span className="error-text">{errors.lname.message}</span>}
                        </div>
                    </div>

                    <input type="email" placeholder="Email" {...register("email", {required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: "Email address is invalid"} })} />
                    {errors.email && <span className="error-text">{errors.email.message}</span>}

                    <input type="number" placeholder="Mobile number" {...register("mobile", {required: "Mobile number is required", valueAsNumber: true, maxLength: {value: 10, message: "Mobile number should be of 10 digits"}, minLength: {value: 10, message: "Mobile number should be of 10 digits"} })} />
                    {errors.mobile && <span className="error-text">{errors.mobile.message}</span>}

                    <input type="password" placeholder="Password" {...register("password", {required: "Password", minLength: {value: 8, message: "Password should be of minimum 8 characters"} })} />
                    {errors.password && <span className="error-text">{errors.password.message}</span>}

                    <input type="text" placeholder="Referal Code" {...register("referal", {minLength: {value: 3, message: "Referal code should be of minimum 3 characters"} })} />
                    {errors.referal && <span className="error-text">{errors.referal.message}</span>}
                <Button type="submit" className="login">Create Account</Button>
            </form>

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
            <p>Already a member? <Link to="/auth/login">Sign In</Link> </p>
        </>
    );
}

export default Signup;
