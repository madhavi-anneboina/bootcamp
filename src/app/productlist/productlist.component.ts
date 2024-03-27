import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  products: any[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    //this.products = this.cartService.getProducts();
    this.cartService.products$.subscribe((products) => {
      this.products = products;
      // const findProduct = this.products.find((product)=> product.ProductName==)
    });
  }

  // incrementQuantity(index: number) {
  //   if (index >= 0 && index < this.products.length) {
  //     const product = this.products[index];
  //     if (product) {
  //       this.cartService.incrementQuantity(product);
  //     }
  //   }
  // }
  // decrementQuantity(index: number) {
  //   if (index >= 0 && index < this.products.length) {
  //     const product = this.products[index];
  //     if (product) {
  //       this.cartService.decrementQuantity(product);
  //     }
  //   }
  // }

  incrementQuantity(product: any) {
    this.cartService.addToCart(product);
  }

  decrementQuantity(product: any) {
    this.cartService.decrementQuantity(product);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
