import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListRoutingModule } from './recipe-list-routing.module';
import { RecipeListComponent } from "./recipe-list.component";
import { RecipeCardModule } from "../../ui/recipe-card/recipe-card.module";


@NgModule({
  declarations: [RecipeListComponent],
  imports: [
    CommonModule,
    RecipeCardModule,
    RecipeListRoutingModule
  ]
})
export class RecipeListModule { }