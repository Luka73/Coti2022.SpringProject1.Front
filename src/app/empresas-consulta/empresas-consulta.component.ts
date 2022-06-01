import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-empresas-consulta',
  templateUrl: './empresas-consulta.component.html',
  styleUrls: ['./empresas-consulta.component.css']
})
export class EmpresasConsultaComponent implements OnInit {

  empresas: any[] = [];
  mensagem_sucesso : string = '';
  pagina: number = 1;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get(environment.apiEmpresas)
      .subscribe({
        next: (result) => {
          //console.log(result);
          this.empresas = result as any[];
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

  onDelete(idEmpresa: number): void {
    if(window.confirm('Deseja realmente excluir a empresa selecionada?')) {
      //console.log(idEmpresa);
      this.httpClient.delete(environment.apiEmpresas + "/" + idEmpresa, {responseType : 'text'}) 
      .subscribe({
        next: (result) => {
          this.mensagem_sucesso = result;
          this.ngOnInit();
        },
        error: (e) => {
          console.log(e);
        }
      });
      
    }
  }

    //função para fazer a paginação
    handlePageChange(event: any): void {
      this.pagina = event;
    }
  
}
