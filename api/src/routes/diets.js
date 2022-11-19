const { Router } = require('express');
const axios = require('axios');
const { DietType } = require('../db');
const dotenv= require('dotenv');
dotenv.config();
const { API_KEY1 } = process.env;
const router= Router();
const InfoTotal = require('../BDRecipe.json')

// const url=`https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&diet&apiKey=${API_KEY1}`

const urlApi = InfoTotal

const allDiets = async () => {
  let dietsList=[];
  // let urlApi = await axios.get(url);
  urlApi.results.map(e =>e.diets.forEach(d =>{ 
        dietsList.includes(d)? null:dietsList.push(d);
    }))
  dietsList.forEach(dieta=>{
    DietType.findOrCreate({
        where:{ name: dieta }
    })
  })
  const allDiets=await DietType.findAll();
  let dietsName=allDiets.map(e=> e.dataValues.name)
  //console.log('estas son las dietas',dietsName);
  return dietsName ; 
}

router.get('/diets', async (req,res)=>{
    try {
        let dietas= await allDiets();
        res.status(200).json(dietas);
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;