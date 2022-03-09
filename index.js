#! /usr/bin/env node
const { program } = require('commander');
const addIngredient = require('./commands/add_ingredient');
const addRecipe = require('./commands/add_recipe');
const canMakeRecipe = require('./commands/can_make_recipe');
const deleteIngredient = require('./commands/delete_ingredient');
const deleteRecipe = require('./commands/delete_recipe');
const listInventory = require('./commands/list_inventory');
const listRecipes = require('./commands/list_recipes');
const { processRecipe, processIngredient } = require('./commands/utils/command_utils');
const updateIngredient = require('./commands/update_ingredient');
const updateRecipe = require('./commands/update_recipe');


// TODO: add options, validation on user input, require inputs
program
    .command('listInventory')
    .description('List all the ingredients in the inventory ex: `recipes listInventory`')
    .action(listInventory)

program
    .command('addIngredient')
    .arguments('<quantity> <unit> <ingredient>')
    .description('Add a new ingredient to the inventory ex: `recipes addIngredient 1 cup flour`')
    .action(() => {
        const processedIngredient = processIngredient(program.args.slice(1,));
        addIngredient(processedIngredient[0], processedIngredient[1], processedIngredient[2])
    });

program
    .command('updateIngredient')
    .arguments('<quantity> <unit> <ingredient>')
    .description('Update an ingredient in the inventory ex: `recipes updateIngredient 2 cups flour`')
    .action(() => {
        const processedIngredient = processIngredient(program.args.slice(1,));
        updateIngredient(processedIngredient[0], processedIngredient[1], processedIngredient[2])
    })

program
    .command('deleteIngredient')
    .arguments('<ingredient>')
    .description('Delete an ingredient in the inventory ex: `recipes deleteIngredient flour`')
    .action(() => deleteIngredient(program.args.slice(1,)))

program
    .command('listRecipes')
    .description('List all recipes ex: `recipes listRecipes`')
    .action(listRecipes)

program
    .command('addRecipe')
    .arguments('<name> <ingredients>')
    .description('Add a recipe  ex: `recipes addRecipe Sugar Cookies, 2 cups flour, 1 cup butter`')
    .action(() => {
        const processedRecipe = processRecipe(program.args.slice(1,));
        addRecipe(processedRecipe[0], processedRecipe[1])
    });

program
    .command('updateRecipe')
    .arguments('<name> <ingredients>')
    .description('Update a recipe ex: recipes updateRecipe Sugar Cookie 1 cup flour, 1 cup sugar')
    .action(() => {
        const processedRecipe = processRecipe(program.args.slice(1,));
        updateRecipe(processedRecipe[0], processedRecipe[1])
    });

program
    .command('deleteRecipe')
    .arguments('<recipe>')
    .description('Delete a recipe ex: `recipes deleteRecipe Sugar Cookie`')
    .action(() => deleteRecipe(program.args.slice(1,)))

program
    .command('canMakeRecipe')
    .description('Check whether possible to create any recipes with current inventory')
    .action(canMakeRecipe)

program.parse();
