import { Component } from '@angular/core';
import { DropDownTextService } from '../../services/dropdown-text/drop-down-text.service';
import { Router } from '@angular/router';
import { DropdownChangeEvent } from 'primeng/dropdown';

interface Text{
  name: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  dropdownOptions: Text[]=[];
  dropdownValue: string;
  value: string;
  selectedItem: Text;
  
  constructor(public dropService: DropDownTextService, private router: Router) {}
  
  ngOnInit() {
    // Subscribe to changes in the dropdown options
    this.dropService.dropdownOptionsChanged.subscribe((newOptions) => {
      this.dropdownOptions = newOptions;
    });

  }

  onChangeDrop(event: DropdownChangeEvent){
    switch (event.value.name){
      case 'Ciudad':{
        this.router.navigate(['/suppliers'])
        break;
      }
      case 'Id proveedor':{
        this.router.navigate(['/suppliersid'])
        break;
      }
    }
  }
}
