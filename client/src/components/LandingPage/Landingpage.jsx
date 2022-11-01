import React from 'react';
import './Landingpage.css';
import { Link } from 'react-router-dom';
import landing1 from '../../media/videos/landing1.mp4'


function Landingpage() {
  return (
    <div className='landing-container'>
      <video className='video' src={landing1} autoPlay loop muted/>
      <h1>Bienvenidos</h1>
      <div className='Link'>
        <Link to='/home'>
            <button className='btn'>INGRESAR</button>
        </Link>
      </div>
    </div>
  )
}

export default Landingpage