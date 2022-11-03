import React, {useState}from 'react'
import s from './Filters.module.css'
import { filterByDiets, orderByScore, orderByName, filterByCreator, get_All_Recipes, resetRecipes} from '../../actions/index';
import { useDispatch } from 'react-redux'

function Filters({setCurrentPage, setOrder,dietType, setIsActive}) {
    const dispatch=useDispatch();
    const [filter, setFilter]=useState('')
    const [filterO, setFilterO] = useState('')
    const [sort, setSort] = useState('')

    const filterCreator = (e) => {
        e.preventDefault();
        dispatch(filterByCreator(e.target.value));
        setFilterO(e.target.value);
        setCurrentPage(1)
        setIsActive(1)
    }

    const filterDiets = (e) => {
        e.preventDefault();
        dispatch(filterByDiets(e.target.value))
        setFilter(e.target.value)
        setCurrentPage(1)
        setIsActive(1)
    }

    const orderScore = (e) => {
        e.preventDefault();
        dispatch(orderByScore(e.target.value))
        setCurrentPage(1);
        setIsActive(1);
        setOrder(`Ordenado ${e.target.value}`)
        setSort(e.target.value)
    }

    const orderName = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setIsActive(1);
        setOrder(`Ordenado ${e.target.value}`)
        setSort(e.target.value)
    }

    function handleClick(e) {
        e.preventDefault()
        dispatch(resetRecipes())
        dispatch(get_All_Recipes())
        setIsActive(1)
        setOrder("")
        setSort('')
        setFilter('')
        setFilterO('')
        
    }

  return (
    <div>
        <div className={s.filterContainer}>
            <button onClick={e => handleClick(e)} className={s.button}>Clear filters</button>
            <select value={sort} className={s.filter} onChange={e=>orderName(e)}>
                <option value='Alphabetical Order'> ALPHABETICAL ORDER </option>
                <option value='AZ'> Ordenar A-Z </option>
                <option value='ZA'> Ordenar Z-A </option>
            </select>
        <select value={sort} className={s.filter} onChange={e=>orderScore(e)}>
            <option value='Order By Score'> ORDER BY SCORE </option>
            <option value='Score-+'> Score -+</option>
            <option value='Score+-'> Score +- </option>
        </select>
        <select value={filterO} className={s.filter} onChange={e=>filterCreator(e)} >
            <option value='ALL'> ALL RECIPES </option>
            <option value='createdInDb'> Recipes Created </option>
            <option value='JE'> Recipes Api </option>
        </select>
        <select className={s.filter} value={filter} onChange={e=>filterDiets(e)}>
            <option value='ALL'> TOTAL RECIPES </option>
            {dietType?.map(el => (
                <option key={el} value={el}>{el}</option>
                ))
            }
        </select>
        </div>
    </div>
  )
}

export default Filters