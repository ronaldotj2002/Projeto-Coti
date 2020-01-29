import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-detalheproduto',
  templateUrl: './detalheproduto.component.html',
  styleUrls: ['./detalheproduto.component.css']
})
export class DetalheprodutoComponent implements OnInit {

  @Input() recebeProduto : Produto;

  constructor() { }

  ngOnInit() {
  }

}
