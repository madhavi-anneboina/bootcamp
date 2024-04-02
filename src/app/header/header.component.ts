import { Component, OnInit, } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItemCount: any = 0;
  constructor(private cartService: CartService, private router: Router) { }
  ngOnInit(): void {
    console.log("Header Component initialized");
     this.cartService.cartItemCount$.subscribe((count: number) => {
      console.log("Cart item count updated:", count);
      this.cartItemCount = count;
  
   
    });
  }

  goToCartPage(){
   
    this.router.navigate(['/cartview']);
  }
}
