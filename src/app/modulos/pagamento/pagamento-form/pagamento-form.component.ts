import { Item } from './item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento-form',
  templateUrl: './pagamento-form.component.html',
  styleUrls: ['./pagamento-form.component.css']
})
export class PagamentoFormComponent implements OnInit {

  constructor() { }

  nome: string = "Kennedy Luiz Tomazete";
  email: string = "kennedy-tomazete@gmail.com"

  item: Item = {
    cod: '1',
    nome: 'SSD 500GB',
    preco: '25.00',
    quantidade: '2',
    peso: '150'
  }
  ngOnInit(): void {

  }

}
