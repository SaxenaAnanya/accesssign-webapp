import React, { useState } from "react";
import Webcam from "react-webcam";
import Dropdown from 'react-dropdown';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import "./home.css";
import 'react-dropdown/style.css';
import Plans from "../../components/plans/Plans";

function Home() {
    const options = [
        'Hindi', 'English'
    ];

    const [dropdownSelected, setDropdownSelected] = useState('Language');
    const [planOpacity, setPlanOpacity] = useState(0);

    const handlePremiumButtonClick = () => {
        console.log("Premium button clicked");
        setPlanOpacity(!planOpacity);
    };

    return (
        <>
            <div className="home-top-container">
                <h1 className="site-name">AccessSign</h1>
                <img src="images/logo.png" alt="Logo" className="homepage-logo" />
                <button className="home-premium-button" onClick={handlePremiumButtonClick}>
                    <MdOutlineWorkspacePremium /> Premium
                </button>
            </div>
            <div className="home-webcam-container">
                <Webcam width={600} mirrored={true} className="home-webcam" />
            </div>   
            <div className="home-option-container">
                <Dropdown options={options} className="home-options" value={dropdownSelected} placeholder="Select an option" />
            </div> 
            <div style={{opacity: planOpacity, display: planOpacity ? "flex" : "none"}} className="plan-div">
                <div className="plan-overlay"></div>
                <Plans handlePremiumButtonClick={handlePremiumButtonClick} planOpacity={planOpacity} />
            </div>
        </>
    );
}

export default Home;
