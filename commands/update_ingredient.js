const conf = new (require('conf'))();
const chalk = require('chalk');


const updateIngredient = (quantity, unit, ingredientToUpdate) => {
    let currInventory = conf.get('inventory');
    // grab ingredient to update
    const ingredientToUpdateIndex = currInventory.findIndex((ingredient => ingredient.item.toLowerCase() == ingredientToUpdate.toLowerCase()));
    currInventory[ingredientToUpdateIndex] = {
        quantity: quantity,
        unit: unit,
        item: ingredientToUpdate
    }
    // Display correct message to user based on whether ingredient was updated!
    ingredientToUpdateIndex !== -1 ? console.log(chalk.green.bold('Ingredient has been updated!')) : console.log(chalk.red.bold('No ingredient updated, not in the inventory!'));

    conf.set('inventory', currInventory);
}

module.exports = updateIngredient;
