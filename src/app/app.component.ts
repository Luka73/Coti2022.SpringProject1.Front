import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email_user: string | null = '';
  isLoggedIn: boolean = false;

  constructor() {
    if(localStorage.getItem('access_token') != null 
    && localStorage.getItem('email_user')) {
      this.isLoggedIn = true;
      this.email_user = localStorage.getItem('email_user');
    }
  }

  logout(): void {
    if(confirm('Deseja realmente sair do sistema?')) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('email_user');

      window.location.href = '/';
    }
  }
}
