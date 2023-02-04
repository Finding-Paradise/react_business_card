import React from 'react'
import Footer from '../components/Footer'
import Info from '../components/Info'
import ProfilePicture from '../components/ProfilePicture'

function HomePage() {
  return (
    <div className='wrapper'>
      <ProfilePicture/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default HomePage