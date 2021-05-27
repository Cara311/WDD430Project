import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test', 
            'Test description', 
            'https://images.pexels.com/photos/4147872/pexels-photo-4147872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Lettuce', 2)
            ]),
        new Recipe('Tasty', 
        'Tasty description', 
        'https://images.pexels.com/photos/4147872/pexels-photo-4147872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        [
            new Ingredient('Cheese', 3),
            new Ingredient('Pasta', 1)
        ])
      ];

      constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); //Returns a copy of array
    }  

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);

    }
}