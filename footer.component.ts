import { Component } from '@angular/core';

@Component({
  selector: 'footer-app',
  template:`<h2>{{footertext}}</h2>`
})

export class FooterComponent{
  footertext:string=`This is Footer Content Component`;

}