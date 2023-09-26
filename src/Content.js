import React, { useState } from 'react';
import Hero from './hero';
import Bestservices from './bestservices';
import Whyus from './whyus';
import './index.css';
function MenuAndContent() {
    const [activePage, setActivePage] = useState('hero'); // Initial active page

    const handleMenuClick = (page) => {
        setActivePage(page);
    };

    return (
        <div className="menu-and-content">
            <div className="menu">
                <div className="menu-content">
                    <div className="menu-item">
                        <a href="#hero" onClick={() => handleMenuClick('hero')}>Hero Section</a>
                    </div>
                    <div className="menu-item">
                        <a href="#bestservices" onClick={() => handleMenuClick('bestservices')}>Best Services Section</a>
                    </div>
                    <div className="menu-item">
                        <a href="#whyus" onClick={() => handleMenuClick('whyus')}>Why Choose Us?</a>
                    </div>
                    <div style={{ padding: '10px 0' }}>
                        <a href="#experience" >Experience</a>
                    </div>
                    <div style={{ padding: '10px 0' }}>
                        <a href="#latestblog" >Latest Blog</a>
                    </div>
                    <div style={{ padding: '10px 0' }}>
                        <a href="#projects" >Projects</a>
                    </div>
                    <div style={{ padding: '10px 0' }}>
                        <a href="#footer" >Footer</a>
                    </div>
                    <div style={{ padding: '10px 0' }}>
                        <a href="#contact" >Contact Us </a>
                    </div>
                    <div style={{ padding: '10px 0' }}>
                        <a href="#page9" >Page 9</a>
                    </div>
                    <div style={{ padding: '10px 0' }}>
                        <a href="#page10" >Page 10</a>
                    </div>
                </div>
            </div>
            <div id="content" style={{ flex: 1, paddingLeft: '20px' }}>
                <h2>Welcome Mr.Rizk !</h2>
                {activePage === 'hero' && <Hero />}
                {activePage === 'bestservices' && <Bestservices />}
                {activePage === 'whyus' && <Whyus />}

            </div>
        </div>
    );
}

export default MenuAndContent;
