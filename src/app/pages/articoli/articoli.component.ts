import { ArticoliService } from './../../../services/articoli.service';
import { IArticoli } from '../../models/articoli';
import { Component } from '@angular/core';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})

export class ArticoliComponent {
  articoli: IArticoli[] = []

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoli = this.articoliService.getArticoli()
  }
}
