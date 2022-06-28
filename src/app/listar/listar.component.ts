import { Component, OnInit } from '@angular/core';
import { Livro } from './../shared/Livro';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  livros: Livro[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
