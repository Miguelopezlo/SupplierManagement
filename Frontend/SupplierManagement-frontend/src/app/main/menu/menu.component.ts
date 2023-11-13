import { Component} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DropDownTextService } from '../../services/dropdown-text/drop-down-text.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  constructor(private dropService: DropDownTextService){}

  modelo: MenuItem[];

  dropText: {name: string}[]= [];

  ngOnInit(){
    this.modelo=[
      {
        label: "Opciones",
        items: [
          {label: "Buscar proveedor", routerLink: 'home/suppliers', command: () => {this.dropDownText(1)}},
          {label: "Buscar contrato", routerLink: 'home/contracts', command: () => {this.dropDownText(2)}},
          {label: "Buscar producto", routerLink: 'home/products', command: () => {this.dropDownText(3)}},
          {label: "Crear proveedor", routerLink: 'home/createsupplier'},
          {label: "Crear contrato", routerLink: 'home/createcontract'},
          {label: "Crear producto", routerLink: 'home/createproduct'}
        ]
      }
    ];
  }

  dropDownText(i: number){
    switch (i){
      case 1:{
        this.dropText=[
          {name: 'Ciudad'},
          {name: 'Id proveedor'},
          {name: 'Mostrar todos'}
        ];
        break;
      }
      case 2:{
        this.dropText=[
          {name: 'Id contrato'},
        ];
        break;
      }
      case 3:{
        this.dropText=[
          {name: 'Id producto'},
          {name: 'Criterio de seleccion'},
          {name: 'Mostrar todos'}
        ];
        break;
      }
    }
    this.dropService.changeDropdownOptions(this.dropText);
  }
}
