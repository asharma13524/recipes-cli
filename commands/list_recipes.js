const conf = new (require('conf'))();
const chalk = require('chalk');

const listRecipes = () => {
    const recipes = conf.get('recipes');
    // display recipes if they exist
    if (recipes && recipes.length) {
      recipes.forEach((recipe) => {
        console.log(chalk.green.bold(`${recipe.name}`))
        console.log('-----------')
        console.log(recipe);
      })
    } else {
      console.log(chalk.red.bold('You don\'t have any recipes yet.'));
    }
  }

module.exports = listRecipes;
