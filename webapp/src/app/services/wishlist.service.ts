import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../types/product';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor() {}
  
 http = inject(HttpClient);
  wishlists: Product[] = [];

  
    
  init() {
    this.getWishlists().subscribe((result) => {
      this.wishlists = result;
    });
  }

  getWishlists(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/customer/wishlists`);
  }

  addInWishlists(productId: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/customer/wishlists/${productId}`, {});
  }

  removeFromWishlists(productId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/customer/wishlists/${productId}`);
  }
}
