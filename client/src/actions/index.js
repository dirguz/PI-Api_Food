import axios from "axios"
import { GET_ALL, GET_ALL_DIETS, SEARCH_BY_NAME, FILTER_BY_DIETS, ORDER_BY_SCORE, ORDER_BY_NAME, RECIPE_DETAIL, POST_RECIPE, FILTER_BY_CREATOR } from "./actions_types"

export const get_All_Recipes = () => (dispatch) => {
    return fetch('http://localhost:3001/recipes')
    .then(response => response.json())
    .then(info => dispatch({type:GET_ALL, data:info}))
    .catch(error=>console.log(error))
}

export const get_Diets= () => (dispatch) => {
    return fetch('http://localhost:3001/diets')
    .then(response => response.json())
    .then(info => dispatch({type:GET_ALL_DIETS, data:info}))
    .catch(error=>console.log(error))
}

export const get_Recipe_Name = (name) => (dispatch) => {
    return fetch(`http://localhost:3001/recipes?name=${name}`)
    .then(response => response.json())
    .then(info => dispatch({type:SEARCH_BY_NAME, data:info}))
    .catch(error=>dispatch({type:SEARCH_BY_NAME, data:[]}))
}

export const filterByDiets = (diet) => {
    return {type: FILTER_BY_DIETS, data:diet}
}

export const orderByScore = (score) => {
    return {type: ORDER_BY_SCORE, data: score}
}

export const orderByName = (name) => {
    return {type: ORDER_BY_NAME, data: name}
}

export const recipe_Detail = (id) => (dispatch) => {
        return fetch(`http://localhost:3001/recipes/${id}`)
        .then(response => response.json())
        .then(info => dispatch({type:RECIPE_DETAIL, data:info}))
        .catch(error => dispatch({type:RECIPE_DETAIL, data:''}))
}

export const post_Recipe = (data) => {
    // return fetch("http://localhost:3001/recipes", {
    //         method: 'POST',
    //         headers:{
    //             'Content-Type': 'application/json'             
    //         },
    //         body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then
    //console.log(payload)
    return async function () {
        const creado = await axios.post("http://localhost:3001/recipes", data)
        //console.log(creado)
        return creado;
    }
    
}

export const filterByCreator = (info) => {
    return {type: FILTER_BY_CREATOR, data: info}
};