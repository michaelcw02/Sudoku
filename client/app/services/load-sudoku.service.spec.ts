import { TestBed, inject } from '@angular/core/testing';

import { LoadSudokuService } from './load-sudoku.service';

describe('LoadSudokuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadSudokuService]
    });
  });

  it('should be created', inject([LoadSudokuService], (service: LoadSudokuService) => {
    expect(service).toBeTruthy();
  }));
});
