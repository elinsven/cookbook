import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RecipesService } from "../../data-access/recipes.service";
import { RecipeCard } from "../../ui/recipe-card/recipe-card.component";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeCard[] = [];

  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(result => {
      console.log(result.data);
      this.recipes = result.data.map((result: any) =>
      ({
        recipeName: result.name,
        recipeId: result.id
      })
      )
    })
  }

  recipeClick(recipe: RecipeCard) {
    console.log(recipe);
    this.router.navigate([`/${recipe.recipeId}`]);
  }

}
