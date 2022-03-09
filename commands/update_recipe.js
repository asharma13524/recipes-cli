const conf = new (require('conf'))();
const chalk = require('chalk');


const updateRecipe = (name, ingredients) => {
    let currRecipes = conf.get('recipes');
    // grab ingredient to update
    const recipeToUpdateIndex = currRecipes.findIndex((recipe => recipe.name.toLowerCase() == name.toLowerCase()));
    currRecipes[recipeToUpdateIndex] = {
        name: name,
        ingredients: ingredients,
    }
    // Display correct message to user based on whether ingredient was updated!
    recipeToUpdateIndex !== -1 ? console.log(chalk.green.bold('Recipe has been updated!')) : console.log(chalk.red.bold('No recipe updated, not a current recipe!'));

    conf.set('recipes', currRecipes);
}

module.exports = updateRecipe;