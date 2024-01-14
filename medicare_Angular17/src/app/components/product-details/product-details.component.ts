import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FileUploadService } from '../../services/file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { ProductImage } from '../../models/product-image.model';
import { CategoryService } from '../../services/category.service';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  
  @Input() productId:number;

  product?:Product;  

  productImagesOrg:ProductImage[];
  productImageOrg:ProductImage;

  registeredUserName:string;

  cartItems:Cart[];
  cartItem:Cart;
  submitted:boolean;
  cartCount:number;
  productExist:boolean;
  cartId:number;

  constructor(private productService:ProductService,  
    private uploadService:FileUploadService,
    private cartService:CartService,
    public sanitizer: DomSanitizer,
    private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.registeredUserName=sessionStorage.getItem("userName");
    console.log(this.registeredUserName);

    // this.router.navigate(['home']); 

    this.productService.get(this.productId).subscribe({
      next:(data)=>{
        this.product=data;
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });

    // this.uploadService.getImageDataToShow(this.product.product_image_id).subscribe({
    //   next:(data)=>{
    //     this.productImageOrg=data;       
    //     console.log(data);
    //     console.log(this.productImageOrg);
    //   },
    //   error:(e)=>{console.error(e)}
    // });   

    this.uploadService.getImagesDataToShow().subscribe({
      next:(data)=>{
        this.productImagesOrg=data;       
        console.log(data);
        console.log(this.productImagesOrg);
      },
      error:(e)=>{console.error(e)}
    });    

    this.cartService.findByCartproductregisteredusername(this.registeredUserName).subscribe({
      next:(data)=>{
        this.cartItems=data;
        this.cartCount=this.cartItems.length;
        console.log(data);
        for(let i=0;i<this.cartItems.length;i++){
          if(this.cartItems[i].cart_product_id==this.product.product_id){
            this.productExist=true;
            console.log(this.productExist)
            this.cartId=this.cartItems[i].cart_id;
            console.log(this.cartId)
            this.cartItem=this.cartItems[i];
            console.log(this.cartItem)
            break;
          }     
        }
        // this.cartItems.forEach(element => {
        //   if(element.cart_product_id=this.product.product_id){
        //     this.productExist=true;              
        //   }
        // });
      },
      error:(e)=>{console.error(e)}
    });    

    // this.product.product_id

  }

  continueShopping(){
    if(this.registeredUserName==null){
      this.router.navigate(['login']);
    }
    else{
      location.reload();
    }
  }

  // addCart(productId:number){          
  addCart(){

    if(this.registeredUserName==null){
      this.router.navigate(['login']);
    }
    else{
      console.log(this.productExist)

      const data={
        cart_product_id:this.product.product_id,
        cart_product_image_id:this.product.product_image_id,
        cart_product_name:this.product.product_name,
        cart_product_brand:this.product.product_brand,
        cart_product_status:this.product.product_status,
        cart_product_price:this.product.product_price,
        cart_product_quantity:this.product.product_quantity,
        cart_product_subtotal:this.product.product_price,
        cartproductregisteredusername:this.registeredUserName,
      }
  
        console.log(data);

      if(this.productExist){
        this.cartItem.cart_product_quantity=this.cartItem.cart_product_quantity+this.product.product_quantity;
        this.cartItem.cart_product_subtotal=this.cartItem.cart_product_subtotal+this.product.product_price;
        this.cartService.update(this.cartId,this.cartItem)
            .subscribe(response=>{
              console.log(response)
              this.submitted=true;
            })                 
      }else{
        this.cartService.create(data).subscribe({  
          next:(response)=>{
            console.log(response);
            this.submitted=true;
          },
          error: (e) => {console.error(e)}
        });
      }

      
      this.cartService.findByCartproductregisteredusername(this.registeredUserName).subscribe({
        next:(data)=>{
          this.cartItems=data;
          this.cartCount=this.cartItems.length;
          console.log(data);
          // for(let i=0;i<this.cartItems.length;i++){
          //   if(this.cartItems[i].cart_product_id==this.product.product_id){
          //     this.productExist=true;
          //     console.log(this.productExist)
          //     this.cartId=this.cartItems[i].cart_id;
          //     console.log(this.cartId)
          //     this.cartItem=this.cartItems[i];
          //     console.log(this.cartItem)
          //     break;
          //   }     
          // }

          // this.cartItems.forEach(element => {
          //   if(element.cart_product_id=this.product.product_id){
          //     this.productExist=true;              
          //   }
          // });
        },
        error:(e)=>{console.error(e)}
      });   

      // location.reload();      
    }
    
  }

  checkOut(){

    if(this.registeredUserName==null){
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['checkout']);      
    }
    
  }

  

}
