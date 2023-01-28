import React from "react";
import "./mobile.css";
function MobileHeader({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div
        className="close-icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i class="fi fi-rr-cross-circle"></i>
      </div>

      <div className="mobile-options">
        <div className="mobile-option">
          <a target="_blank" href="#project">
            <i class="fi fi-rr-edit-alt option-icons"></i>
            Projects
          </a>
        </div>
        <div className="mobile-option">
          <a target="_blank" href="#skills">
            <i class="fi fi-rr-settings option-icons"></i>
            Skills
          </a>
        </div>
        <div className="mobile-option">
          <a target="_blank" href="#work">
            <i class="fi fi-rr-briefcase option-icons"></i>
            Work
          </a>
        </div>
        <div className="mobile-option">
          <a target="_blank" href="#contact">
            <i class="fi fi-rr-user option-icons"></i>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
