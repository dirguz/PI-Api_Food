const { Router } = require('express');
//const { Recipe, Diet } = require('../db.js')
const recipes= require('./recipes');
const diets=require('./diets');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(recipes);
router.use(diets);

module.exports = router;

