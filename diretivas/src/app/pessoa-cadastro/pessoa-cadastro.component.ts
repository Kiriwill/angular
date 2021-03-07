import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {

  // crio um novo evento e posso chamar ele por um EventBind
  // e emito ele para o DOM para conseguir pegar pelo app.component
  @Output() pessoaAdicionada = new EventEmitter();

  adicionar(nome, idade){
    const pessoa = {nome, idade}
    this.pessoaAdicionada.emit(pessoa);
  }

}
