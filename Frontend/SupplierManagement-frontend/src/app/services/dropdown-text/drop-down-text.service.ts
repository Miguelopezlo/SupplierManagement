import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropDownTextService {
  dropdownOptionsChanged = new Subject<{name: string}[]>();

  changeDropdownOptions(newOptions: {name: string}[]) {
    this.dropdownOptionsChanged.next(newOptions);
  }
}
