import { IArticoli } from './../../models/articoli';
import { ArticoliService } from './../../../services/articoli.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {
  articoli$: IArticoli[] = []

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoli$ = this.articoliService.getArticoli()
    console.log(this.articoli$)
  }

}
