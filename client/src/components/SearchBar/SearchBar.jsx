import React, { useState } from 'react'
import s from './SearchBar.module.css'
import {get_Recipe_Name} from '../../actions/index.js'
import {useDispatch} from 'react-redux'


function SearchBar() {
  const dispatch=useDispatch();
  const [recipe, setRecipe]=useState('')
  
  function handleInputChange(e) {
    e.preventDefault()
    setRecipe(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(get_Recipe_Name(recipe))
    setRecipe('')
  }

  return (
    <form className={s.searchContainer} onSubmit={e=>handleSubmit(e)}>
      <input type="text" className={s.searchInput} value={recipe} placeholder="Search recipe" onChange={e=>handleInputChange(e)} />
      <button type='submit' className={s.searchButton}>Search</button>
    </form>
  )
}

export default SearchBar