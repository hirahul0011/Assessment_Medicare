import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import { FileUploadService } from '../../services/file-upload.service';
import { ProductImage } from '../../models/product-image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  product?:Product;
  products?:Product[];
  category?:Category;
  categories?:Category[];
  productsByCategoryId?:Product[];

  productImagesOrg:ProductImage[];

  constructor(private productService:ProductService,
    private categoryService:CategoryService,
    private uploadService:FileUploadService,
    public sanitizer: DomSanitizer,
    private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    // this.router.navigate(['home']);   

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

  clickManage(categoryId:any){
    this.productService.findByProductcategoryid(categoryId).subscribe({
      next:(data)=>{
        this.productsByCategoryId=data;
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    })
  }

}
