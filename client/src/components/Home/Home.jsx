import React from 'react'
import './Home.css'
// eslint-disable-next-line
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { useState, useEffect } from 'react';
// eslint-disable-next-line
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line
import { get_All_Recipes, get_Diets, resetRecipes} from '../../actions/index';
import fondo2 from '../../media/images/fondo2.jpg'
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
//import Loading from '../Loading/Loading';
import arroz from '../../media/images/arroz.jpg'
//import SearchBar from '../SearchBar/SearchBar';

function Home() {
   

    
  return (
    <div className='home-container'>
        {/* <img className='imagen-fondo' src={fondo2} alt='fondo_home'/> */}
        <h1 className='titulo'>Estas en Home</h1>
        <div className='nav'>
            <Navbar/>
        </div>
        
        <div className='card'>
            
            {/* <Card
            key={e.id}
            name={e.name}
            image={e.image}
            healthScore={e.healthScore}
            dietType={e.dietType || e.dietType.map(d=>d.name)}
            dishTypes={e.dishTypes}
            createdInDB={e.createdInDB}
            /> */}

            <Card
            id={2}
            name='arroz'
            image={arroz}
            healthScore={70}
            dietType={[
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan",
                "deslactosada"
              ]}
            dishTypes={[
                "side dish"
              ]}
            createdInDB={true}
            />                                         
        </div>
        {/* <div>
            <Loading/>
        </div> */}

    </div>
  )
}

export default Home