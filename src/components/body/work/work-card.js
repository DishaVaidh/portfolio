import React from 'react'
import "./work-card.css"
import "../skills/skills.css"
function Workcard({work}) {
  return (
    <div className='work-card'>
      <img className='company-logo' src={work.companyLogo}></img>
      <div className='work-info'>
        <label className='company-name skills-section-title'>{work.company}</label>
        <div className='work-design work-dates'>
          <label>{work.designation}</label>
        </div>
        <div className='work-dates'>
          <label>{work.dateJoining}-</label><label>{work.dateEnd}</label>
        </div>
        
        
        <div className='work-description'>
          <p>{work.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Workcard
