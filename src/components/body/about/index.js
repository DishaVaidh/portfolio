import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'
function About() {
  return (
    <div className='about'>
      <div className='about-top'>
            <div className='about-info'>
                Hello there! I am <span className='info-name'>Disha Vaidh</span>
                
, working as a Software Engineer in Forcepoint.


            </div>
            <div className='about-photo'>
                <img className='profile-picture' src={require('../../../assets/Picture1.jpeg')}></img>
            </div>
      </div>
      <SocialContact/>

    </div>
  )
}

export default About
