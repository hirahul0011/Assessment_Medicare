import { Component, HostListener,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrl: './admin-logout.component.scss'
})

export class AdminLogoutComponent implements OnInit {

  registeredUserName:string;

  constructor(private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    sessionStorage.removeItem("userName");    
    // this.registeredUserName=sessionStorage.getItem("userName");    
    
    window.sessionStorage.clear();
    
    // window.location.reload();    

    this.router.navigate(['home']);  
    this.router.navigate(['home']);    
  }

  // @HostListener('window:unload', ['$event'])
  // unloadHandler(event:any) {
  //   window.sessionStorage.clear();
  //   this.router.navigate(['home']);    
  // }

}
