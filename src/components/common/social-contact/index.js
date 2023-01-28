import React from 'react'
import './social_contact.css'
import { SocialData } from '../../data/social'
function SocialContact() {
    const data=SocialData;
  return (
    <div className='social-contact'>
      {data.map((item)=>{
        return(
            <a target="_blank" href={item.link}>
                <div className='social-icon-div'>
                    <img src={item.icon} className='social-icon'></img>
                </div>
            </a>
        )
      })}
    </div>
  )
}

export default SocialContact
