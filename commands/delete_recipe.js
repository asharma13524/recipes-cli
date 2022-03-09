const conf = new (require('conf'))();
const chalk = require('chalk');


const deleteRecipe = (recipeToDelete) => {
    const currRecipes = conf.get('recipes');
    // handle any spaces in the recipe name
    const processedRecipeToDelete = recipeToDelete.join(" ");
    // filter out recipe to delete
    const newRecipes = currRecipes.filter(recipe => recipe.name !== processedRecipeToDelete);
    // display message to user based on whether ingredient was deleted or not
    const noRecipesDeleted = currRecipes.length === newRecipes.length &&
    currRecipes.every(element => newRecipes.includes(element));
    noRecipesDeleted ? console.log(chalk.red.bold('No such recipe'))
    : console.log(chalk.green.bold('Recipee has been deleted!'));
    conf.set('recipes', newRecipes);
}

module.exports = deleteRecipe;
