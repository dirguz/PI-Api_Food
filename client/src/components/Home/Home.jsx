import React from 'react'
import s from './Home.module.css'
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_All_Recipes, get_Diets, resetRecipes} from '../../actions/index';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination';


function Home() {
  const dispatch = useDispatch()
  const diets = useSelector(state=>state.diets)
  const allRecipes = useSelector(state => state.recipes)
  
  // eslint-disable-next-line
  const [order, setOrder] = useState("");
  const [isActive,setIsActive] = useState(1)

  const [currentPage, setCurrentPage] = useState(1)
  const recipesPerPage= 9
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipe= allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
  
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    //lo mismo que hacer mapDispatchToProps
    dispatch(get_All_Recipes())
    dispatch(get_Diets())
    //cuando se desmonte el componente se ejecuta el return
    return ()=>{dispatch(resetRecipes())}},[dispatch]) //este array  para que no se genere un loop infinito, va a escuchar a la dependencia dispatch

  return (
    <div className={s.home_container}>
      <Navbar/>
      <div className='nav'>
        <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} diets={diets} setIsActive={setIsActive} />
      </div>
      {(allRecipes.length > 0) && (
       <>
          <Pagination
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          pagination={pagination}
          setCurrentPage={setCurrentPage}
          setIsActive={setIsActive}
          isActive={isActive}
          currentPage={currentPage}
          />
        {/* Renderizado de las cards acorde a la pagina*/}
          <div className={s.homeList}>
            {currentRecipe && currentRecipe.map((e) => {
            return(
                <Card
                key={e.id}
                id={e.id}
                name={e.name}
                image={e.image}
                health_score={e.health_score}
                dietType={e.dietType || e.diets.map(d=>d.name)}
                dishTypes={e.dishTypes}
                createdInDB={e.createdInDB}
                />)
             })}
          </div>
        </>
      )}
      {(allRecipes.length === 0) && <Loading/>}
    </div>
  )
}

export default Home