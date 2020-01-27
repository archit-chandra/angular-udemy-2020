import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {IngredientModel} from "../../shared/ingredient.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('shoppingEditForm', {static: false}) shoppingEditForm: NgForm;

  private editSubscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: IngredientModel;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.editSubscription = this.shoppingListService.startEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editItem = this.shoppingListService.getIngredient(this.editItemIndex);
      this.shoppingEditForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      })
      ;
    });
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

  onAddItem(shoppingEditForm: NgForm) {
    const value = shoppingEditForm.value;
    const newIngredient = new IngredientModel(value.name, value.amount)
    this.shoppingListService.addIngredient(newIngredient);
  }

}
