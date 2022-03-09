const conf = new (require('conf'))();
const chalk = require('chalk');

const addRecipe = (name, ingredients) => {
    let recipes = conf.get('recipes');

    if (!recipes) {
        //seed with empty recipes
        recipes = [];
    }

    // TODO: check if recipe exists, if it does prevent creation

    // add a new recipe
    recipes.push({
        name: name,
        ingredients: ingredients
    });

    // set inventory
    conf.set('recipes', recipes);

    // notify user an ingredient was added
    console.log(
        chalk.green.bold('Recipe successfuly added! :)')
    );
}

module.exports = addRecipe;
