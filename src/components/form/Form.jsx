import React, { useState } from "react";
import "./form.css";

function Form() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername('');
        setPassword('');
        window.location.href = "/";
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="username">Username or email address</label>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}  />
                <label htmlFor="password">Password <a href="/">Forgot password?</a></label>
                <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>SignIn</button>
            </form>
            <p className="signup-redirect">New to AccessSign? <a href="/">Create account</a></p>
        </>
    )
}

export default Form;