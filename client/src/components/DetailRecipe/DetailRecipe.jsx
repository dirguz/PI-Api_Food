import React, {useEffect, useState} from 'react'
import s from './DetailRecipe.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import {recipe_Detail, resetDetail} from '../../actions/index.js'
import Error404 from '../Error404/Error404'


function DetailRecipe() {
    let {id} = useParams()
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const details = useSelector(state => state.detail)

    if(Object.keys(details).length > 0 && loading){
      setLoading(false);
  }
    useEffect(() => {
        dispatch(recipe_Detail(id))
        return () => {dispatch(resetDetail())}
    },[dispatch,id])

  return (
    <div className={s.detailContainer}> 
        {Object.keys(details).length > 0 && !loading ?
            <div key={details.id} className={s.detailBox}>
              <div className={s.detailHeader}>
                <Link to='/home'><button className={s.detailButton}>Go back</button></Link>
                <h1 className={s.detailHeader_title}>{details.name}</h1>
              </div>
              <p className={s.detailHealth}>HealthScore: {details.healthScore}</p>
              <div className={s.detailMiddle}>
                <div className={s.detailImg}>
                  <img src={details.image} alt={details.name} />
                </div>
                <div className={s.detailDiets}>
                  <p className={s.detailHealth}>Diets</p>
                  {details.dietType?.map(item => {
                    return(
                      <p key={item} className={s.detailDiet}>
                        ✔{item}
                      </p> 
                    )
                  })}
                  {!details.dietType.includes('gluten free') && <p>✔gluten free</p>}
                  {!details.dietType.includes('vegan') && <p>✔vegan</p>}
                  {!details.dietType.includes('vegetarian') && <p>✔vegetarian</p>}
                  {!details.dietType.includes('dairy free') && <p>✔dairy Free</p>}
                </div>
              </div>
              <div className={s.detailSummary} >
                  <p className={s.detailHealth}>Summary</p>
                  <div
                      dangerouslySetInnerHTML={{__html: details.summary}}
                    />
                  
              </div>
              <div className={s.detailSteps}>
                <p className={s.detailHealth}>Steps</p>
                <p>{details.instructions}</p>   
              </div>
            </div>
            :!Object.keys(details).length > 0 && loading ?(
            <Loading/>
            ):details.length === 0 && (
              <Error404/>
            )
        }
    </div>
    )

}

export default DetailRecipe