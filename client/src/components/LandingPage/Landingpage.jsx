import React from 'react';
import d from './Landingpage.module.css';
import { Link } from 'react-router-dom';
import landing1 from '../../media/videos/landing1.mp4'


function Landingpage() {
  return (
    <div className={d.container}>
      <video className={d.video} src={landing1} autoPlay loop muted/>
      <h1>API-Food</h1>
      <h2>Bienvenidos</h2>
      <div className={d.Link}>
        <Link to='/home'>
            <button className={d.button}>INGRESAR</button>
        </Link>
      </div>
    </div>
  )
}

export default Landingpage