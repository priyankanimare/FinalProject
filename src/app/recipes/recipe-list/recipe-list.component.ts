import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('A Test Recipe','This is a simple Test','https://images.herzindagi.info/image/2019/Oct/paneer-recipes.jpg'),
  new Recipe('Another Test Recipe','This is a simple Test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/healthy_kids_main_image.jpg')
];
  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
}
}
