import {RecipeModel} from './recipe.model';
import {EventEmitter} from "@angular/core";
import {IngredientModel} from "../shared/ingredient.model";

export class RecipeService {

  recipeSelected = new EventEmitter<RecipeModel>();

  private recipies: RecipeModel[] = [
    new RecipeModel(
      'Schnitzel',
      'This is delicious',
      'https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 20)
      ]),
    new RecipeModel(
      'Burger',
      'This is heavy meal',
      'https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('Meat', 1)
      ])];

  getRecipes() {
    return this.recipies.slice(); // slice will return the copy
  }
}
