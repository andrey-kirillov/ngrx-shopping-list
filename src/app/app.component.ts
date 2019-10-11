import {Component, OnInit} from '@angular/core';
import {AppState} from './store/models/app-state.model';

import {ShoppingItem} from './store/models/shop-item.model';
import {AddItemAction, DeleteItemAction, LoadShoppingAction} from './store/actions/shopping.actions';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as uuid from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-shopping-list';
  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = {id: '', name: ''};

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping.list);
    this.store.dispatch(new LoadShoppingAction());
  }

  addItem(): void {
    if (!this.newShoppingItem.name || !this.newShoppingItem.name.trim().length) {
      return;
    }

    this.newShoppingItem.id = uuid.v4();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = {id: '', name: ''};
  }

  deleteItem(id: string): void {
    this.store.dispatch(new DeleteItemAction(id));
  }
}


// https://www.youtube.com/watch?v=KZkRGm1xC_I&t=36s
