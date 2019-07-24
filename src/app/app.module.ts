import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatTableDataSource,MatPaginatorModule,MatSortModule} from '@angular/material';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelSheetUploadComponent } from './slides/excel-sheet-upload/excel-sheet-upload.component';
import { Screen1Component } from './slides/screen1/screen1.component';
import { Screen2Component } from './slides/screen2/screen2.component';
import { Screen3Component } from './slides/screen3/screen3.component';
import { screenNotfoundComponent } from './slides/screenNotFound.component';
import { ExcelSheetParserServiceService } from './service/excel-sheet-parser-service.service';



@NgModule({
  declarations: [ AppComponent,
                  ExcelSheetUploadComponent,
                  Screen1Component,
                  Screen2Component,
                  Screen3Component ,
                  screenNotfoundComponent,                                 
                ],

  imports: [ BrowserModule,
             AppRoutingModule,
             routing ,  
                         
            ],
    exports:[ ], 
  providers: [ExcelSheetParserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
