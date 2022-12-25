import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RecipesService } from "../../data-access/recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipeId: string | null;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {
    this.recipeId = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.recipesService.getRecipeById(this.recipeId).subscribe(result => {
      console.log(result);
    })
  }

}
