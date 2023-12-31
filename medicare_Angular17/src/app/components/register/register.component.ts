import { Component,OnInit } from '@angular/core';
import { RegisteredUserService } from '../../services/registered-user.service';
import { RegisteredUser } from '../../models/registered-user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registeredUsers!:RegisteredUser[];
  registeredUser!:RegisteredUser;
  userNameV!:string;
  // name!:string;
  passwordV!:string;
  confirmPasswordV!:string;
  emailIdV!:string;
  phoneNumberV!:string;
  address!:string;
  location!:string;
  submitted!:boolean;

  constructor(private registeredUserService:RegisteredUserService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.registeredUserService.getAll().subscribe({
      next:(data)=>{
        this.registeredUsers=data;
        console.log(data);
      },
      error:(e)=>{console.error(e)}
    });

  }

  userNameAvailability():boolean{
    for(let i=0;i<this.registeredUsers.length;i++){
      if(this.userNameV.toLowerCase()==this.registeredUsers[i].registered_user_name?.toLowerCase()){
        return false;
      }
    }
    return true;    
  }

  passwordConfirmation():boolean{
    // console.log(this.passwordV)
    // console.log(this.confirmPasswordV)
    if(this.passwordV==this.confirmPasswordV){
      return true;
    }
    return false;
  }

  submit(userForm:NgForm){ 
    // console.log(
    // this.userNameV,
    // this.passwordV,
    // this.emailIdV,
    // this.phoneNumberV,
    // this.address,
    // this.location
    // );

    // We need to check further if Model instance and its variables can be used to create a record
    // this.registeredUser.registered_user_name=this.userNameV;
    // this.registeredUser.registered_user_password=this.passwordV;
    // this.registeredUser.registered_user_mail_id=this.emailIdV;
    // this.registeredUser.registered_user_phone_number=this.phoneNumberV;
    // this.registeredUser.registered_user_address=this.address;
    // this.registeredUser.registered_user_location=this.location;

    // Creation of object is the right way to create a record in data base
    const data = {
      registered_user_name:this.userNameV,
      registered_user_password:this.passwordV,
      registered_user_mail_id:this.emailIdV,
      registered_user_phone_number:this.phoneNumberV,
      registered_user_address:this.address,
      registered_user_location:this.location
    };

    // this.registeredUserService.create(this.registeredUser).subscribe({
    this.registeredUserService.create(data).subscribe({  // right way to create a record in data base
      next:(response)=>{
        console.log(response);
        this.submitted=true;
      },
      error: (e) => {console.error(e)}
    });

  }

}
