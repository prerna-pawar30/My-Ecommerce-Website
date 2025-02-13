import { Component, Input, inject } from '@angular/core';
import { Product } from '../../types/product';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  wishlistService = inject(WishlistService);

  get sellingPrice() {
    return Math.round(this.product.price - (this.product.price * this.product.discount) / 100);
  }

  addToWishList(product: Product) {
    if (this.isInWishlist(product)) {
      this.wishlistService.removeFromWishlists(product._id!).subscribe(() => {
        this.wishlistService.init();
      });
    } else {
      this.wishlistService.addInWishlists(product._id!).subscribe(() => {
        this.wishlistService.init();
      });
    }
  }

  isInWishlist(product: Product): boolean {
    return this.wishlistService.wishlists.some((item) => item._id === product._id);
  }
 cartService =inject(CartService);
    addToCart(product:Product){
     console.log(product);
     if(!this.isProductInCart(product._id!)){
       this.cartService.addToCart(product._id!,1).subscribe(()=>{
        this.cartService.init();
      });
    }else{
      this.cartService.removefromCart(product._id!).subscribe(()=>{
        this.cartService.init();
      });
    }
  }
  isProductInCart(productId:string){
    if(this.cartService.items.find((x)=> x.product._id == productId)){
      return true;
    }else{
      return false;
    }
   }
}
