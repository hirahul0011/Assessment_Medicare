import { Component,Input,OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ProductImage } from '../../models/product-image.model';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {

  products!:Product[];
  product!:Product;
  activationStatus!:boolean
  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();
  productId!:number;

  productImagesOrg:ProductImage[];
  productImages:string[];

  constructor(private productService:ProductService,
    public sanitizer: DomSanitizer,
    private router: Router,
    private uploadService: FileUploadService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

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

    this.productService.getAll().subscribe({
      next:(data)=>{
        this.products=data;
        this.dtTrigger.next(null);
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });

    this.uploadService.getImagesDataToShow().subscribe({
      next:(data)=>{
        this.productImagesOrg=data;       
        console.log(data);
        console.log(this.productImagesOrg);

        // for(let i=0;i<this.productImagesOrg.length;i++){
        //   this.productImages.push(this.productImagesOrg[i].product_product_image);
        // }  
        
        // console.log(this.productImages);

      },
      error:(e)=>{console.error(e)}
    });

    

    // this.product.product_status?.valueOf

  }

  fetchProductImage(product_image_id: number):any{
    for(let i=0;i<this.productImagesOrg.length;i++){
      if(this.productImagesOrg[i].product_image_id=product_image_id){
        return this.productImages[i];
      }
    }
  }

  changeActivationStatus(productId:number){
    // console.log(productId)
    this.productService.get(productId).subscribe({
      next:(data)=>{
        this.product=data;       

            this.product.product_status=this.product.product_status?false:true;
            this.productService.update(productId,this.product)
            .subscribe(response=>{
              console.log(response)
            })

        console.log(data);
        console.log(this.product);
      },
      error:(e)=>{console.error(e)}
    });

    // We need to check why this commented code 76-83 is not working however 
    // it is working in above block of code
    // console.log(this.product);

    // this.product.product_status=this.product.product_status?false:true;    

    // this.productService.update(productId,this.product)
    // .subscribe(response=>{
    //   console.log(response)
    // })
  }

  editProductManage(productId:number){
    // console.log("clicked");
    this.productId=productId;
    this.router.navigate(['editProduct',productId]);
  }

}
