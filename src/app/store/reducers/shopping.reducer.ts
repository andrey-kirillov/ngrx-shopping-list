import {ShoppingItem} from '../models/shop-item.model';
import {ShoppingAction, ShoppingActionTypes} from '../actions/shopping.actions';


const initialState: ShoppingItem[] = [
  {
    id: '212121-21212-212121-asdffff',
    name: 'Diet Coke'
  }
];


export function ShoppingReducer(state: ShoppingItem[] = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM :
      return [...state, action.payload];
    case ShoppingActionTypes.DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
