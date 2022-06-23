import { React, useEffect } from "react";
import './Login.css';
import './Signup.css';
import { GoogleLogin } from 'react-google-login';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AuthApi } from "./Redux/authActions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const state = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    const { register, watch, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
    });
    watch();
    const onSubmit = (data) => {
        dispatch(AuthApi("/users/signUp", data, props.setAuthenticated));
    }

    const navigate = useNavigate();
    useEffect(() => {
        if(props.isAuthenticated !== null)
            navigate('/auth/subscribe-plan');
    }, [props.isAuthenticated, navigate]);

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <>
            <h4>Sign Up</h4>
            <h5 className="error-text">{state.message}</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="name">
                        <div>
                            <input type="text" placeholder="First name" {...register("firstName", {required: "First Name is required", minLength: {value: 3, message: "Enter minimum 3 characters"} })} />
                            {errors.firstName && <span className="error-text">{errors.firstName.message}</span>}
                        </div>
                        <div>
                            <input type="text" placeholder="Last name" {...register("lastName", {required: "Last Name is required", minLength: {value: 3, message: "Enter minimum 3 characters"} })} />
                            {errors.lastName && <span className="error-text">{errors.lastName.message}</span>}
                        </div>
                    </div>

                    <input type="email" placeholder="Email" {...register("email", {required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: "Email address is invalid"} })} />
                    {errors.email && <span className="error-text">{errors.email.message}</span>}

                    <input type="tel" placeholder="Mobile number" {...register("phoneNumber", {required: "Mobile number is required", pattern: {value: /^\d+$/, message: "Mobile number should only contain digits"}, maxLength: {value: 10, message: "Mobile number should be of 10 digits"}, minLength: {value: 10, message: "Mobile number should be of 10 digits"} })} />
                    {errors.phoneNumber && <span className="error-text">{errors.phoneNumber.message}</span>}

                    <input type="password" placeholder="Password" {...register("password", {required: "Password", minLength: {value: 8, message: "Password should be of minimum 8 characters"} })} />
                    {errors.password && <span className="error-text">{errors.password.message}</span>}

                    <input type="text" placeholder="Referal Code" {...register("referallCode", {minLength: {value: 3, message: "Referal code should be of minimum 3 characters"} })} />
                    {errors.referallCode && <span className="error-text">{errors.referallCode.message}</span>}
                <Button type="submit" className="login">Create Account</Button>
            </form>

            <p>Sign up with Social Media</p>
            <div className="google">
                <GoogleLogin
                    clientId="911759613041-41d2uv6i0m0s8gnsras7mqpqldhdjrov.apps.googleusercontent.com"
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
