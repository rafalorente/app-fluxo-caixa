import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificacaoContaService } from './services/classificacao-conta/classificacao-conta.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ClassificacaoContaComponent } from './components/classificacao-conta/classificacao-conta.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatSlideToggleModule, ClassificacaoContaComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {

  constructor(private classificacaoContaService: ClassificacaoContaService) { }

  title = 'app-fluxo-caixa';


}
