import { Router } from '@angular/router';
import { AuthappService } from '../../../services/authapp.service';
import { Component } from '@angular/core';
import { map, take, timer } from 'rxjs';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private BasicAuth: AuthappService, private route: Router) { }

  x = 5

  ngOnInit(): void {
    this.BasicAuth.clearAll()

    setTimeout(() => {
      this.route.navigate(['login'])
    }, this.x*1000);  //5s
  }
}
