import React from 'react'
import s from './Error404.module.css'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className={s.page_wrapper}>
        <h1 className={s.titlle}>4 0 4</h1>
        <p className={s.paragraf}>No recipes found ! Please go back and try again.</p>
        <div className={s.numbers_layer}>
            <div className={s.number}>?</div>
            <div className={s.number}>¿</div>
            <div className={s.number}>Web</div>
            <div className={s.number}>No found !</div>
            <div className={s.number}>Web</div>
            <div className={s.number}>No found !</div>
            <div className={s.number}>?</div>
            <div className={s.number}>¿</div>
            <div className={`${s.number} ${s._with_shadow}`}>ERROR</div>
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