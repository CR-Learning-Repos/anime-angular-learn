import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeSelectorComponent } from './anime-selector.component';

describe('AnimeSelectorComponent', () => {
  let component: AnimeSelectorComponent;
  let fixture: ComponentFixture<AnimeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
