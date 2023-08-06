import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [{ path: ':id', component: RecipeDetailComponent }],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
