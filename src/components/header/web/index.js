import React from 'react'
import "./web.css"
function WebHeader() {
  return (
    <div className='web'>
      <div className='web-option'>
        <a href="#project">
          <i class="fi fi-rr-edit-alt option-icons"></i>
          Projects
        </a>
      </div>
      <div className='web-option'>
        <a href="#skills">
          <i class="fi fi-rr-settings option-icons"></i>
          Skills
        </a>
      </div>
      <div className='web-option'>
        <a href="#work">
          <i class="fi fi-rr-briefcase option-icons"></i>
          Work
        </a>
      </div>
      <div className='web-option'>
        <a href="#contact">
        <i class="fi fi-rr-user option-icons"></i>
          Contact
        </a>
      </div>
    </div>
  )
}

export default WebHeader
