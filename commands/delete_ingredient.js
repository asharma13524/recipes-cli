const conf = new (require('conf'))();
const chalk = require('chalk');


const deleteIngredient = (ingredientToDelete) => {
    const currInventory = conf.get('inventory');
    const processedIngredientToDelete = ingredientToDelete.join(" ");
    // filter out ingredient to delete
    const newInventory = currInventory.filter(ingredient => ingredient.item.toLowerCase() !== processedIngredientToDelete.toLowerCase());
    // display message to user based on whether ingredient was deleted or not
    const noIngredientDeleted = currInventory.length === newInventory.length &&
    currInventory.every(element => newInventory.includes(element));
    noIngredientDeleted ? console.log(chalk.red.bold('Ingredient is not in the Inventory!'))
    : console.log(chalk.green.bold('Ingredient has been deleted from the Inventory!'));
    conf.set('inventory', newInventory);
}

module.exports = deleteIngredient;
