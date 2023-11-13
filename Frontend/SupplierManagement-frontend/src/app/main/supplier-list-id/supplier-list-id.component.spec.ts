import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierListIdComponent } from './supplier-list-id.component';

describe('SupplierListIdComponent', () => {
  let component: SupplierListIdComponent;
  let fixture: ComponentFixture<SupplierListIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierListIdComponent]
    });
    fixture = TestBed.createComponent(SupplierListIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
