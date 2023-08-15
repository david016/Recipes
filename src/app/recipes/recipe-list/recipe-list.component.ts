import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe = null;

  recipes: Recipe[] = [];

  constructor(
    public recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // showRecipe() {
  //   console.log('helo there');
  // }
  // showDetails(recipe: Recipe) {
  //   console.log('recipe: ', recipe);
  //   this.selectedRecipe = recipe;
  //   console.log('selected recipe:', this.selectedRecipe);
  // }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    console.log(this.route);

    // this.router.navigate(['new'], { relativeTo: this.route });
  }
}
