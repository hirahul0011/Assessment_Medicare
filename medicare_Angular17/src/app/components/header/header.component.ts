import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
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
export class HeaderComponent {

  isAdmin!:boolean;
  isRegisteredUser!:boolean;
  isHome!:boolean;

  constructor ( private router:  Router ) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )
  }

  handleRouteChange=()=>{
    if (this.router.url.includes('admin')) {
    // if (this.router.url.endsWith('admin')) {  
      // if (this.router.url.substring(this.router.url.lastIndexOf('/'),this.router.url.length).includes('admin')) {  
        this.isHome=false;
        this.isAdmin=true;
        this.isRegisteredUser=false;
     }
     else if (this.router.url.includes('registeredUser')) {
    // else if (this.router.url.endsWith('registeredUser')) {
      // else if (this.router.url.substring(this.router.url.lastIndexOf('/'),this.router.url.length).includes('registeredUser')) {
        this.isHome=false;
        this.isAdmin=false;
        this.isRegisteredUser=true;
     }
     else if (this.router.url.includes('home')) {
    // else if (this.router.url.endsWith('home')) {
      // else if (this.router.url.substring(this.router.url.lastIndexOf('/'),this.router.url.length).includes('home')) {
      this.isHome=true;
      this.isAdmin=false;
      this.isRegisteredUser=false;
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
