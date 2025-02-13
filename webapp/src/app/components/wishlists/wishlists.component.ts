import { Component, inject } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../types/product';


@Component({
  selector: 'app-wishlists',
  imports: [ProductCardComponent],
  templateUrl: './wishlists.component.html',
  styleUrl: './wishlists.component.css'
})
export class WishlistsComponent {
  wishlists:Product[]=[];
  wishlistService = inject(WishlistService);

  ngOnInit(){
    this.wishlistService.init();
  }
}
