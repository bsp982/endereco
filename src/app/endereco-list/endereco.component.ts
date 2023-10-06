import {Component} from '@angular/core';
import {EnderecoService} from "../services/endereco.service";

@Component({
  selector: 'endereco-component',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.sass'],
})
export class EnderecoComponent {

  cep: string = '';

  private ederecoService: EnderecoService;

  constructor(ederecoService: EnderecoService) {
    this.ederecoService = ederecoService;
  }

  onCepChange(event: string) {
    if (event) {
      this.ederecoService.buscaEndereco(event).then(result => {
        console.log(result);
      })
    }
  }
}
