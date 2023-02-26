import { SalutiDataService } from '../../../services/data/saluti-data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private salutiSrv: SalutiDataService) { }   // per ricevere variabili //

  user: string = ''

  titolo: string = ``
  sottotitolo = "Visualizza le offerte del giorno"

  ngOnInit(): void {
    this.user = this.route.snapshot.params['user']
    this.titolo = `Benvenuto in AlphaShop, ${this.user}`
  }

  getSaluti = (): void => {
    this.salutiSrv.getSaluti().subscribe(
      response => console.log(response)
    )
  }
}
