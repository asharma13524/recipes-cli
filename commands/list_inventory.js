const conf = new (require('conf'))();
const chalk = require('chalk');

const listInventory = () => {
    const inventory = conf.get('inventory');
	// display ingredients in inventory if they exist
    if (inventory && inventory.length) {
    	console.log(chalk.blue.bold(''));
		inventory.forEach((ingredient) => {
			console.log(chalk.green.bold(`${ingredient.quantity} ${ingredient.unit} ${ingredient.item}`));
		})
    } else {
		console.log(chalk.red.bold('You don\'t have any ingredients yet.'));
	}
}

module.exports = listInventory
