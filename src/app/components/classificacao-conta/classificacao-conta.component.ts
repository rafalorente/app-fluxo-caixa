import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ClassificacaoConta } from '../../interface/classificacao-conta';
import { ClassificacaoContaService } from '../../services/classificacao-conta/classificacao-conta.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // Importar FormsModule


@Component({
  selector: 'app-classificacao-conta',
  imports: [MatTableModule, MatDividerModule, MatButtonModule, MatIconModule, MatInputModule, FormsModule],
  templateUrl: './classificacao-conta.component.html',
  styleUrl: './classificacao-conta.component.scss'
})
export class ClassificacaoContaComponent {
  descricaoClassificacao: string = '';
  listaLancamentos: ClassificacaoConta[] = [];
  displayedColumns: string[] = ['idClassificacaoConta', 'idCliente', 'descricaoClassificacaoConta', 'acoes'];

  constructor(private classificacaoContaService: ClassificacaoContaService) { }

  ngOnInit(): void {
    this.listarClassificacaoConta();
  }

  async listarClassificacaoConta() {
    this.descricaoClassificacao = '';

    this.classificacaoContaService.listarClassificacaoConta().subscribe((response) => {
      this.listaLancamentos = response;
    });
  }

  excluirClassificacaoConta(itemId: number): void {
    this.classificacaoContaService.excluirClassificacaoConta(itemId).subscribe({
      next: () => {
        console.log('Item excluído com sucesso!');
        // Atualize a lista localmente removendo o item
        this.listaLancamentos = this.listaLancamentos.filter(item => item.idClassificacaoConta !== itemId);
      },
      error: (err) => {
        console.error('Erro ao excluir o item:', err);
      },
    });
  }
  // Método para adicionar uma nova classificação
  adicionarClassificacao(): void {
    const novaClassificacao: Partial<ClassificacaoConta> = {
      descricaoClassificacaoConta: this.descricaoClassificacao,
      idCliente: 0
    }; // Usando a interface para tipar o objeto

    this.classificacaoContaService.adicionarClassificacao(novaClassificacao).subscribe({
      next: (response: ClassificacaoConta) => {
        console.log('Classificação criada com sucesso:', response);
        this.listarClassificacaoConta();
      },
      error: (err) => {
        console.error('Erro ao criar classificação:', err);
      },
    });
  }
}
