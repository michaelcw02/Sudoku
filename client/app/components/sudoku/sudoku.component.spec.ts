import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuComponent } from './sudoku.component';

describe('SudokuComponent', () => {
  let component: SudokuComponent;
  let fixture: ComponentFixture<SudokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
