// import React from 'react'
import { useState } from 'react';
import './loginForm.css'
const LoginForm = () => {


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setdateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { fullName, email, dateOfBirth, password, confirmPassword });
    };
    const handleLogInSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { fullName, password });
    };

    const [isSignUp, setIsSignUp] = useState(true);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };
    return (
        <div className="contaner">


            <section className={isSignUp ? 'wrapper' : 'wrapper active'}>
                <div className="form signup">
                    <header onClick={handleToggle}>Signup</header>
                    <form onSubmit={handleSignUpSubmit}>
                        <input type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                        <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="date" placeholder="Date of Birth" value={dateOfBirth} onChange={(e) => setdateOfBirth(e.target.value)} required />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} required />
                        <div className="checkbox">
                            <input type="checkbox" id="signupCheck" />
                            {/* <label for="signupCheck">I accept all terms & conditions</label> */}
                            <label id="signupCheck">I accept all terms & conditions</label>
                        </div>
                        <input type="submit" value="Signup" />
                    </form>
                </div>

                <div className="form login">
                    <header onClick={handleToggle}>Login</header>
                    <form onSubmit={handleLogInSubmit}>
                        <input type="text" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <a href="#">Forgot password?</a>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </section>


        </div>
    )
}

export default LoginForm