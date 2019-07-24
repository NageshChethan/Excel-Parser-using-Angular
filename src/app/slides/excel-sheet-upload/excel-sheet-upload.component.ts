import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './excel-sheet-upload.component.html',
  styleUrls: ['./excel-sheet-upload.component.css'],  
})
export class ExcelSheetUploadComponent{
  title = 'Content Validation Process';
  BGImagPath :string='assets/bg.jpg'; 
  CurrentRouter: string; 

  
  constructor(private router: Router) { 
    this.CurrentRouter = router.url;
    console.log(this.CurrentRouter);
  }

  upload_btn_click(value) {           
         this.router.navigate(['/screen1']);   
  }

}


