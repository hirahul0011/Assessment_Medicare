import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import { FileUploadService } from '../../services/file-upload.service';
import { ProductImage } from '../../models/product-image.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit{

  cartItems:Cart[];
  cartItem:Cart;
  submitted:boolean;
  cartCount:number;
  productExist:boolean;
  cartId:number;

  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();

  registeredUserName:string;

  productImagesOrg:ProductImage[];

  totalAmount:number;

  constructor(private cartService:CartService,
    private uploadService:FileUploadService,
    public sanitizer:DomSanitizer,
    private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.registeredUserName=sessionStorage.getItem("userName");
    console.log(this.registeredUserName);

    this.dtOptions={
      pagingType:'full',
      // pagingType:'full_numbers'
      // pagingType:'simple'
      // pagingType:'simple_numbers'
      
      // searching:false,

      // paging:false,

      // lengthChange:false

      language:{
        searchPlaceholder:'Text Admin'
      }
    };

    this.totalAmount=0;

    this.cartService.findByCartproductregisteredusername(this.registeredUserName).subscribe({
      next:(data)=>{
        this.cartItems=data;
        this.dtTrigger.next(null);
        this.cartCount=this.cartItems.length;
        console.log(data);
        for(let i=0;i<this.cartItems.length;i++){
          this.totalAmount+=this.cartItems[i].cart_product_subtotal;
        }

        // sessionStorage.setItem("totalAmountToBePaid",this.totalAmount);
        
        // this.cartItems.forEach(element => {
        //   if(element.cart_product_id=this.product.product_id){
        //     this.productExist=true;              
        //   }
        // });
      },
      error:(e)=>{console.error(e)}
    });    

    this.uploadService.getImagesDataToShow().subscribe({
      next:(data)=>{
        this.productImagesOrg=data;       
        console.log(data);
        console.log(this.productImagesOrg);
      },
      error:(e)=>{console.error(e)}
    });

  }

  refreshTheCart(){
    location.reload();
  }

  removeFromCart(cartId:number){
    
    this.cartService.delete(cartId).subscribe({  
      next:(response)=>{
        console.log(response);        
      },
      error: (e) => {console.error(e)}
    });

  }

  continueShopping(){
    if(this.registeredUserName==null){
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['home']);
    }
  }

  checkOut(){
    this.router.navigate(['payment']);
  }

}
