import {GET_ALL, GET_ALL_DIETS, SEARCH_BY_NAME, FILTER_BY_DIETS, ORDER_BY_SCORE, ORDER_BY_NAME, RECIPE_DETAIL, POST_RECIPE, FILTER_BY_CREATOR, RESET_DETAIL, RESET_RECIPES} from '../actions/actions_types';

const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
    detail: [],
    filtered:[],
};

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                recipes:action.data,
                allRecipes:action.data
            };
        case GET_ALL_DIETS:
            return {
                ...state,
                diets:action.data
            };
        case SEARCH_BY_NAME:
            return {
                ...state,
                recipes: action.data
            };
        case FILTER_BY_DIETS:
            const allRecipes = state.allRecipes
            const dietsFilter = action.data === 'ALL' ? allRecipes : allRecipes.filter((e) => e.dietType?.includes(action.data))
            console.log(dietsFilter)
            return {
                ...state,
                recipes: dietsFilter,
                filtered: dietsFilter
            };
        case ORDER_BY_SCORE:
            let sorted = state.filtered.length ? state.filtered:state.allRecipes
            let orderScore = action.data === "Score-+" ? sorted.sort((a, b) => a.health_score - b.health_score): state.recipes.sort((a, b) => b.health_score - a.health_score);
            return {
                ...state,
                recipes: action.data === "Order By Score" ? state.allRecipes : orderScore,
            };
        case ORDER_BY_NAME:
            let sortedName = state.filtered.length ? state.filtered:state.allRecipes
            let aZRecipes = action.data === "AZ" ? sortedName.sort((a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1;
                        }
                        if (b.name.toLowerCase() > a.name.toLowerCase()) {
                            return -1;
                        }
                        return 0;
                    }): sortedName.sort((a, b) => {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return 1;
                        }
                        if (b.name.toLowerCase() < a.name.toLowerCase()) {
                            return -1;
                        }
                        return 0;
                    });
            return {
                ...state,
                recipes: action.data === "default" ? state.allRecipes : aZRecipes,
            };
        case RECIPE_DETAIL:
            return {
                ...state,
                detail:action.data,
            };
        case POST_RECIPE:
            return {
                ...state,
            };
        case FILTER_BY_CREATOR:
            const creator = action.data === 'createdInDb' ? state.allRecipes.filter(el => el.data_base) : state.allRecipes.filter(el => !el.data_base)
            return {
                ...state,
                recipes: action.data === 'ALL' ? state.allRecipes : creator,
            };
        case RESET_DETAIL:
            return{
                ...state,
                detail: [],
            };
        case RESET_RECIPES:
        return{
            ...state,
            filtered:[],
            recipes:[]
        }

        default:
            return state;
    }
} 



export default rootReducer;