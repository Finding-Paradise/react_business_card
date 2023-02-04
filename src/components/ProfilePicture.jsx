import React from 'react'
import pfp from '../images/kobeni.jpg'
import './ProfilePicture.css'

function ProfilePicture() {
  return (
    <div className='info-container-pfp'>
        <img src={pfp} alt="" className='pfp'/>
    </div>
  )
}

export default ProfilePicture