import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {
  constructor() { }

  autentica = (user: string, psw: string): boolean => {
    var retVal = (user === 'admin' && psw === 'admin') ? true : false

    if(retVal){
      sessionStorage.setItem("user", user)
    }
    return retVal
  }

  loggedUser = (): string | null => (sessionStorage.getItem("user")) ? sessionStorage.getItem("user") : null
  isLogged = (): boolean => (sessionStorage.getItem("user")) ? true : false
  clearUser = (): void => sessionStorage.removeItem("user")
  clearAll = ():void => sessionStorage.clear()

}
