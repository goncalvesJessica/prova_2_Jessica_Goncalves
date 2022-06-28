import { Component, Input, OnInit } from '@angular/core';
import { Livro } from '../shared/Livro';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() livro: Livro = new Livro();

  constructor() { }

  ngOnInit(): void {
    this.livro = new Livro();
  }

}
