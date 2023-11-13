import { Component} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  constructor(){}

  modelo: MenuItem[];

  ngOnInit(){
    this.modelo=[
      {
        label: "Opciones",
        items: [
          {label: "Buscar proveedor", routerLink: 'home/suppliers'},
          {label: "Buscar contrato", routerLink: 'home/contracts'},
          {label: "Buscar producto", routerLink: 'home/products'},
          {label: "Crear proveedor", routerLink: 'home/createsupplier'},
          {label: "Crear contrato", routerLink: 'home/createcontract'},
          {label: "Crear producto", routerLink: 'home/createproduct'}
        ]
      }
    ];
  }
}
