import React from 'react'
import s from './card.module.css'
import { Link } from 'react-router-dom'

function Card({id, image, name, healthScore, dietType, dishTypes}) {
  return (
    <div className={s.cardContainer}>
      {/* <div className={s.boxImage}>
          <img src={image} alt={name} />
      </div>
        <div className={s.cardDescription}>
          <p className={s.cardTitle} >{name}</p>
          <p className={s.healthScore}>HealthScore: {healthScore}</p>
          <div className={s.dietContainer}>
            {dietType?.map(diet => {
                return (
                    <p key={diet}>✔{diet}</p>
                )
            })}
            {!dietType.includes('gluten free') && <p>✔gluten free</p>}
            {!dietType.includes('vegan') && <p>✔vegan</p>}
            {!dietType.includes('vegetarian') && <p>✔vegetarian</p>}
            {!dietType.includes('dairy free') && <p>✔dairy Free</p>}
          </div>
          <div className={s.dietContainer}>
              <p>{dishTypes}</p>
          </div>
          <Link to={`/recipes/${id}`}  key = {id} >
              <button className={s.button}>Recipe detail</button>
          </Link>
        </div> */}
      <div className={s.card}>
            <div className={`${s.face} ${s.face1}`}>
                <div className={s.content}>
                    <img src={image} alt={name}/>
                    <h3>{name}</h3>
                </div>
            </div>
            <div className={`${s.face} ${s.face2}`}>
              <div className={s.content}>
                {dietType?.map(diet => {
                return (
                    <p key={diet}>✔{diet}</p>
                )
                })}
                {!dietType.includes('gluten free') && <p>✔gluten free</p>}
                {!dietType.includes('vegan') && <p>✔vegan</p>}
                {!dietType.includes('vegetarian') && <p>✔vegetarian</p>}
                {!dietType.includes('dairy free') && <p>✔dairy Free</p>}
                <p>{dishTypes}</p>
                <Link to={`/recipes/${id}`}  key = {id} >
                <button className={s.button}>Recipe detail</button>
                </Link>
              </div>
            </div>
        </div>
      </div>
    )
}

export default Card