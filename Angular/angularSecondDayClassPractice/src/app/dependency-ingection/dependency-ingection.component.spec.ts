import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyIngectionComponent } from './dependency-ingection.component';

describe('DependencyIngectionComponent', () => {
  let component: DependencyIngectionComponent;
  let fixture: ComponentFixture<DependencyIngectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyIngectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependencyIngectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
