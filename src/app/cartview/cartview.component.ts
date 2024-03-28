import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.css']
})
export class CartviewComponent implements OnInit {
  cartItems: any[] = [];
  totalcount: number | undefined;
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
   
  }
  incrementQuantity(item: any) {
    this.cartService.addToCart(item);
  }

  decrementQuantity(item: any) {
    this.cartService.decrementQuantity(item);
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }
 
  getTotal(item: any): number {
    return this.cartService.calculateSubtotal(item);
  }


  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => {
      const price = parseFloat(item.Price.replace('$', ''));
      const quantity = parseInt(item.qty);
      if (!isNaN(price) && !isNaN(quantity)) {
        const subtotal = price * quantity;
        return total + subtotal;
        console.log(total + subtotal)
      } else {
        console.error(`Invalid Price or Quantity for item: `, item);
        return total;
      }
    }, 0);
  }
}
