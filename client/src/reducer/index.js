import {GET_ALL, GET_ALL_DIETS, SEARCH_BY_NAME, FILTER_BY_DIETS, ORDER_BY_SCORE, ORDER_BY_NAME, RECIPE_DETAIL, POST_RECIPE, FILTER_BY_CREATOR} from '../actions/actions_types';

const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
    recipeDetail: {},
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
                recipes: dietsFilter
            };
        case ORDER_BY_SCORE:
            let orderScore = action.data === "Score-+" ? state.recipes.sort((a, b) => a.healthScore - b.healthScore): state.recipes.sort((a, b) => b.healthScore - a.healthScore);
            return {
                ...state,
                recipes: action.data === "Order By Score" ? state.recipes : orderScore,
            };
        case ORDER_BY_NAME:
            let aZRecipes = action.data === "AZ" ? state.recipes.sort((a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1;
                        }
                        if (b.name.toLowerCase() > a.name.toLowerCase()) {
                            return -1;
                        }
                        return 0;
                    }): state.recipes.sort((a, b) => {
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
                recipes: action.data === "default" ? state.recipes : aZRecipes,
            };
        case RECIPE_DETAIL:
            return {
                ...state,
                recipeDetail: action.data,
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
            }

        default:
            return state;
    }
} 



export default rootReducer;