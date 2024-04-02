import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];
  products: any[] = [
    {
      ProductName: 'Banana',
      Price: '$30',
      Quantity: 10,
      image: 'assets/images/Bananas.jpg',
    },
    {
      ProductName: 'Milk',
      Price: '$20',
      Quantity: 10,
      image: 'assets/images/milk.jpg',
    },
    {
      ProductName: 'Chips',
      Price: '$10',
      Quantity: 10,
      image: 'assets/images/chips.jpg',
    },
  ];
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  cartItems$ = this.cartItemsSubject.asObservable();

  private productsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  products$ = this.productsSubject.asObservable();

  private cartItemCountSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSubject.asObservable();
   
  constructor() {
    console.log(this.cartItemCount$ )
    this.getProducts();
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.cartItems.forEach((cartProduct) => {
        const findProduct = this.products.find(
          (product) => product.ProductName === cartProduct.ProductName
        );
        if (findProduct) {
          findProduct.qty = cartProduct.qty;
        }
      });
      console.log('Constrcutor', this.products);
      // this.cartItemsSubject.next(this.cartItems);
      // this.cartItemCountSubject.next(this.cartItems.length);
      // this.productsSubject.next(this.products);
      this.updateLocalStorage();
    }
  }
  addToCart(item: any) { 
    debugger;
    const existingCartItem = this.cartItems.findIndex(
      (cartItem) => cartItem.ProductName === item.ProductName
    );
    const existingProductItem = this.products.findIndex(
      (product) => product.ProductName === item.ProductName
    );
    if (existingCartItem > -1) {
      if (
        this.cartItems[existingCartItem].qty <
        this.products[existingCartItem].Quantity
      ) {
        this.products[existingProductItem].qty += 1;
        this.cartItems[existingCartItem].qty += 1;
      } else {
        alert('Maximum quantity reached for this item.');
      }
    } else {
      item.qty = 1;
      this.cartItems.push({...item, qty: 1})
      this.products.find(product => product.ProductName === item.ProductName).qty += 1; // Update quantity in products array
    }
    this.updateLocalStorage();
    this.updateCartItemCount();
    // console.log(this.cartItems)
  
    //this.updateCartItemCount();
  }

  private updateCartItemCount() {
    this.cartItemCountSubject.next(this.cartItems.length);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.updateLocalStorage();
    this.updateCartItemCount();
   
  }

  // incrementQuantity(item: any) {
  //   const index = this.cartItems.findIndex(
  //     (cartItem) => cartItem.ProductName === item.ProductName
  //   );
  //   if (index !== -1) {
  //     if (this.cartItems[index].Quantity < this.cartItems[index].maxQuantity) {
  //       this.cartItems[index].Quantity++;
  //       this.updateLocalStorage();
  //     } else {
  //       alert('Maximum quantity reached for this item.');
  //     }
  //   }
  // }

 

  decrementQuantity(item: any) {
 
    const existingCartItem = this.cartItems.findIndex(
      (cartItem) => cartItem.ProductName === item.ProductName   
    );
    const existingProductItem = this.products.findIndex(
      (product) => product.ProductName === item.ProductName
    );
    if (existingCartItem > -1) {
      if (this.cartItems[existingCartItem].qty >0 
      ) {
        this.products[existingProductItem].qty -= 1;
        this.cartItems[existingCartItem].qty -= 1;
      } 
    } else {
      item.qty = 0;
      this.cartItems.push({
        ...item,
        qty: 0,
      });
  }
  this.updateLocalStorage();
}

  updateLocalStorage() {
    this.cartItemsSubject.next(this.cartItems);
    this.productsSubject.next(this.products);
    this.cartItemCountSubject.next(this.cartItems.length);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  getProducts() {
    this.products = this.products.map((product) => {
      return {
        ...product,
        qty: 0,
      };
    });
  }

    calculateSubtotal(item: any): number {
      const price = parseFloat(item.Price.replace('$', ''));
      const quantity = parseInt(item.qty);
      if (!isNaN(price) && !isNaN(quantity)) {
        return price * quantity;
      } else {
        console.error(`Invalid Price or Quantity for item: `, item);
        return 0;
      }
    }
  
}
