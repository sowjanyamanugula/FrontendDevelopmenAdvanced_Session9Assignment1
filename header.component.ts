import { Component,OnInit } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'head-app',
  template:`<h2>{{headertext}}</h2>
            `
})

export class HeaderComponent implements OnInit{
    headertext:string=`This is Header Content Component`;
   obj=[];
  constructor(private _homeservice:HomeService)
   {

   }
   ngOnInit(){
       this.obj=this._homeservice.getobjects();
   }
}