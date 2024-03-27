import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.css']
})
export class CartviewComponent implements OnInit {
  cartItems: any[] = [];
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
   
  }
  incrementQuantity(item: any) {
    this.cartService.incrementQuantity(item);
  }


  decrementQuantity(item: any) {
    this.cartService.decrementQuantity(item);
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.Price * item.Quantity), 0);
  }
 

  // calculateTotal(): number {
  //   return this.cartItems.reduce((total, item) => {
  //     const price = parseFloat(item.Price.replace('$', ''));
  //     const quantity = parseInt(item.Quantity);
  //     if (!isNaN(price) && !isNaN(quantity)) {
  //       const subtotal = price * quantity;
  //       console.log(`Price: ${price}, Quantity: ${quantity}, Subtotal: ${subtotal}`);
  //       return total + subtotal;
  //     } else {
  //       console.error(`Invalid Price or Quantity for item: `, item);
  //       return total;
  //     }
  //   }, 0);
  // }
}
