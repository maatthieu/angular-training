import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBasic } from './component-basic';

describe('ComponentBasic', () => {
  let component: ComponentBasic;
  let fixture: ComponentFixture<ComponentBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
