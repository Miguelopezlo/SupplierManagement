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
          {label: "Buscar proveedor", routerLink: 'suppliers', command: () => {this.dropDownText(1)}},
          {label: "Buscar contrato", routerLink: 'products', command: () => {this.dropDownText(2)}},
          {label: "Buscar producto", routerLink: 'contracts', command: () => {this.dropDownText(3)}}
        ]
      }
    ];
  }

  dropDownText(i: number){
    switch (i){
      case 1:{
        this.dropText=[
          {name: 'Ciudad'},
          {name: 'Id proveedor'}
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
          {name: 'Criterio de seleccion'}
        ];
        break;
      }
    }
    this.dropService.changeDropdownOptions(this.dropText);
  }
}
