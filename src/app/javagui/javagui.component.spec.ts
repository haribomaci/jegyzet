import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaguiComponent } from './javagui.component';

describe('JavaguiComponent', () => {
  let component: JavaguiComponent;
  let fixture: ComponentFixture<JavaguiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaguiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaguiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
