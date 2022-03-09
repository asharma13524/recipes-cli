const conf = new (require('conf'))();
const chalk = require('chalk');

function addIngredient (quantity, unit, ingredient) {
    let inventory = conf.get('inventory');

    if (!inventory) {
        //seed with empty inventory
        inventory = [];
    }

    // check if ingredient exists in inventory, if it doesn't push it
    const ingredientExists = inventory.findIndex(ingred => ingred.item === ingredient);

    if(ingredientExists === -1) {
        // push a new ingredient to the inventory and notify user
        inventory.push({
            id: inventory.length + 1,
            quantity: quantity,
            unit: unit,
            item: ingredient,
        });
        console.log(chalk.green.bold('Ingredient added to Inventory! :)'));
    } else {
        console.log(chalk.red.bold('ingredient already exists, please update it!'));
    }

    // set inventory
    conf.set('inventory', inventory);

}

module.exports = addIngredient;
