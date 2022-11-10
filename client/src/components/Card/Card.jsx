import React from 'react'
import s from './card.module.css'
import { Link } from 'react-router-dom'

function Card({id, image, name, health_score, dietType, dishTypes}) {
  return (
    <div className={s.cardContainer}>
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
                <p>Health Score: {health_score}</p>
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