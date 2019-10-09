import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shop-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  // ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  // ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure'
}


export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}
}


export type ShoppingAction = AddItemAction;
