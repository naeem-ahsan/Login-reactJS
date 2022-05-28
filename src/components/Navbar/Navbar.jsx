import React, { useState } from "react";
import { BiCaretDown } from 'react-icons/bi'

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import logo from "../../assets/AWG-logo.png";

import LoginPopup from "../LoginPopup/LoginPopup";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [popup, setPopup] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <a href="/">Home</a>
        </li>
        <li className="app__flex p-text">
          <a href="/">About</a>
        </li>
        <li className="app__flex p-text">
          <a href="/">Insurance <BiCaretDown/></a>
        </li>
        <li className="app__flex p-text">
          <a href="/">Claims <BiCaretDown/></a>
        </li>
        <li className="app__flex p-text">
          <a href="/">Contact Us</a>
        </li>
        <li className="app__flex p-text">
          <button href="/" onClick={() => setPopup(true)}>
            Login/Sign Up
          </button>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li>
                <a href="/" onClick={() => setToggle(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="/" onClick={() => setToggle(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="/" onClick={() => setToggle(false)}>
                  Insurance
                </a>
              </li>
              <li>
                <a href="/" onClick={() => setToggle(false)}>
                  Claims
                </a>
              </li>
              <li>
                <a href="/" onClick={() => setToggle(false)}>
                  Contact Us
                </a>
              </li>
              <li>
                <button href="/" onClick={() => setPopup(true)}>
                  Login/Sign Up
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
      
      <LoginPopup trigger={popup} setTrigger={setPopup}>
          <h1 className="login__form">Login </h1>
      </LoginPopup>
    </nav>
  );
};

export default Navbar;
