import { React, useEffect } from "react";
import './Login.css';
import { GoogleLogin } from 'react-google-login';
import { Button, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AuthApi } from "./Redux/authActions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const state = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    const { register, watch, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
    });
    watch();
    const onSubmit = (data) => {
        dispatch(AuthApi("/users/login", data, props.setAuthenticated));
    }

    const navigate = useNavigate();
    useEffect(() => {
        if(props.isAuthenticated !== null)
            navigate('/pages/dashboard');
    }, [props.isAuthenticated, navigate]);

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <>
            <h4>Sign In</h4>
            <h5 className="error-text">{state.message}</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <input type="email" placeholder="Email" {...register("email", {required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: "Email address is invalid"} })} />
                    {errors.email && <span className="error-text">{errors.email.message}</span>}

                    <input type="password" placeholder="Password" {...register("password", {required: "Password", minLength: {value: 8, message: "Password should be of minimum 8 characters"} })} />
                    {errors.password && <span className="error-text">{errors.password.message}</span>}
                </FormGroup>
                {/* <div>
                    <a href="/pages/forgotPassword">Forgot your password?</a>
                </div> */}  
                <Button type="submit" className="login">Let me in</Button>
            </form>

            <p>Sign in with Social Media</p>
            <div className="google">
                <GoogleLogin
                    clientId="911759613041-41d2uv6i0m0s8gnsras7mqpqldhdjrov.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            <p>Let me in? <Link to="/auth/signup">Sign Up</Link> </p>
        </>
    );
}

export default Login;
