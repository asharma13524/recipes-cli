// TODO: repeated logic, can consolidate
const processIngredient = (rawIngredient) => {
    // data parsing to get data into processable format
    const relevantArgs = rawIngredient.slice(0,);
    const ingredientQuantity = rawIngredient[0];
    const ingredientUnit = rawIngredient[1];
    const processedIngredientName = relevantArgs.slice(2,).join(" ");
    return [ingredientQuantity, ingredientUnit, processedIngredientName]
}

const processRecipe = (rawRecipe) => {
    // data parsing to get data into processable format
    const relevantArgs = rawRecipe.slice(0,);
    const processedRecipe = relevantArgs.join(" ").replace(/\s*,\s*/g, ",").split(",");
    const recipeName = processedRecipe[0];
    const recipeIngredients = processedRecipe.slice(1,);
    return [recipeName, recipeIngredients]
}

module.exports = {processRecipe, processIngredient};
