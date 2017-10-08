import { TestBed, inject } from '@angular/core/testing';

import { SudokuService } from './sudoku.service';

describe('SudokuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SudokuService]
    });
  });

  it('should be created', inject([SudokuService], (service: SudokuService) => {
    expect(service).toBeTruthy();
  }));
});
