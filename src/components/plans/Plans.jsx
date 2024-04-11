import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./plans.css";
import Plan from "../plan/Plan";
import allPlans from "./allPlans";

function Plans({ handlePremiumButtonClick, planOpacity }) {
    return (
        <div className="plan-container">
            <div className="plans-top-container">
                <h1>Premium plans</h1>
                <RxCross2 style={{fontSize: "35px", cursor: "pointer"}} onClick={handlePremiumButtonClick} />
            </div>
            <div className="all-plan-container">
                {allPlans.map((element) => {
                    return (
                        <Plan title={element.title} price={element.price} buttonText={element.buttonText} descriptionHeading={element.descriptionHeading} descriptionPoints={element.descriptionPoints} bgCol={element.buttonColor} />
                    )
                })}
            </div>
        </div>
    )
}

export default Plans;