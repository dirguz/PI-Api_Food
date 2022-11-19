const { Router } = require('express');
const axios = require('axios');
const { Recipe, DietType } = require('../db');
const dotenv= require('dotenv');
dotenv.config();
const { API_KEY1 } = process.env;
const router= Router();
const InfoTotal = require('../BDRecipe.json')

// const url=`https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&diet&apiKey=${API_KEY1}`

const urlApi = InfoTotal

const allRecipesApi = async () => {
    try {
        // let urlApi = await axios.get(url);
        // console.log(urlApi.data);
        let infoRecipes = await urlApi.results.map(e => {
            return {
                id: e.id,
                name: e.title,
                dietType: e.diets,
                summary: e.summary,
                health_score: e.healthScore,
                image: e.image,
                dishTypes: e.dishTypes,
                instructions: e.analyzedInstructions[0]?.steps.map(s => { return s.step })
            }
        })
        return infoRecipes;
    } catch (error) {
        console.log(error);
    }
}

const allRecipesDB = async () => {
    return await Recipe.findAll({
        include: {
            model: DietType,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
}
const allRecipes = async () => {
    const recipesApi = await allRecipesApi();
    const recipesDB = await allRecipesDB();
    return recipesApi && recipesDB ? [...recipesApi, ...recipesDB]:console.log('No existen datos')
    // const totalRecipes = [...recipesApi, ...recipesDB]
    // return totalRecipes;
}


router.get('/recipes', async (req, res, next) => {
    let { name } = req.query;
    const recipes = await allRecipes()
    try {
        if (name) {
            let recipeName = await recipes.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
            (recipeName.length > 0 ? res.json(recipeName) : res.status(404).json({ message: 'Recetas no encontradas' }))
        } else {
            res.json(recipes)

        };
} catch (error) {
next(error);
}
});

router.get('/recipes/:id', async (req, res) => {
    let { id } = req.params;
    const info = await allRecipes();
    try {
        info.forEach(el => {
        if (el.id == id) {
            res.json({
                id: el.id,
                name: el.name,
                dietType: el.dietType || el.dietTypes.map(el => el.name),
                summary: el.summary,
                health_score: el.health_score,
                dishTypes: el.dishTypes,
                image: el.image,
                instructions: el.instructions
            })
          }
        })

    } catch (error) {
        console.log("Identificador invalido");
    }

});

router.post('/recipe' , async (req, res) => {
    let {name, summary, health_score, instructions, image, dietType, dishTypes} = req.body;
    try {
        const newRecipe = await Recipe.create({
            name,
            summary,
            health_score,
            instructions,
            image,
            dishTypes
        });
        let dietDB = await DietType.findAll({
            where:{ name: dietType }
            });
        newRecipe.addDietType(dietDB);
        //console.log(dietDB,created);
        res.status(200).json({mensaje: 'Receta creada exitosamente'});

    } catch (error) {
        console.log(error);
    }
})    

module.exports = router;