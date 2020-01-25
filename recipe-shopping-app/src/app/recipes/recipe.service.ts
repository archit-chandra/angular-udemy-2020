import {RecipeModel} from './recipe.model';
import {EventEmitter, Injectable} from "@angular/core";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<RecipeModel>();

  private recipies: RecipeModel[] = [
    new RecipeModel(
      'Schnitzel',
      'This is delicious',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 20)
      ]),
    new RecipeModel(
      'Burger',
      'This is heavy meal',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('Meat', 1)
      ])];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipies.slice(); // slice will return the copy
  }

  getRecipe(index: number) {
    return this.recipies[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
