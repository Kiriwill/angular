import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome:string;
  exibirCaixa:boolean = true;
  produto;

  alterarProduto(produtoInput){
    this.produto = 'Novo Produto: ' + produtoInput.value;
  }

  adicionar(inputNome){
    this.nome = inputNome.value;
    this.exibirCaixa = !this.nome;
  }
  esconder(){
    this.exibirCaixa = !this.exibirCaixa;
  }
  monitoraVazio(nome){
    this.nome = nome.value;
    if (!nome){
      this.exibirCaixa = false;
    }
  }
}
