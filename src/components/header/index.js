import React, { useState } from "react";
import WebHeader from "./web/index";
import MobileHeader from "./mobile/index";
import "./header.css";
function Header() {
    const[isOpen,setIsOpen]=useState(false);
  return (
    <div className="header">
      <div className="logo">Portfolio</div>
      <div className="menu">
        <div className="web-menu">
          <WebHeader />
        </div>
        <div className="mobile-menu">
          <div onClick={()=>{setIsOpen(!isOpen)}}>
            <i class="fi fi-rr-menu-burger menu-icon"></i>
          </div>
          {isOpen && <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  );
}

export default Header;
