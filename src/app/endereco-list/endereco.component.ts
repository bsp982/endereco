import {Component, Input} from '@angular/core';

@Component({
  selector: 'endereco-component',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.sass'],
})
export class EnderecoComponent {
  @Input()
  cep: string = '';


  // pegarImagemPokemon() {
  //   const numeroFormatado = this.leadingZero(this.numero);
  //
  //   return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  // }
  //
  // leadingZero(str: string | number, size = 3): string {
  //   let s = String(str);
  //
  //   while (s.length < (size || 2)) {
  //     s = '0' + s;
  //   }
  //
  //   return s;
  // }
}
