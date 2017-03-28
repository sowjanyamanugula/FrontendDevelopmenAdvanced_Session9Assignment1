import { Component } from '@angular/core';

@Component({
  selector: 'container-app',
  template:`<h2>{{containertext}}</h2>`
})

export class ContainerComponent{
    containertext:string=`This is Container Content Component`;

}