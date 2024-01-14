import { Component } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { Subject } from 'rxjs';
import { ProductImage } from '../../models/product-image.model';
import { CartService } from '../../services/cart.service';
import { FileUploadService } from '../../services/file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { RegisteredUserService } from '../../services/registered-user.service';
import { RegisteredUser } from '../../models/registered-user.model';
import { Payment } from '../../models/payment.model';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  cartItems:Cart[];
  cartItem:Cart;
  submitted:boolean;
  cartCount:number;
  productExist:boolean;
  cartId:number;  

  registeredUserName:string; 
  
  registeredUsers:RegisteredUser[];

  totalAmount:number;
  registeredUserId:number;
  todayDate:Date;

  cardNumberV:number;
  expiryDateV:Date;
  cvvV:string;

  today:string;

  payments:Payment[];
  paymentId:string;
  
  orderIds:string;
  orders:Order[];

  payForm:FormGroup; //Requirement for the reactive form

  constructor(private cartService:CartService,
    private router:Router,
    private formBuilder : FormBuilder, //Requirement for the reactive form
    private paymentService:PaymentService,
    private registeredUserService:RegisteredUserService,
    private orderService:OrderService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.registeredUserName=sessionStorage.getItem("userName");
    console.log(this.registeredUserName);

    this.today = new Date().toJSON().split('T')[0];


    //Requirement for the reactive form start 
    //We still needs to check how this date validation is done
    this.payForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      expiryDate: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    })    
    //Requirement for the reactive form end

    this.totalAmount=0;

    this.cartService.findByCartproductregisteredusername(this.registeredUserName).subscribe({
      next:(data)=>{
        this.cartItems=data;        
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
    
    this.registeredUserService.getAll().subscribe({
      next:(data)=>{
        this.registeredUsers=data;
        for(let i=0;i<this.registeredUsers.length;i++){
          if(this.registeredUsers[i].registered_user_name=this.registeredUserName){
            this.registeredUserId=this.registeredUsers[i].registered_user_id;
            break;
          }
        }
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });

    

  }

  //Requirement for the reactive form start
  get formControl(){
    return this.payForm.controls;
  }
  //Requirement for the reactive form end

  
  submit(){
    const data={
      payment_amount:this.totalAmount,  
      payment_user_id:this.registeredUserId,
      payment_date:new Date(),
    }

    this.paymentService.create(data).subscribe({  
      next:(response)=>{
        console.log(response);
        this.submitted=true;
      },
      error: (e) => {console.error(e)}
    });



    // this.paymentService.getAll().subscribe({
    //   next:(data)=>{
    //     this.payments=data;        
    //     console.log(data);
    //     this.paymentId=""+this.payments[this.payments.length-1].payment_id;
    //     // sessionStorage.setItem("paymentId",this.paymentId)

    //     this.orderIds="";

    //     console.log(this.orderIds);

    //     this.cartService.findByCartproductregisteredusername(this.registeredUserName).subscribe({
    //       next:(data)=>{
    //         this.cartItems=data;                
    //         console.log(data);
        
    //         for(let i=0;i<this.cartItems.length;i++){          

    //           const data1={
    //             order_date:new Date(),
    //             order_user_id:this.registeredUserId,
    //             order_payment_id:this.payments[this.payments.length-1].payment_id,
    //             order_product_id:this.cartItems[i].cart_product_id,
    //           }

    //           this.orderService.create(data1).subscribe({  
    //             next:(response)=>{
    //               console.log(response);
    //               this.submitted=true;
    //             },
    //             error: (e) => {console.error(e)}
    //           });

    //           this.orderService.getAll().subscribe({
    //             next:(data)=>{
    //               this.orders=data;
    //               if(i<this.cartItems.length-1){
    //                 this.orderIds=this.orderIds+this.orders[this.orders.length-1].order_id+" & ";
    //               }else{
    //                 this.orderIds=this.orderIds+this.orders[this.orders.length-1].order_id;
    //               }              
    //               console.log(data);

    //               // These two line of codes are working here
    //               console.log(this.orderIds);
    //               sessionStorage.setItem("orderIds",this.orderIds);    
    //             },
    //             error:(e)=>{console.error(e)}
    //           });    

    //         }        

    //       },
    //       error:(e)=>{console.error(e)}
    //     }); 


    //   },
    //   error:(e)=>{console.error(e)}
    // });  
    
    

    

    // These two line of codes are not working here
    // console.log(this.orderIds);
    // sessionStorage.setItem("orderIds",this.orderIds);    

    // this.router.navigate(['redirect']);
    this.router.navigate(['orderSummary']);
    
  }

}
