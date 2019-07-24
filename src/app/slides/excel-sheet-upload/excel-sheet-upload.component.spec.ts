import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelSheetUploadComponent } from './excel-sheet-upload.component';

describe('ExcelSheetUploadComponent', () => {
  let component: ExcelSheetUploadComponent;
  let fixture: ComponentFixture<ExcelSheetUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelSheetUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelSheetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
