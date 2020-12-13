import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authtenticate(user, pass) {
    if (user === 'Avinash' && pass === "Avinash") {
      sessionStorage.setItem('authUser', user);
      return true
    }
    else
      return false
  }
  isLoggedIn(){
    let user = sessionStorage.getItem('authUser')
    return !(user ===null);
  }
  logout(){
    sessionStorage.removeItem('authUser');
  }
}
