import React, { useState } from 'react';
import './component/Button1.css';
import './hero.css';
import whyus from './whyus';
import logo from './component/images/logoCrazy.jpg';
// import MenuAndContent from './Content';
function Hero() {
    const [isEditing, setIsEditing] = useState(false);
    const [navVisible, setNavVisible] = useState(false);
    const toggleNav = () => {
        setNavVisible(!navVisible);
    }
    const handleHeroEdit = () => {
        setIsEditing(!isEditing);
    };

    const [activePage, setActivePage] = useState();
    // Initial active page
    const handleMenuClick = (page) => {
        setActivePage(page);
    };
    var cTime = new Date().toLocaleTimeString();
    var cDate = new Date().toDateString();

    return (
        <header className="boxy">
            <div className="div1">
                <img className="imgz" src={logo} alt="Logo" />
                <nav id="nav" className={`nav1 ${navVisible ? 'show-nav' : ''}`}>
                    <a href="Footer1">Home</a>
                    <a href="# ">About Me</a>
                    <a href="WhyChooseUs" onClick={() => handleMenuClick('whyus')}>Why US </a>
                    <a href="#">Services</a>
                    <a href="#">Contact me</a>
                    <a href="#">MyBlogs</a>
                    <a href="#">My Skills</a>
                </nav>
            </div>
            <div>

                <div className="scroll-container">
                    <div className="scroll-text" >
                        <nav>
                            Welcome Mohamad Rizk to Your Private Dashboard ! Here You Can Personalize Your Data ! Current date & time: {cDate}, {cTime}</nav>
                    </div>
                </div>

                <div id="polygon-image" className="heads">
                    <div className="flex-item">
                        <p>Welcome to My Portfolio</p>
                    </div>
                    <div className="flex-item">
                        <h1>CRAZY WEB UI</h1>
                    </div>
                    <div className="flex-item" >
                        <button className="button1" style={{ color: "black", marginLeft: "1%" }} >Let's Edit </button>
                        <button className="button1" style={{ marginLeft: "7%" }} >Let's Be Together</button>
                    </div>
                </div>

            </div>

        </header >
    );
}
export default Hero;
