import { Component, HostListener,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrl: './admin-logout.component.scss'
})

export class AdminLogoutComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    window.sessionStorage.clear();
    this.router.navigate(['home']);    
  }

  // @HostListener('window:unload', ['$event'])
  // unloadHandler(event:any) {
  //   window.sessionStorage.clear();
  //   this.router.navigate(['home']);    
  // }

}
