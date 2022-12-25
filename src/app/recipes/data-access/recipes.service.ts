import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  url: string = environment.api;

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any> {
    return this.http.get(this.url + "/recipes");
  }

  getRecipeById(id: number | string | null): Observable<any> {
    return this.http.get(this.url + "/recipes/" + id);
  }
}
