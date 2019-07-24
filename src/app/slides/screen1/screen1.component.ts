import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import * as XLSX from 'xlsx';
import { asap } from 'rxjs/internal/scheduler/asap';


@Component({
  selector: 'app-root',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css'], 
})

export class Screen1Component implements OnInit {
  BGImagPath:string='assets/Images/bg.jpg'; 
  bannerTextBGPath:string='assets/Images/terrace2.png'; 
  CurrentRouter: string; 
  XlData : Array<object>;
  XLDataHeaders: object;

  constructor(private router: Router) {     
    this.CurrentRouter = router.url;
    console.log(this.CurrentRouter);
  }

  ngOnInit() {    
    this.BindExcelData();
  }
  BindExcelData() {
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
 
         /* save data */
        this.XlData = <any>(XLSX.utils.sheet_to_json(ws, { header: 1 }));  
        if(this.XlData!=null){
          this.XLDataHeaders=this.XlData[0];
        }          
        this.XlData.splice(0,1);
    };     
    req.send();
   
  } 

}
