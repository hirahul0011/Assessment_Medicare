import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

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

  constructor(private productservice:ProductService,
    private categoryservice:CategoryService,
    public sanitizer: DomSanitizer){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.productservice.getAll().subscribe({
      next:(data)=>{
        this.products=data;
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });

    this.categoryservice.getAll().subscribe({
      next:(data)=>{
        this.categories=data;
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });
  }

  clickManage(categoryId:any){
    this.productservice.findByProductcategoryid(categoryId).subscribe({
      next:(data)=>{
        this.productsByCategoryId=data;
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    })
  }

}
