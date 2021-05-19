
import { Component, ElementRef, OnInit, ViewChild, ɵɵpureFunction1, ɵɵpureFunction2 } from '@angular/core';  
import { GoogleChartComponent } from 'angular-google-charts'; 
import {jsonfile} from "./charts";
import { chartsservice } from './charts.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  jsonfile1:jsonfile[]=[];
  a:any;
  b:any;
  c:any;
  d:any;
  file=[];
  file1=[];
  file2=[]
  title:string;
  type:string;
  data : any;
  columnNames: any;
  options:any;
  width:number;
  height:number;
  title1:string;
  type1:string;
  data1:any;
  options1:any;
  title2:string;
  type2:string;
  data2:any;
  options2:any;
 
  fun()
 {
  for(let index=0;index<this.jsonfile1.length;index++)
{
  console.log(this.jsonfile1)
  this.a=this.jsonfile1[index].Date_YMD;
  this.b=this.jsonfile1[index].Confirmed;
  this.c=this.jsonfile1[index].Recovered;
  this.d=this.jsonfile1[index].ICMR_RTPCR;
 
  this.file.push([this.a,this.b]);
  this.fun2(); 
  this.file1.push([this.a,this.c])
  this.fun3();
  this.file2.push([this.a,this.d])
  this.fun4()
}
  }
  fun2()
  {
    this.title = 'googlechart';  
    this.type = 'LineChart';  
    this.data = this.file; 
    console.log(this.data) 
    this.options = {   
      colors: ['red'], 
      is3D: true,
      curveType: 'function',
      };   
    this.width = 900;  
    this.height = 500;  
  }
  fun3()
  {
    this.title1 = 'googlechart';  
    this.type1 = 'LineChart';  
    this.data1 = this.file1; 
    console.log(this.data) 
    this.options1 = {   
      colors: ['green'], 
      is3D: true,
      curveType: 'function',
      };   
    this.width = 900;  
    this.height = 500; 
    }
    fun4()
    {
      this.title2 = 'googlechart';  
      this.type2 = 'LineChart';  
      this.data2 = this.file2; 
      console.log(this.data) 
      this.options2 = {   
        colors: ['black'], 
        is3D: true,
        curveType: 'function',
        };   
      this.width = 900;  
      this.height = 500; 
      }
  
  constructor(private jsonservice:chartsservice) {
}
  ngOnInit():void {
    this.jsonfile1=this.jsonservice.getItems();
    this.fun();  

    
   
   
}
}




    


  
  


   

  





