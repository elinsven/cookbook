import { Component, EventEmitter, Input, Output } from "@angular/core";

//TODO lägg i utils
export interface RecipeCard {
  recipeId: number;
  recipeName: string;
  recipeImage: string;
  cookingTime: number;
}

@Component({
  selector: "app-recipe-card",
  templateUrl: "./recipe-card.component.html",
  styleUrls: ["./recipe-card.component.scss"]
})
export class RecipeCardComponent {
  @Input() recipe: RecipeCard | undefined;
  @Output() recipeClick = new EventEmitter<RecipeCard>();
}