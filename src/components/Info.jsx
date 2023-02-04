import React from 'react'
import './Info.css'

function Info() {
  return (
    <div className='main-info'>
        <div className="contacts">
            <h2>Ariet Nasirdinov</h2>
            <h3>Frontend Developer</h3>
            <h4>arietnasir.com</h4>
            <div className="btn-wrapper">
                <button className="btn-mail"><i className="fa fa-envelope"></i> Email</button>
                <button className="btn-linkedin"><i className="fa fa-linkedin"></i> LinkedIn</button>
            </div>
        </div>
        <div className="main-content-wrapper">
            <div className="about">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks.</p>
            </div>
            <div className="interests">
                <h3>Interests</h3>
                <p>Food expert. Manga reader. Listener. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    </div>
  )
}

export default Info