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
        if(localStorage.getItem('access_token') == null 
        || localStorage.getItem('email-user') == null) {
            return true;
        } else {
            window.location.href = '/empresas-consulta'
            return false;
        }
    }
}