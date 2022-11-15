import axios from "axios"
import { GET_ALL, GET_ALL_DIETS, SEARCH_BY_NAME, FILTER_BY_DIETS, ORDER_BY_SCORE, ORDER_BY_NAME, RECIPE_DETAIL, POST_RECIPE, FILTER_BY_CREATOR, RESET_DETAIL, RESET_RECIPES } from "./actions_types"

export const get_All_Recipes = () => (dispatch) => {
    return fetch('http://localhost:3001/recipes')
    .then(response => response.json())
    .then(info => dispatch({type:GET_ALL, data:info}))
    .catch(error=>dispatch({type:GET_ALL, data:error}))
}

export const get_Diets= () => (dispatch) => {
    return fetch('http://localhost:3001/diets')
    .then(response => response.json())
    .then(info => dispatch({type:GET_ALL_DIETS, data:info}))
    .catch(error=> dispatch({type:GET_ALL_DIETS, data:error}))
}

export const get_Recipe_Name = (name) => (dispatch) => {
    return fetch(`http://localhost:3001/recipes?name=${name}`)
    .then(response => response.json())
    .then(info => dispatch({type:SEARCH_BY_NAME, data:info}))
    .catch(error=>dispatch({type:SEARCH_BY_NAME, data:{error:error.message}}))
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

export const recipe_Detail = (id) => {
    return async function(dispatch) {
        try {
            const info = await axios.get('http://localhost:3001/recipes/'+id)
            return dispatch({
                type: RECIPE_DETAIL,
                data: info.data})
        } catch (error) {
            return dispatch({
                type: RECIPE_DETAIL,
                data: {error:error.message}
            })
        }
    };
}

export const post_Recipe = (data) => {
    return async function (dispatch) {
        try{
            const creado = await axios.post("http://localhost:3001/recipe", data)
            return dispatch({ 
            type:POST_RECIPE,
            data:creado
        })
    }catch (error){
        console.log(error);
    }
}
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
}

export const filterByCreator = (info) => {
    return {type: FILTER_BY_CREATOR, data: info}
};

export const resetDetail = () => {
    return {
        type: RESET_DETAIL
    }
}

export const resetRecipes = () => {
    return {
        type: RESET_RECIPES
    }
}
