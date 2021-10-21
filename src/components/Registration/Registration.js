import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Registration = () => {
    const { signInUsingGoogle,handleNewUser,handleEmail,handlePassword,erorr,handleName } = useAuth();
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
                <h2>Please Registration</h2>
                <form onSubmit={handleNewUser}>
                <div className="row mb-3">
                        <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input onBlur={handleName} type="name" className="form-control"placeholder="Enter Your Name" id="inputName3"/>
                </div>
                </div>
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
                    <p>Do you already have an account?<a href="login">Login</a></p>
                        <div className="row mb-3 text-danger">
                            {erorr}
                            </div>
                            <br />
                    <button  type="submit" className="btn btn-primary">Registration</button>
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

export default Registration;