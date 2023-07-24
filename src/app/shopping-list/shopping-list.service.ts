import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() {}

  getIngredients(): Ingredient[] {
    return this.ingredients.slice(0);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }
}
