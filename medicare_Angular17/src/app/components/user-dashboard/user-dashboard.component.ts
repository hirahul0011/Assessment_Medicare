import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { ProductImage } from '../../models/product-image.model';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { FileUploadService } from '../../services/file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {

  product?:Product;
  products?:Product[];
  category?:Category;
  categories?:Category[];
  productsByCategoryId?:Product[];

  categoryId:number;
  categoryName:string;
  categoryFetch:boolean;
  
  productDetailsFetch:boolean;
  productId:number;

  productImagesOrg:ProductImage[];

  constructor(private productService:ProductService,
    private categoryService:CategoryService,
    private uploadService:FileUploadService,
    public sanitizer: DomSanitizer,
    private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    // this.router.navigate(['home']); 

    this.categoryName=this.router.url.substring(this.router.url.lastIndexOf('/')+1)

    console.log(this.categoryName);

    this.productService.getAll().subscribe({
      next:(data)=>{
        this.products=data;
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });

    this.categoryService.getAll().subscribe({
      next:(data)=>{
        this.categories=data;
        console.log(data);

        // for(let i=0;i<this.categories.length;i++){
        //   console.log(this.categories[i].category_name);
        //   if(this.categoryName==this.categories[i].category_name){
        //     this.categoryFetch=true;
        //     console.log(this.categoryName)            
        //     // window.location.reload();
        //     break;
        //   }
        // }
        // this.categoryName="";

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

    // this.product.product_id

  }

  clickManage(categoryId:any){
    // this.productService.findByProductcategoryid(categoryId).subscribe({
    //   next:(data)=>{
    //     this.productsByCategoryId=data;
    //     console.log(data);
    //   },
    //   error:(e)=>{console.error(e)}
    // })

    this.productDetailsFetch=false;

    this.categoryId=categoryId

    this.categoryService.getAll().subscribe({
      next:(data)=>{
        this.categories=data;
        console.log(data);

        for(let i=0;i<this.categories.length;i++){
          console.log(this.categories[i].category_id);
          if(this.categoryId==this.categories[i].category_id){
            this.categoryFetch=true;
            console.log(this.categoryId)            
            // window.location.reload();

            this.productService.findByProductcategoryid(this.categoryId).subscribe({
              next:(data)=>{
                this.productsByCategoryId=data;
                console.log(data);
              },
              error:(e)=>{console.error(e)}
            });

            break;
          }
        }
        // this.categoryName="";

      },
      error:(e)=>{console.error(e)}
    });

  }

  productClickManage(productId:number){
    this.productDetailsFetch=true;
    this.productId=productId;
    // this.router.navigate(['products/'+productId])
  }

}
