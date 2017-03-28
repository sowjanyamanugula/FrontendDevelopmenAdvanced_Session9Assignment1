import { Component } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'my-app',
  template: ` <h2>{{pageTitle}}</h2>
              <head-app></head-app>
               <container-app></container-app>
              <footer-app></footer-app>
             `,
  providers:[HomeService]
    
})
export class HomeComponent  {
   pageTitle : string = `Session 9 Assignment1`; 
  
  }



