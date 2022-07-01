import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogItemsComponent } from './components/blog-items/blog-items.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGrdGuard } from './services/auth-grd.guard';

const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'login',component:LoginComponent},
  
  {path:'blog',component:BlogItemsComponent,canActivate:[AuthGrdGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomemoduleRoutingModule { }
