import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { CartTotaleQuantity } = useSelector(state => state.cart);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header>
            <nav className={`navbar navbar-expand-lg navbar-dark ${isScrolled ? "sticky" : ""}`} style={{ backgroundColor: "#000000" }}>
                <div className="container-fluid">
                    <div className={`search-container ${isInputFocused ? "focused" : ""}`}>
                        <input
                            type="text"
                            className="form-control responsive-search-input"
                            placeholder="Search ..."
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />

                        <span className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={isInputFocused ? "#000000" : "#E7ECEF"} className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </span>
                    </div>
                    <Link to={"/"} className="navbar-brand">
                        <img src={`${process.env.PUBLIC_URL}/PFF-Images/logo.jpg`} alt="TheMerakiLogo" className={`brand-logo ${isScrolled ? "small-logo" : ""}`} />
                    </Link>
                    <ul className="navbar-nav d-flex flex-row me-1">
                        <li className="nav-item ">
                            <Link to={"/connexion"} className="nav-link text-white" id="" role="button" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                            </svg> </Link>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <Link to={"/cart"} className="nav-link text-white" id="" role="button" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                </svg>
                                <span className="cart-quantity">{CartTotaleQuantity}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
