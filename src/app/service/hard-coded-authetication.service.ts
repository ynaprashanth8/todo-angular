import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAutheticationService {

  constructor() { }

  authetication(userName: string, password: string) {
    if (userName === 'Prashanth' && password === 'yna') {
      sessionStorage.setItem('autheticationUser', userName);
      return true;
    }
    return false;
  }

  isLoggedIn(){
   let  user = sessionStorage.getItem('autheticationUser');
   console.log("user", user)
   return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('autheticationUser')
  }
}