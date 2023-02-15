import { AuthappService } from '../../../services/authapp.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private route: Router, private BasicAuth: AuthappService){ }

  user = ''
  psw = ''

  autenticato: boolean = true;
  err: string = "Username o password errati"

  titolo: string = "Accesso e autenticazione"
  sottotitolo = "Inserisci username e password"

  auth(){
    console.log(this.user);

    if(this.BasicAuth.autentica(this.user, this.psw)){
      this.autenticato = true
      this.route.navigate(['welcome', this.user])   // ti manda alla pagina x //
    }
    else
      this.autenticato = false
  }
}
