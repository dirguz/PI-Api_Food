import React from 'react'
import s from './Loading.module.css'
import carga from '../../media/images/carga.gif'

function Loading() {
  return (
    <div className={s.loaderContainer}>
        <div className={s.loader}>
            <img src={carga} alt="Loading..." />
        </div>
    </div>
  )
}

export default Loading