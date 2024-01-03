import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrl: './admin-add-category.component.scss'
})
export class AdminAddCategoryComponent implements OnInit {

  categories:Category[];
  category:Category;
  categoryAddedV:string;
  
  isSubmitted:boolean;
  successMessage:string;
  errorMessage:string;
  
  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.categoryService.getAll().subscribe({
      next:(data)=>{
        this.categories=data;
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });    
    
  }

  submit(userForm:any){
    this.successMessage="Category Added Sucessfully";

    
    if(this.categoryAddedV!=undefined && this.categoryAddedV!=""){
      console.log(this.categoryAddedV);

      // this.category.category_name=this.categoryAddedV;  //we need to discuss on how we choose between 
                                                           //these two methods
      this.category={
        category_name:this.categoryAddedV
      }

      this.categoryService.create(this.category).subscribe({  
        next:(response)=>{
          console.log(response);
          this.isSubmitted=true;
        },
        error: (e) => {console.error(e)}
      });

    }else{
      this.errorMessage="Please put some text before adding the category!"
    }
  }

  

}
