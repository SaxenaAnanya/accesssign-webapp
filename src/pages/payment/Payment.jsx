import React from "react";
import "./payment.css";

function Payment() {
    return (
        <div style={{display: "flex"}}>
            <div className="payment-container">
                <h1 className="payment-heading">Contact information</h1>
                <div className="email-input-div">
                    <h3 className="input-text-heading">Email</h3>
                    <input className="payment-form-input" placeholder="xyz@example.com" />
                </div>
                <h1 className="payment-heading">Payment method</h1>
                <h3 className="payment-des">Card information</h3>
                <input className="payment-form-input" style={{width: "500px", borderBottom: "1px solid #FDF0D1"}} placeholder="1234 1234 1234 1234" />
                <div className="payment-card-input">
                    <input className="payment-form-input" style={{width: "229.5px", borderRight: "1px solid white"}} placeholder="MM/YY" type="date" />
                    <input className="payment-form-input" style={{width: "229.5px"}} placeholder="CVV" type="text" />
                </div>
                <h3 className="payment-des">Cardholder Name</h3>
                <input className="payment-form-input" style={{width: "500px"}} placeholder="Full name on card" />
                <h3 className="payment-des">Billing address</h3>
                <input className="payment-form-input" style={{width: "500px"}} placeholder="Address" />
                <div className="payment-checkbox-input">
                    <input type="checkbox" name="agreement" style={{width: "24px", height: "24px"}}/>
                    <p htmlFor="agreement" style={{width: "450px"}}>You'll be charged the amount and at the frequency listed above until you cancel. We may change our prices as described in our Terms of Use. You can cancel any time.By subscribing, you agree to OpenAl's Terms of Use and Privacy Policy.</p>
                </div>
                <button style={{backgroundColor: "#0BA37F"}}>Subscribe</button>
            </div>
            <div>
            <h2 style={{marginLeft: "30px", marginTop: "30px"}}>Subscribe to AccessSign</h2>
            <h1 style={{marginLeft: "30px", marginTop: "-10px"}}>₹250/month</h1>
            <div style={{display: "flex", gap: "340px"}}>
            <h3 style={{marginLeft: "30px", marginTop: "30px"}}>AccessSign Pro Subscription</h3>
            <h3 style={{marginLeft: "30px", marginTop: "30px"}}>INR ₹250.00</h3>
            </div>
            <hr style={{width: "60vw", opacity: 0.2}}></hr>
            <div style={{display: "flex", gap: "520px"}}>
            <h3 style={{marginLeft: "30px", marginTop: "30px"}}>Subtotal</h3>
            <h3 style={{marginLeft: "30px", marginTop: "30px"}}>INR ₹250.00</h3>
            </div>
            <hr style={{width: "60vw"}}></hr>
            <div style={{display: "flex", gap: "450px"}}>
            <h3 style={{marginLeft: "30px", marginTop: "30px"}}>Total due today</h3>
            <h3 style={{marginLeft: "30px", marginTop: "30px"}}>INR ₹250.00</h3>
            </div>
            <hr style={{width: "60vw"}}></hr>
            </div>
        </div>
    )
}

export default Payment;