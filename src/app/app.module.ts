import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmpresasCadastroComponent } from './empresas-cadastro/empresas-cadastro.component';
import { EmpresasConsultaComponent } from './empresas-consulta/empresas-consulta.component';
import { EmpresasEdicaoComponent } from './empresas-edicao/empresas-edicao.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'empresas-consulta' },
  { path: 'empresas-cadastro', component: EmpresasCadastroComponent },
  { path: 'empresas-consulta', component: EmpresasConsultaComponent },
  { path: 'empresas-edicao', component: EmpresasEdicaoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmpresasCadastroComponent,
    EmpresasConsultaComponent,
    EmpresasEdicaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
