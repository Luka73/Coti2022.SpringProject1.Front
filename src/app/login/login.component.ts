import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem_erro: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  formLogin = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    senha : new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get form(): any{
    return this.formLogin.controls;
  }

  onSubmit(): void {
    this.httpClient.post(environment.apiLogin, this.formLogin.value,
      { responseType: 'text' })
      .subscribe({
        next: (result) => {
          //guardar o TOKEN em uma local storage
          localStorage.setItem('access_token', result);
          localStorage.setItem('email_user', this.formLogin.value.email);
          //redirecionar para a página de consulta de empresas
          window.location.href = '/empresas-consulta';
        },
        error: (e) => {
          this.mensagem_erro = e.error;
        }
      });
  }
}
