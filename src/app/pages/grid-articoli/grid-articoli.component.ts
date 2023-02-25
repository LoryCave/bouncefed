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

  handleEdit = (codart: string) => {
    console.log(`edit - ${codart}`)
  }

  handleDelete = (codart: string) => {
    console.log(`delete - ${codart}`)

    this.articoli$.splice(this.articoli$.findIndex(x => x.codart === codart), 1)
    console.log(this.articoli$)
  }
}
