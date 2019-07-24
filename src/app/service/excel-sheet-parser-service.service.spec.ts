import { TestBed } from '@angular/core/testing';

import { ExcelSheetParserServiceService } from './excel-sheet-parser-service.service';

describe('ExcelSheetParserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcelSheetParserServiceService = TestBed.get(ExcelSheetParserServiceService);
    expect(service).toBeTruthy();
  });
});
