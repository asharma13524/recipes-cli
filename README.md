# Recipes-CLI

Future:
Create much better UX, better user validation, typescript conversion, tests

Clone the repository:

```
git clone git@github.com:asharma13524/recipes-cli.git
```

Install dependencies:

```
npm i
```

Install package globally

```
npm i -g
```

## Usage

1. List ingredients in the inventory

```
recipes listInventory
```

2. Add an ingredient to inventory

```
recipes addIngredient <quantity> <unit> <ingredient>
```

Example:

```
recipes addIngredient 1 cup flour
```

3. Update an ingredient in the inventory:

```
recipes updateIngredient <quantity> <unit> <ingredient>
```

```
recipes updateIngredient 2 cups flour
```

4. Delete an ingredient in the inventory:
```
recipes deleteIngredient <ingredient>
```

```
recipes deleteIngredient flour
```

5. List recipes
```
recipes listRecipes
```

6. Add a recipe:
```
recipes addRecipe <name> <ingredients>
```

```
recipes addRecipe Chocolate Chip Cookie, 1 stick butter, 1 cup sugar, 1 cup chocolate
```

7. Update a recipe
```
recipes updateRecipe <name> <ingredients>
```

```
recipes updateRecipe Chocolate Chip Cookie, 1 stick butter, 1 cup flour, 1 cup sugar
```

8. Delete a recipe:
```
recipes deleteRecipe <name>
```

```
recipes deleteRecipe Chocolate Chip Cookie
```


9. Check what recipes you can make based on what's in the inventory
```
recipes canMakeRecipe
```
