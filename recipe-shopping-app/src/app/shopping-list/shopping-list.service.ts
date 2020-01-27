import {IngredientModel} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 5),
    new IngredientModel('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    // unnecessary event creations
    /*for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }*/

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
