import React, { useEffect, useState } from 'react'
import s from './Navbar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'



function Navbar() {
  const [show, setShow]=useState('')
  useEffect(() => {}, [show])
  return (
    <header className={s.headerContainer}>
      <p className={s.headerLogo} ><Link to='/'>App-Food</Link></p>
      <SearchBar setShow={setShow}/>
      <Link to='/recipe'><button className={s.headerCreate} >Create recipe</button></Link>
    </header>
  )
}

export default Navbar