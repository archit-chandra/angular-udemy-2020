import {RecipeModel} from './recipe.model';

export class RecipeService {

  private recipies: RecipeModel[] = [
    new RecipeModel('TestRecipe',
      'This is test recipe',
      'https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg'),
    new RecipeModel('TestRecipe2',
      'This is another test recipe',
      'https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg')
  ];

  getRecipes() {
    return this.recipies.slice(); // slice will return the copy
  }
}
