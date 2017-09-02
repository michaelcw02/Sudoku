import { TestBed, inject } from '@angular/core/testing';

import { LoadSudokuJsonService } from './load-sudoku-json.service';

describe('LoadSudokuJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadSudokuJsonService]
    });
  });

  it('should be created', inject([LoadSudokuJsonService], (service: LoadSudokuJsonService) => {
    expect(service).toBeTruthy();
  }));
});
