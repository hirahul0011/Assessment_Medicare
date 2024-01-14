import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers:[
    Location,
    {provide:LocationStrategy,useClass:PathLocationStrategy}
  ]
})
export class HeaderComponent implements OnInit {

  isAdmin!:boolean;
  isRegisteredUser!:boolean;
  isHome!:boolean;

  registeredUserName:string;

  constructor ( private router:  Router ) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');      

    this.registeredUserName=sessionStorage.getItem("userName");
    console.log(this.registeredUserName);
    
    // if(this.registeredUserName==null){      
    //   this.router.navigate(['home']); 
    // }

    // sessionStorage.setItem("userName",this.registeredUserName);
  }

  handleRouteChange=()=>{
    if (this.router.url.includes('admin')) {
    // if (this.router.url.endsWith('admin')) {  
      // if (this.router.url.substring(this.router.url.lastIndexOf('/'),this.router.url.length).includes('admin')) {  
        this.isHome=false;
        this.isAdmin=true;
        this.isRegisteredUser=false;

        console.log(this.registeredUserName);
     }
     else if (this.router.url.includes('registeredUser') || this.registeredUserName!=null) {
      // else if (this.registeredUserName!=null) {
    // else if (this.router.url.endsWith('registeredUser')) {
      // else if (this.router.url.substring(this.router.url.lastIndexOf('/'),this.router.url.length).includes('registeredUser')) {
        this.isHome=false;
        this.isAdmin=false;
        this.isRegisteredUser=true;

        // this.registeredUserName=this.router.url.substring(this.router.url.lastIndexOf('/')+1);

        console.log(this.registeredUserName);

        this.registeredUserName=sessionStorage.getItem("userName");
        // sessionStorage.setItem("userName",this.registeredUserName);        
     }
     else if (this.router.url.includes('home')) {
    // else if (this.router.url.endsWith('home')) {
      // else if (this.router.url.substring(this.router.url.lastIndexOf('/'),this.router.url.length).includes('home')) {
      this.isHome=true;
      this.isAdmin=false;
      this.isRegisteredUser=false;      

      console.log(this.registeredUserName);
     }
  };


  // location!:Location;

  // isAdminRoute():boolean{
  //   return this.location.pathname.indexOf('/admin') > -1;
  // }

  // isRegisteredUserRoute():boolean{
  //   return this.location.pathname.indexOf('/registeredUser') > -1;
  // }

}
