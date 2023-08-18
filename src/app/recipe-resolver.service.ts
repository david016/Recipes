import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from './recipes/recipe.model';
import { DataStorageService } from './shared/data-storage.service';
import { Observable } from 'rxjs';
import { RecipeService } from './recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve(): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    const recipes = this.recipeService.getRecipes();
    console.log('hello from resolver');

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}

// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Recipe } from './recipes/recipe.model';

// @Injectable({ providedIn: 'root' })
// export class RecipeResolverService implements Resolve<Recipe[]> {
//   resolve(
//     route: ActivatedRouteSnapshot
//   ): Observable<ObjectToResolve> | Promise<ObjectToResolve> | ObjectToResolve {
//     return;
//   }
// }
