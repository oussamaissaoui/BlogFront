import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGrdGuard implements CanActivate {

  constructor(private tokenService:TokenService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;

    let isLoggedIn = this.tokenService.isLoggedIn();

    if (isLoggedIn){
      return true
    } else {
      this.router.navigate(['']);
    }
  }
  
}
