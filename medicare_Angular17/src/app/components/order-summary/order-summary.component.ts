import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment.model';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';
import { RegisteredUserService } from '../../services/registered-user.service';
import { RegisteredUser } from '../../models/registered-user.model';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent implements OnInit {

  registeredUserName:string;
  registeredUserId:number;
  registeredUsers:RegisteredUser[];
  // orderIds:number[];
  orderIds:string;
  orders:Order[];
  ordersAdded:boolean;
  payments:Payment[];
  paymentId:number;

  cartItems:Cart[];
  submitted:boolean;
  // fromRedirect:string;
  // this.orderIds=sessionStorage.getItem("orderIds");

  constructor(private router:Router,
    private paymentService:PaymentService,
    private orderService:OrderService,
    private cartService:CartService,
    private registeredUserService:RegisteredUserService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    
    // This way it is always giving the old value
    // this.orderIds=sessionStorage.getItem("orderIds");
    

    // this.fromRedirect=sessionStorage.getItem("fromRedirect");
    // if(this.fromRedirect=="true"){
    //   this.fromRedirect="false";
    //   sessionStorage.setItem("fromRedirect",this.fromRedirect);    
    //   location.reload();
    // }

    // else{
    //   this.router.navigate(['redirect']);
    // }

    this.registeredUserName=sessionStorage.getItem("userName");
    console.log(this.registeredUserName);

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

    this.paymentService.getAll().subscribe({
      next:(data)=>{
        this.payments=data;        
        console.log(data);
        this.paymentId=this.payments[this.payments.length-1].payment_id;
        // sessionStorage.setItem("paymentId",this.paymentId)

        this.orderService.getAll().subscribe({
          next:(data)=>{
            this.orders=data;            
            console.log(data);
            for(let i=0;i<this.orders.length;i++){
              if(this.orders[i].order_payment_id==this.paymentId){
                this.ordersAdded=true;
                break;
              }
            }

            console.log(this.ordersAdded);

            // this.orderIds="";

            console.log(this.orderIds);

            this.cartService.findByCartproductregisteredusername(this.registeredUserName).subscribe({
              next:(data)=>{
                this.cartItems=data;                
                console.log(data);
            
                if(!this.ordersAdded){
                  for(let i=0;i<this.cartItems.length;i++){ 
                  
                  
                    const data1={
                      order_date:new Date(),
                      order_user_id:this.registeredUserId,
                      order_payment_id:this.payments[this.payments.length-1].payment_id,
                      order_product_id:this.cartItems[i].cart_product_id,
                    }
      
                    this.orderService.create(data1).subscribe({  
                      next:(response)=>{
                        console.log(response);
                        this.submitted=true;
                      },
                      error: (e) => {console.error(e)}
                    });
                  
                
                  }
                }
                              

                  this.orderIds="";
                  this.orderService.getAll().subscribe({
                    next:(data)=>{
                      this.orders=data;

                      // this.orderIds="";
                      for(let i=0;i<this.orders.length;i++){
                        if(this.orders[i].order_payment_id==this.paymentId){
                          this.orderIds=this.orderIds+this.orders[i].order_id+" <br> ";            
                          // this.orderIds[this.orderIds.length-1]=this.orders[i].order_id;
                          // this.orderIds.push(Object.assign({}, this.orders[i].order_id))
                          // this.orderIds.push(this.orders[i].order_id);
                        }
                      }
                      // if(i<this.cartItems.length-1){
                      //   this.orderIds=this.orderIds+this.orders[this.orders.length-1].order_id+" <br> ";
                      // }else{
                      //   this.orderIds=this.orderIds+this.orders[this.orders.length-1].order_id;
                      // }              
                      console.log(data);

                      // These two line of codes are working here
                      console.log(this.orderIds);
                      // sessionStorage.setItem("orderIds",this.orderIds);    
                    },
                    error:(e)=>{console.error(e)}
                  });    

                        

              },
              error:(e)=>{console.error(e)}
            }); 
            
          },
          error:(e)=>{console.error(e)}
        });
        
        


      },
      error:(e)=>{console.error(e)}
    });  

    

    this.cartService.findByCartproductregisteredusername(this.registeredUserName).subscribe({
      next:(data)=>{
        this.cartItems=data;                
        console.log(data);

        for(let i=0;i<this.cartItems.length;i++){
          
          this.cartService.delete(this.cartItems[i].cart_id).subscribe({  
            next:(response)=>{
              console.log(response);              
            },
            error: (e) => {console.error(e)}
          });

        }
      },
      error:(e)=>{console.error(e)}
    }); 


    // this.paymentService.getAll().subscribe({
    //   next:(data)=>{
    //     this.payments=data;        
    //     console.log(data);
    //     this.paymentId=this.payments[this.payments.length-1].payment_id;     
        
    //     this.orderIds="";
    //     // this.paymentId=+sessionStorage.getItem("paymentId");
    //     console.log(this.paymentId)
    //     this.orderService.getAll().subscribe({
    //       next:(data)=>{
    //         this.orders=data;        
    //         console.log(data);
    //         for(let i=0;i<this.orders.length;i++){
    //           if(this.orders[i].order_payment_id==this.paymentId){
    //             this.orderIds=this.orderIds+this.orders[i].order_id+" <br> ";            
    //             // this.orderIds[this.orderIds.length-1]=this.orders[i].order_id;
    //             // this.orderIds.push(Object.assign({}, this.orders[i].order_id))
    //             // this.orderIds.push(this.orders[i].order_id);
    //           }
    //         }
    //         // These two line of codes are working here
    //         console.log(this.orderIds);        
    //       },
    //       error:(e)=>{console.error(e)}
    //     });  

    //   },
    //   error:(e)=>{console.error(e)}
    // });  


    
    
  }  
  
}
