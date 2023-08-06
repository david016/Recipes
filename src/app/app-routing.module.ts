import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [{ path: 'recipes', component: RecipesComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
