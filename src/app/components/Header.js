
"use client"
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Dropdown from "./Dropdown";

const Header = () => {
  const [isStar, setIsStar] = useState(true);

  const handleClick = () => {
    setIsStar(!(isStar));
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <img src="images/LOGO.svg" alt="Ecell Logo" />
          {/* <a href="" className="logo">Your Logo</a> */}
          <div className="nav-center">
            <Link href="#">Home</Link>
            <Link href="#">Speakers</Link>
            <Link href="#">Partners</Link>
            <Link href="#">Events</Link>
            <Link href="#">Tickets</Link>
            <Link href="#">HiRes</Link>
            <Link href="#">Agenda</Link>
          </div>
          <div className="auth-links">
            <Link href="#" className="login">Login</Link>
            <Link href="#" className="register">Register</Link>
          </div>
          <button className="toggle-btn" onClick={handleClick}>
            {isStar ? (
              <FaBars />
            ) : (
              <AiOutlineClose />
            )}
          </button>
          {/* {!isStar && <Dropdown />} */}
        </nav>
      </header>
      {isStar ? null : <Dropdown />

      }
    </>

  );
};

export default Header;
