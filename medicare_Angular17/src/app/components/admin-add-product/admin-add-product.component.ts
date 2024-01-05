import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductImage } from '../../models/product-image.model';
import { ProductService } from '../../services/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploadService } from '../../services/file-upload.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrl: './admin-add-product.component.scss'
})
export class AdminAddProductComponent implements OnInit {
  
  product!:Product;
  products!:Product[];
  productImagesOrg!:ProductImage[];

  productIdV!:number;
  productCategoryIdV!:number;
  productNameV!:string;
  productBrandV!:string;
  // productImage!:string;
  productQuantityV!:number;
  productPriceV!:number;
  productStatus!:boolean;

  productImageOrg!:ProductImage;

  categories!:Category[];
  category!:Category;

  productImageId:number;
  errorMessage:string;

  submitted!:boolean;

  constructor(private productService:ProductService,
    public domSanitizer:DomSanitizer,
    private uploadService: FileUploadService,
    private categoryService:CategoryService,
    private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.categoryService.getAll().subscribe({
      next:(data)=>{
        this.categories=data;
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });
    
    this.productService.getAll().subscribe({
      next:(data)=>{
        this.products=data;        
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });

    this.uploadService.getImagesDataToShow().subscribe({
      next:(data)=>{
        this.productImagesOrg=data;       
        console.log(data);
        console.log(this.productImagesOrg);
        console.log(this.products);

        // while(this.products.length!=this.productImagesOrg.length){
        if(this.products.length!=this.productImagesOrg.length){
          if(this.products.length<this.productImagesOrg.length){
            this.uploadService.delete(this.productImagesOrg[this.productImagesOrg.length-1].product_image_id)
                .subscribe(response=>{
                  console.log(response)              
                })
            this.router.navigate(['adminAddProduct']);
          }
        }

      },
      error:(e)=>{console.error(e)}
    });

    
    // this.productImageOrg.product_id
    // this.productImageOrg.product_product_image_name
    // this.productImageOrg.product_product_image_type
    // this.productImageOrg.product_product_image
    
    

    // console.log(this.productImagesOrg.length);

    // while(this.products.length!=this.productImagesOrg.length){
    //   if(this.products.length<this.productImagesOrg.length){
    //     this.uploadService.delete(this.productImagesOrg[this.productImagesOrg.length-1].product_id)
    //         .subscribe(response=>{
    //           console.log(response)              
    //         })
    //   }
    // }

    // this.category.category_name

    console.log(this.errorMessage);

  }

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

    this.errorMessage=undefined;
    console.log(this.errorMessage);

    this.uploadService.getImagesDataToShow().subscribe({
      next:(data)=>{
        this.productImagesOrg=data;               
        
        if(this.products.length!=this.productImagesOrg.length){
          if(this.products.length<this.productImagesOrg.length){
            this.productImageId=this.productImagesOrg[this.productImagesOrg.length-1].product_image_id;                

            const data={
              productcategoryid:this.productCategoryIdV,
              product_name:this.productNameV,
              product_brand:this.productBrandV,
              product_image_id:this.productImageId,
              product_price:this.productPriceV,
              product_quantity:this.productQuantityV,
              product_status:this.productStatus,
            }
        
              console.log(data);
        
              this.productService.create(data).subscribe({  
                next:(response)=>{
                  console.log(response);
                  this.submitted=true;
                },
                error: (e) => {console.error(e)}
              });

          }
          else{
            this.errorMessage="Please add the product image before addition of product in database";
            // this.router.navigate(['adminAddProduct']);
            // return;
          }
        }
        else{
          this.errorMessage="Please add the product image before addition of product in database";
          // this.router.navigate(['adminAddProduct']);          
          // return;
        }

      },
      error:(e)=>{console.error(e)}
    });
    
    // if(this.productCategoryIdV!=undefined){this.product.productcategoryid=this.productCategoryIdV}
    // if(this.productNameV!=undefined){this.product.product_name=this.productNameV}
    // if(this.productBrandV!=undefined){this.product.product_brand=this.productBrandV}
    // if(this.productImage!=undefined){this.product.product_product_image=this.productImage}
    // if(this.productPriceV!=undefined){this.product.product_price=this.productPriceV}
    // if(this.productQuantityV!=undefined){this.product.product_quantity=this.productQuantityV}
    // if(this.productStatus!=undefined){this.product.product_status=this.productStatus}

    // if(this.errorMessage==undefined){
      
      // const data={
      //   productcategoryid:this.productCategoryIdV,
      //   product_name:this.productNameV,
      //   product_brand:this.productBrandV,
      //   product_image_id:this.productImageId,
      //   product_price:this.productPriceV,
      //   product_quantity:this.productQuantityV,
      //   product_status:this.productStatus,
      // }
  
      //   console.log(data);
  
      //   this.productService.create(data).subscribe({  
      //     next:(response)=>{
      //       console.log(response);
      //       this.submitted=true;
      //     },
      //     error: (e) => {console.error(e)}
      //   });

    // }
    

      // this.productService.create(this.productId,this.product)
      //     .subscribe(response=>{
      //       console.log(response)
      //       this.submitted=true;
      //     })
    

  }

}
