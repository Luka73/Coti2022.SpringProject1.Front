import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

/*
    Guardião para as rotas:
        /empresas-cadastro
        /empresas-consulta
        /empresas-edicao/:id
*/
@Injectable()
export class AccountGuard implements CanActivate {
    canActivate() {
           //REGRA: Só acessar se o usuário NÃO estiver autenticado
           if (localStorage.getItem('access_token') == null
           || localStorage.getItem('email_user') == null) {
           return true;
       }
       else {
           window.location.href = '/empresas-consulta';
           return false;
       }

    }
}