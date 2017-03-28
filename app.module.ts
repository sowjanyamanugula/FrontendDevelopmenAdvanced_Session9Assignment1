import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent }  from './home.component';
import { FooterComponent }  from './footer.component';
import { ContainerComponent }  from './container.component';
import { HeaderComponent }  from './header.component';
import {HomeService} from './home.service';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HomeComponent,HeaderComponent,FooterComponent,ContainerComponent],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { }
