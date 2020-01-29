import { EventEmitter, Output, Component, OnInit } from '@angular/core';
import { Produto }           from '../model/produto';


@Component({
  selector: 'app-listagemproduto',
  templateUrl: './listagemproduto.component.html',
  styleUrls: ['./listagemproduto.component.css']
})
export class ListagemprodutoComponent implements OnInit {

  listaprodutos : Array<Produto>= new Array<Produto>();
  lerProduto : Produto;

  data: Produto[];
  url = 'http://localhost:30000/produto';

  @Output() onSelectNumero: EventEmitter<number> = new EventEmitter<number>();
  
  @Output() onSelectProduto: EventEmitter<Produto> = new EventEmitter<Produto>();

  constructor() { }

  ngOnInit() {
  }

  onSelectEnviaUm(cod : number) {

    this.onSelectNumero.emit(cod);

  }

  onSelectEnviaDois(p : Produto) {

    this.onSelectProduto.emit(p);

  }

}
