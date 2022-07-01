import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  
  private issuer = {
    login: 'http://127.0.0.1:8000/api/login',
     register: 'http://127.0.0.1:8000/api/register',
   };
  
  
   constructor() { }

   handleData(token: any) {
    localStorage.setItem('auth_token', token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  isValidToken() {
    const token = this.getToken();
    if (token) {
      //const payload = this.payload(token);
      if (token) {/*
        return Object.values(this.issuer).indexOf(payload.iss) > -1
          ? true
          : false;*/


          return true;
      }
    } else {
      return false;
    }
  }

  payload(token: any) {
    /*const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));*/

    //return atob(token.split('.')[1]);

    // won't work because of my error in backend as i encoded my token in laravel as plain text token !!! a mistake that i discovred at the end of the deadline 
    // so i couldn't change it
  }

  isLoggedIn() {
    return this.isValidToken();
  }
  
  removeToken() {
    localStorage.removeItem('auth_token');
  }
}
