import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ClassificacaoConta } from '../../interface/classificacao-conta';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassificacaoContaService {

  url: string = 'https://localhost:7035';
  http = inject(HttpClient);

  constructor() { }

  listarClassificacaoConta() {
    return this.http.get<ClassificacaoConta[]>(`${this.url}/api/ClassificacaoConta/ListarClassificacaoConta`).pipe(map((response: any) => response.data))
  }

  excluirClassificacaoConta(itemId: number) {

    return this.http.delete(`${this.url}/api/ClassificacaoConta/ExcluirClassificacaoConta/${itemId}`)

  }

   adicionarClassificacao(data: Partial<ClassificacaoConta>): Observable<any> {
    return this.http.post(`${this.url}/api/ClassificacaoConta/CriarClassificacaoConta/`, data);
  }
}
