import React from "react";
import { FaCheck } from "react-icons/fa6";
import "./plan.css";

function Plan(props) {

    const handleClick = () => {
        window.location.href = "/pay";
    }

    return (
        <div className="plan-info-container">
            <h1>{props.title}</h1>
            <h2>INR ₹{props.price}/month </h2>
            <button style={{backgroundColor: props.bgCol}} onClick={handleClick}>{props.buttonText}</button>
            <p style={{height: "60px"}}>{props.descriptionHeading}</p>
            {props.descriptionPoints.map((item) => {
                return (
                    <p style={{fontSize: "14px"}}><FaCheck style={{marginRight: "10px"}}/> {item}</p>
                )
            })}
        </div>
    )
} 

export default Plan;