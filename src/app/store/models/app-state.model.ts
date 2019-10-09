import {ShoppingItem} from './shop-item.model';

export interface AppState {
  readonly shopping: Array<ShoppingItem>;
}
