import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavacmdComponent } from './javacmd.component';

describe('JavacmdComponent', () => {
  let component: JavacmdComponent;
  let fixture: ComponentFixture<JavacmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavacmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavacmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
