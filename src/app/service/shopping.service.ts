import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ShoppingItem} from '../store/models/shop-item.model';

import {delay} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private SHOPPING_URL = 'http://localhost:3000/shopping';

  constructor(private http: HttpClient) {
  }


  getShoppingItem(): Observable<any> {
    return this.http.get(this.SHOPPING_URL).pipe(delay(500));
  }

  addShoppingItem(shoppingItem: ShoppingItem): Observable<any> {
    return this.http.post(this.SHOPPING_URL, shoppingItem).pipe(delay(500));
  }

  deleteShoppingItem(id: string): Observable<any> {
    return this.http.delete(`${this.SHOPPING_URL}/${id}`).pipe(delay(500));
  }

}
