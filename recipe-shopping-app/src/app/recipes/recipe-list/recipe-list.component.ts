import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipies: RecipeModel[] = [
    new RecipeModel('TestRecipe',
      'This is test recipe',
      'https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg'),
    new RecipeModel('TestRecipe2',
      'This is another test recipe',
      'https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipeItem: RecipeModel) {
    this.recipeWasSelected.emit(recipeItem);
  }
}
