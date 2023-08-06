import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe1: Recipe;

  // @Input()
  // recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipe1 = this.recipeService.getRecipe(+params['id']);
    });
  }
}
