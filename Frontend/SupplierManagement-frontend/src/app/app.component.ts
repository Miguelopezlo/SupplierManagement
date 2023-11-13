import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sistema de gestión de proveedores';
  contents: any = null;

  constructor(private router: Router){}
  navegarASecundaria() {
    this.router.navigate(['/home']);
  }
}
