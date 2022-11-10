import React from 'react'
import s from './Loading.module.css'

function Loading() {
  return (
    <div className={s.loaderContainer}>
        <div className={s.loader}>
         <span>Load&nbsp;ng</span>
        </div>
        <div>
         <span className={s.loader2}></span>
        </div>
    </div>
  )
}

export default Loading