import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../recipe-list/recipe-list.module").then((m) => m.RecipeListModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import("../recipe-detail/recipe-detail.module").then((m) => m.RecipeDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesShellRoutingModule { }