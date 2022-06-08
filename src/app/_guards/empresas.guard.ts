import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
 
/*
    Guardião para as rotas:
        /(raiz)
        /register-user
        /password-recover
*/
@Injectable()
export class EmpresasGuard implements CanActivate {
 
    canActivate() {
 
        //REGRA: Só acessar se o usuário ESTIVER autenticado
        if (localStorage.getItem('access_token') != null
            && localStorage.getItem('email_user') != null) {
            return true;
        }
        else {
            window.location.href = '/';
            return false;
        }
    }
 
}
