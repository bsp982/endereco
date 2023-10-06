import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Endereco} from "../models/Endereco";

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  enderecos: Endereco[] = [];

  constructor(private httpClient: HttpClient) {
  }

  async buscaEndereco(cep: string) {
    const requisicao = await this.httpClient
      .get<any>('https://brasilapi.com.br/api/cep/v1/{cep}')
      .toPromise();
    this.enderecos = requisicao.results;
  }
}
