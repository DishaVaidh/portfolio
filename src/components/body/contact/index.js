import React from "react";
import Seperator from "../../common/seperator";
import SocialContact from "../../common/social-contact";
import "./contact.css";
function Contact() {
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the plateform.</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/Disha_Resume.pdf")}>
          <i class="fi fi-rr-download download-icon"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
