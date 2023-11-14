import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  modelo: MenuItem[];
  dialogVisible: boolean = false;

  constructor(private router: Router){}

/**
 * The ngOnInit function initializes the "modelo" variable with an array containing an object with
 * properties for label and icon.
 */
  ngOnInit(){
    this.modelo=[
      {
        label: 'Admin',
        icon: 'pi pi-fw pi-user',
        // routerLink: [{ outlets: { loginOutlet: ['login'] } }]
      }
    ];
  }
}
