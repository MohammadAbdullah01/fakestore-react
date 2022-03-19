import React from 'react';
import './Navbar.css'

const Navbar = (props) => {
    return (
        <div className="row container boss d-flex justify-content-between mx-auto">
            <div className="col-2">Logo</div>
            <div className="col-8 d-flex">
                <ul className="d-flex li-container">
                    <li>Home</li>
                    <li>Cart<sup>{props.count}</sup></li>
                    <li>About</li>
                    <li>More</li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar;