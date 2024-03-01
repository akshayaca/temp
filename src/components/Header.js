import React from 'react';
import { FaHotel, FaUser } from "react-icons/fa"; 
import '../css/App.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <FaHotel /> 
            </div>
            <div className='heading'><h1>Serive Request Board</h1></div>

            
            <div className="user-profile">
                <a href="/profile">
                    <FaUser /> 
                </a>
            </div>
        </header>
    );
};

export default Header;
