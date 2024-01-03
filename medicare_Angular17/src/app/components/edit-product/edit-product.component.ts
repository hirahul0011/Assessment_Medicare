import { Component,OnInit } from '@angular/core';
// import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
// import {produ} from AdminDashboardComponent
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploadService } from '../../services/file-upload.service';
import { ProductImage } from '../../models/product-image.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit {

  productIdS!:String;
  productId!:number;
  product:Product;

  productIdV:number;
  productCategoryIdV:number;
  productNameV:string;
  productBrandV:string;
  productImage:string;
  productQuantityV:number;
  productPriceV:number;
  productStatus:boolean;
  
  productImageOrg:ProductImage;

  submitted:boolean;
  
  
  constructor(private route:ActivatedRoute,
              private router:Router,
              private productService:ProductService,
              public domSanitizer:DomSanitizer,
              private uploadService: FileUploadService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    // const productId:number=this.route.snapshot.params['productId'];

    // const productId:string=this.router.url.substring(this.router.url.lastIndexOf('/')+1,this.router.url.length)
    this.productIdS=this.router.url.substring(this.router.url.lastIndexOf('/')+1)
    this.productId=+this.productIdS;  //String converted into number
    console.log(this.productId)

    this.productService.get(this.productId).subscribe({
      next:(data)=>{
        this.product=data;       
        console.log(data);
        console.log(this.product);
      },
      error:(e)=>{console.error(e)}
    });

    this.uploadService.getImageDataToShow(this.productId).subscribe({
      next:(data)=>{
        this.productImageOrg=data;       
        console.log(data);
        console.log(this.productImageOrg);
      },
      error:(e)=>{console.error(e)}
    });

    // this.product.product_status

  }

  // onChange($event:any){

  // }

  // onUpload(){

  // }

  // handleUpload(event:any) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this.productImage=""+reader.result; // ArrayBuffer converted into String
  //       console.log(reader.result);
  //   };
  // }

  submit(userForm:any){
    this.product.product_id=this.productIdV
    this.product.productcategoryid=this.productCategoryIdV
    this.product.product_name=this.productNameV
    this.product.product_brand=this.productBrandV
    this.product.product_product_image=this.productImage
    this.product.product_price=this.productPriceV
    this.product.product_quantity=this.productQuantityV
    this.product.product_status=this.productStatus

    console.log(userForm);
    console.log(this.product);

    this.productService.get(this.productId).subscribe({
      next:(data)=>{
        this.product=data; 
        
        if(this.productIdV!=undefined){this.product.product_id=this.productIdV}
        if(this.productCategoryIdV!=undefined){this.product.productcategoryid=this.productCategoryIdV}
        if(this.productNameV!=undefined){this.product.product_name=this.productNameV}
        if(this.productBrandV!=undefined){this.product.product_brand=this.productBrandV}
        if(this.productImage!=undefined){this.product.product_product_image=this.productImage}
        if(this.productPriceV!=undefined){this.product.product_price=this.productPriceV}
        if(this.productQuantityV!=undefined){this.product.product_quantity=this.productQuantityV}
        if(this.productStatus!=undefined){this.product.product_status=this.productStatus}

        console.log(this.product);

        this.productService.update(this.productId,this.product)
            .subscribe(response=>{
              console.log(response)
            })

      },
      error:(e)=>{console.error(e)}
    });

    // this.productService.update(this.productId,this.product)
    //         .subscribe(response=>{
    //           console.log(response)
    //         })
  }

}
