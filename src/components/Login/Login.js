import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle,loginWithEmailAndPassword,handleEmail,handlePassword,erorr } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || 'home#services';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Please Login</h2>
                <form onSubmit={loginWithEmailAndPassword}>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input onBlur={handleEmail} type="email" className="form-control"placeholder="Enter Your Email" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password </label>
                        <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password"  placeholder="Enter Your Password"className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <p>You do not have an account?<a href="registration">Registration</a></p>
                        <div className="row mb-3 text-danger">
                            {erorr}
                            </div>
                            <br />
                    <button  type="submit" className="btn btn-primary">Login</button>
                    </form>
                <div>or</div>
                <button
                    className="btn btn-primary"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;