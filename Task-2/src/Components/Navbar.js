import React from 'react'
import './Navbar.css' 

const Navbar = ({onButtonSubmit}) => {
    return (
        <div className="nb">
            <div className="navbar" id="navbar">
                <a href="https://supraja-chilukuri.github.io/LGMVIP-WebDev/Task1/" className="istreamzio" target="_blank"> iStreamzio </a>
                <button href="#" className="getusers" onClick={onButtonSubmit}>Get Users</button>  
            </div>
        </div>
    );
};

export default Navbar