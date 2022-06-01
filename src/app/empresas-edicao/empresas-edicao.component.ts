import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-empresas-edicao',
  templateUrl: './empresas-edicao.component.html',
  styleUrls: ['./empresas-edicao.component.css']
})
export class EmpresasEdicaoComponent implements OnInit {

  mensagem_sucesso : string = '';
  mensagem_erro : string = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  formEdicao = new FormGroup({
    idEmpresa: new FormControl('', [Validators.required]),
    nomeFantasia: new FormControl('', [Validators.required]),
    razaoSocial: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required])

  });

  get form(): any {
    return this.formEdicao.controls;
  }

  ngOnInit(): void {
    var idEmpresa = this.activatedRoute.snapshot.paramMap.get('idEmpresa');
    this.httpClient.get(environment.apiEmpresas + "/" + idEmpresa)
    .subscribe({
      next: (result) => {
        //console.log(result);
        this.formEdicao.patchValue(result);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  onSubmit(): void {
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';

    this.httpClient.put(environment.apiEmpresas, this.formEdicao.value, { responseType : 'text' })
      .subscribe({
        next: (result) => {
          //console.log(result);
          this.mensagem_sucesso = result;
        },
        error: (e) => {
          //console.log(e);
          this.mensagem_erro = e.error;
        }
      });
  }

}
