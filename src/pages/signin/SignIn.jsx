import React from "react";
import "./signin.css";
import Form from "../../components/form/Form";

function  SignIn() {
    return (
        <div className="sin-page">
            <div className="sin-page-top">
                <img src="images/logo.png" className="sin-page-logo" />
                <h2 className="sin-heading">Sign in to AccessSign</h2>
            </div>
            <Form />
        </div>
    )
}

export default SignIn;