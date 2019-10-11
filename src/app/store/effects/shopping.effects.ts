import {Injectable} from '@angular/core';

import {
  AddItemAction,
  AddItemFailureAction,
  AddItemSuccessAction, DeleteItemAction,
  DeleteItemActionFailureAction,
  DeleteItemActionSuccessAction,
  LoadShoppingAction,
  LoadShoppingFailureAction,
  LoadShoppingSuccessAction,
  ShoppingActionTypes
} from '../actions/shopping.actions';

import {ShoppingService} from '../../service/shopping.service';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';

@Injectable()
export class ShoppingEffects {

  @Effect()
  loadShopping$ = this.actions$
    .pipe(
      ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
      mergeMap(() => this.shoppingService.getShoppingItem()
        .pipe(
          map(data => new LoadShoppingSuccessAction(data)),
          catchError(error => of(new LoadShoppingFailureAction(error)))
        )
      )
    );

  @Effect()
  addShoppingItem$ = this.actions$
    .pipe(
      ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
      mergeMap(data => this.shoppingService.addShoppingItem(data.payload)
        .pipe(
          map(() => new AddItemSuccessAction(data.payload)),
          catchError(error => of(new AddItemFailureAction(error)))
        )
      )
    );

  @Effect()
  deleteShoppingItem$ = this.actions$
    .pipe(
      ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
      mergeMap(data => this.shoppingService.deleteShoppingItem(data.payload)
        .pipe(
          map(() => new DeleteItemActionSuccessAction(data.payload)),
          catchError(error => of(new DeleteItemActionFailureAction(error)))
        )
      )
    );

  constructor(private actions$: Actions, private shoppingService: ShoppingService) {
  }

}
