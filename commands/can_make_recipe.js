const conf = new (require('conf'))();
const chalk = require('chalk');

const canMakeRecipe = () => {
    const recipes = conf.get('recipes');
    const inventory = conf.get('inventory');
    if (inventory && inventory.length && recipes && recipes.length) {
        // get all ingredients from inventory in easy format to compare to recipe ingredients
        const listOfInventory = inventory.map((ingredient) => {
            return ingredient.quantity + ' ' + ingredient.unit + ' ' + ingredient.item;
        });
        // loop through recipes, compare recipe ingredients and inventory ingredients
        // if recipe has ingredients not in inventory, alert user of missing ingredients
        recipes.forEach((recipe) => {
            const recipeIngredients = recipe.ingredients;
            const haveIngredients = recipeIngredients.filter(ingred => !listOfInventory.includes(ingred));
            haveIngredients.length === 0 ? console.log(chalk.green.bold(`You can make the ${recipe.name} hooray!`)) : console.log(chalk.red.bold(`You can\'t make the ${recipe.name}, you need ${haveIngredients}`));
            }
        )
    } else {
      console.log(chalk.red.bold('You don\'t have any recipes or ingredients in inventory yet.'));
    }
}

module.exports = canMakeRecipe;
