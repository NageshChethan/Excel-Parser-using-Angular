import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import * as XLSX from 'xlsx';
import { asap } from 'rxjs/internal/scheduler/asap';

@Injectable({
  providedIn: 'root'
})
export class ExcelSheetParserServiceService {
  title = 'Content Validation Process';
  BGImagPath :string='assets/bg.jpg';  
  fil_name: number;
  XLColumnsData:Array<String>;
  XLRowsData:Array<String>;
  CurrentRouter: string; 
  private XlData : Array<object>;

  constructor(private router: Router) { 
    this.CurrentRouter = router.url;
    console.log(this.CurrentRouter);
  }

  upload_btn_click(value) {
    // You can change the file path in the assets folder
    let url = "assets/Book1.xlsx";
    //let url = value;

    let req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    

    req.onload =  (e) => {
        let data = new Uint8Array(req.response);
         let workbook = XLSX.read(data, {type: "array"}); 

         /* grab first sheet */
         const wsname: string = workbook.SheetNames[0];
         const ws: XLSX.WorkSheet = workbook.Sheets[wsname];
         alert("1");
 
         /* save data */
        this.XlData = <any>(XLSX.utils.sheet_to_json(ws, { header: 1 }));  
        if(this.XlData!=null)        
          return this.XlData;      
    };   
    
    return this.XlData; 
  }
}
