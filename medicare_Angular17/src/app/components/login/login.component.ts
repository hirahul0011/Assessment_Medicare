import { Component,OnInit } from '@angular/core';
import { RegisteredUserService } from '../../services/registered-user.service';
import { RegisteredUser } from '../../models/registered-user.model';
import { Admin } from '../../models/admin.model';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  registeredUsers!:RegisteredUser[];
  admins!:Admin[];
  userId!:string;
  password!:string;
  adminConfirm!:boolean;
  userConfirm!:boolean;
  errorMessage!:string;  
  isSubmitted!:boolean;

  constructor(private registeredUserService:RegisteredUserService,
    private adminService:AdminService,
    private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.registeredUserService.getAll().subscribe({
      next:(data)=>{
        this.registeredUsers=data;
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });

    this.adminService.getAll().subscribe({
      next:(data)=>{
        this.admins=data;
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });

  }

  submit(userForm:any){  
    
    // console.log((this.userId).toUpperCase());
    // console.log(this.registeredUsers[1].registered_user_name?.toUpperCase())

    if(this.userId.substring(0,5).toLowerCase()=="admin"){
      for(let i=0;i<this.admins.length;i++){        
        if(this.userId.toLowerCase()==this.admins[i].admin_user_name?.toLowerCase() && 
        this.password==this.admins[i].admin_password){
          this.adminConfirm=true;
          this.isSubmitted=true;
          this.router.navigate(['admin']);
          break;
        }
      }
      this.isSubmitted=true;
      this.errorMessage="Please check the credentials!"
    }else{
      for(let i=0;i<this.registeredUsers.length;i++){
        if(this.userId.toUpperCase()==this.registeredUsers[i].registered_user_name?.toUpperCase() && 
        this.password==this.registeredUsers[i].registered_user_password){
          this.userConfirm=true;
          this.isSubmitted=true;
          this.router.navigate(['registeredUser']);
          break;
        }
      }
      this.isSubmitted=true;
      this.errorMessage="Please check the credentials!"      
    }
  }

  // redirectForAdmin() {
  //   this.router.navigate(['admin']);
  // }

  // redirectForUser() {
  //   this.router.navigate(['registeredUser']);
  // }

}
