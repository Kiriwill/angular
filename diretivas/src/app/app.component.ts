import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textoBotao = 'Esconder';
  esconder = false;
  pessoas = [];

  alterarExibicao(){
    this.textoBotao = this.esconder ? "Exibir" : "Esconder";
    this.esconder = !this.esconder;
  }

  onAdicionarPessoa(pessoa){
    this.pessoas = [pessoa, ... this.pessoas]  
  }
}
