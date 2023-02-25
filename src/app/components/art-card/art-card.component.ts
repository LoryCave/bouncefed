import { IArticoli } from './../../models/articoli';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.css']
})
export class ArtCardComponent {
  @Input() articolo: IArticoli = {
    codart: '',
    descrizione: '',
    um: '',
    pzcart: 0,
    peso: 0,
    prezzo: 0,
    active: true,
    data: new Date(),
    imageUrl: ''
  }

  @Output() delete = new EventEmitter()
  @Output() edit = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

  editArt = () => this.edit.emit(this.articolo.codart)
  delArt = () => this.delete.emit(this.articolo.codart)
}
