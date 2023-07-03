import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe = null;

  recipes: Recipe[] = [
    new Recipe(
      'A test recipe1',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'https://images.unsplash.com/photo-1602271886918-bafecc837c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
    ),
    new Recipe(
      'A test recipe2',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'https://images.unsplash.com/photo-1602271886918-bafecc837c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
    ),
  ];

  constructor() {}

  // showRecipe() {
  //   console.log('helo there');
  // }
  showDetails(recipe: Recipe) {
    console.log('recipe: ', recipe);
    this.selectedRecipe = recipe;
    console.log('selected recipe:', this.selectedRecipe);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
