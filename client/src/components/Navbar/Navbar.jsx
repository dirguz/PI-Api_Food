import React from 'react'
import './Navbar.css'
import Filters from '../Filters/Filters';
import SearchBar from '../SearchBar/SearchBar';



function Navbar() {
    
  return (
    <div className='filtros'>
        <SearchBar/>
        <Filters/>
        </div>
  )
}

export default Navbar