import React from 'react'
import s from './Error404.module.css'
import { Link } from 'react-router-dom'
import e404 from '../../media/images/e404.gif'

function Error404() {
  return (
    <div className={s.page_wrapper}>
        <h1 className={s.titlle}>4 0 4</h1>
        <p className={s.paragraf}>No recipes found ! Please go back or refresh and try again.</p>
        <div className={s.numbers_layer}>
        <img src={e404} alt="Recipe not found" />
        </div>
        <div className={s.oops_message}>
            <div className={s.button_err}>
            <Link to='/home'><button className={s.butinter}>Go back</button></Link>
            <button className={s.butinter} onClick={() => window.location.reload()}>Refresh</button>
            </div>
        </div>
    </div>
  )
}

export default Error404