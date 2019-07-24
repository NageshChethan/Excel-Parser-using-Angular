import { ModuleWithProviders } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { ExcelSheetUploadComponent } from './slides/excel-sheet-upload/excel-sheet-upload.component';
import { Screen1Component } from './slides/screen1/screen1.component';
import { Screen2Component } from './slides/screen2/screen2.component';
import { Screen3Component } from './slides/screen3/screen3.component';
import { screenNotfoundComponent } from './slides/screenNotFound.component';

const appRoutes: Routes = [
      { path: 'excelupload',
      component: ExcelSheetUploadComponent
      },

    { path: 'screen1',
     component: Screen1Component
     },

    { path: 'screen2',
     component: Screen2Component
     },

    { path: '',
     redirectTo: '/excelupload', 
     pathMatch: 'full' 
    },

    { path: '**',
     component: ExcelSheetUploadComponent 
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);