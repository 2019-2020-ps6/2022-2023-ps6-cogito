import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceConfigurationComponent } from './interface-configuration.component';

describe('InterfaceConfigurationComponent', () => {
  let component: InterfaceConfigurationComponent;
  let fixture: ComponentFixture<InterfaceConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
