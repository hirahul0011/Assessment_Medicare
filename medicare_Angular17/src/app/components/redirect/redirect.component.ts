import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.scss'
})
export class RedirectComponent implements OnInit {

  // orderIds:string;
  // fromRedirect:string;

  constructor(private router:Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.orderIds=sessionStorage.getItem("orderIds");
    // sessionStorage.setItem("orderIds",this.orderIds);    
    // this.fromRedirect="true";
    // sessionStorage.setItem("fromRedirect",this.fromRedirect);    
    this.router.navigate(['home']);
  }

}
