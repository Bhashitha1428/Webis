import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeBODYComponent } from './Component/Home/home-body/home-body.component';
import { CatergoryComponent } from './Component/Catergory/catergory/catergory.component';
import { JSCatergoryComponent } from './Component/Catergory/jscatergory/jscatergory.component';
import { WebCatergoryComponent } from './Component/Catergory/web-catergory/web-catergory.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { LoginComponent } from './Component/login/login.component';
import { Navbar2Component } from './Component/navbar2/navbar2.component';



const appRoutes:Routes= [
  {path:'', component:HomeBODYComponent},
  {path:'Catergory', component:CatergoryComponent},
 
]
@NgModule({
  declarations: [
    AppComponent,
    HomeBODYComponent,
    CatergoryComponent,
    JSCatergoryComponent,
    WebCatergoryComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    Navbar2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
