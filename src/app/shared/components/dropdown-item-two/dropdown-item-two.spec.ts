import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownItemTwo } from './dropdown-item-two';

describe('DropdownItemTwo', () => {
  let component: DropdownItemTwo;
  let fixture: ComponentFixture<DropdownItemTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownItemTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownItemTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
