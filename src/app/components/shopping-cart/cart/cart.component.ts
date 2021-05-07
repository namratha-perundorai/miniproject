import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MessengerService} from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  constructor(private msg: MessengerService) { }
  cartTotal = 0;
  ngOnInit() {
    this.msg.getMsg().subscribe((product: any = Product) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: any = Product) {
    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists = true
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
      this.cartTotal = 0
      this.cartItems.forEach((item: any) => {
        this.cartTotal += (item.qty * item.price);
        
      })
    
  }
  removeFromCart(item: any) {
  
    const index = this.cartItems.indexOf(item);
    
      if(index!==-1)
         this.cartItems.splice(index, 1);
      
       this.cartTotal -= (item.price * item.qty);
  }
  
}
