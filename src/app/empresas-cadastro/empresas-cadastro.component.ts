import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-empresas-cadastro',
  templateUrl: './empresas-cadastro.component.html',
  styleUrls: ['./empresas-cadastro.component.css']
})
export class EmpresasCadastroComponent implements OnInit {

  mensagem_sucesso: string = '';
  mensagem_erro: string = '';

  constructor(
    private httpCliente: HttpClient
  ) { }

  ngOnInit(): void {
  }

  formCadastro = new FormGroup({
    nomeFantasia: new FormControl('', [Validators.required]),
    razaoSocial: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formCadastro.controls;
  }

  onSubmit(): void {

    this.mensagem_sucesso = '';
    this.mensagem_erro = '';

    //console.log(this.formCadastro.value);
    const url = environment.apiEmpresas;
    const dados = this.formCadastro.value;

    this.httpCliente.post(url, dados, { responseType: 'text' })
      .subscribe({
        next: (result) => { //success
          //console.log(result)
          this.mensagem_sucesso = result;
          this.formCadastro.reset();
        },
        error: (e) => { //error
          //console.log(e)
          this.mensagem_erro = e.error;
        }
      });
  }

}
