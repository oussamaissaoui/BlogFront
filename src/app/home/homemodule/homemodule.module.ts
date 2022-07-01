import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomemoduleRoutingModule } from './homemodule-routing.module';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogItemsComponent } from './components/blog-items/blog-items.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';


@NgModule({
  declarations: [LoginComponent, NavbarComponent, BlogItemsComponent],
  imports: [
    CommonModule,
    HomemoduleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class HomemoduleModule { }
