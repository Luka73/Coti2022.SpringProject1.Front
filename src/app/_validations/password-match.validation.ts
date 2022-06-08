import { AbstractControl } from "@angular/forms";

export class PasswordMatchValidation {

    static MatchPassword(abstractControl: AbstractControl) {
    
        let senha = abstractControl.get('senha')?.value;
        let senhaConfirmacao = abstractControl.get('senhaConfirmacao')?.value;

        if(senha != senhaConfirmacao) {
            abstractControl.get('senhaConfirmacao')?.setErrors({
                matchPassword: true
            })
        }

        return null;
    }
}