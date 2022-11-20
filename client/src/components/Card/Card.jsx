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
                    <div className={s.recipeName}>
                     <h3>{name}</h3>
                    </div>
                </div>
            </div>
            <div className={`${s.face} ${s.face2}`}>
              <div className={s.content}>
                <p className={s.dietasTitle}>Diets:</p>
               <div className={s.dietas}>
                {dietType?.map(diet => {
                return (
                    <p key={diet}>✔{diet}</p>
                )
                })}
               </div>
                <p className={s.dietasTitle}>Health Score: {health_score}</p>
                <p className={s.dietasTitle}>Dish Types:</p><p> {dishTypes}</p>
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