import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient-model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe1',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'https://images.unsplash.com/photo-1602271886918-bafecc837c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
      [new Ingredient('butter', 1), new Ingredient('sugar', 2)]
    ),
    new Recipe(
      'A test recipe2',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA',
      [new Ingredient('salt', 2), new Ingredient('something', 6)]
    ),
  ];

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
