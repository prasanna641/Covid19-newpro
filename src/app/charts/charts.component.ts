
import { Component, ElementRef, OnInit, SimpleChanges, ViewChild, ɵɵpureFunction1, ɵɵpureFunction2 } from '@angular/core';  
import { GoogleChartComponent } from 'angular-google-charts'; 
import {jsonfile} from "./charts";
import { HttpClient } from '@angular/common/http';
import { CoronaService } from '../shared/corona.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  jsonfile:any;
  jsonfile1=[];
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
  selectedDay: string = "Total_India";
  start:string="2020-03-15";
  end:string="2020-03-21";
  date:Date;
  date1:Date;
  get startdate():string{
    return this.start; 
  }
  set enddate(value:string)
  {
    this.end=value;
  }
  get enddate():string{
    return this.end; 
  }
  set startdate(value:string)
  {
    this.start=value;
  }
  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value; 
    this.file=[];
    this.fun();
  }
  fundate()
  {
    this.file=[];
    this.fun();
  }
  fun()
 {
  let date: Date = new Date(this.start);  
  let date1: Date =new Date(this.end);   
  for(let index=0;index<this.jsonfile1.length;index++)
{
  let date3 : Date=new Date(this.jsonfile1[index].Date_YMD);
  if(this.jsonfile1[index].States==this.selectedDay &&(date.getTime()<date3.getTime()) &&(date3.getTime()<date1.getTime()))
  {
  
  this.a=this.jsonfile1[index].Date_YMD;
  this.b=+this.jsonfile1[index].Confirmed;
  this.c=+this.jsonfile1[index].Recovered;
  this.d=+this.jsonfile1[index].ICMR_RTPCR;
  this.file.push([this.a,this.b]);
  this.fun2(); 
  this.file1.push([this.a,this.c])
  this.fun3();
  this.file2.push([this.a,this.d])
  this.fun4()
}
 }
  }
  fun2()
  {
    this.title = 'googlechart';  
    this.type = 'LineChart';  
    this.data = this.file; 
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
 
      this.options2 = {   
        colors: ['black'], 
        is3D: true,
        curveType: 'function',
        };   
      this.width = 900;  
      this.height = 500; 
      }
  
  constructor(private cs:CoronaService , http:HttpClient) {
}
  ngOnInit():void {
    this.cs.getState()
    .subscribe(data=>this.jsonfile1=data);
    console.log(this.jsonfile1);
    
}



}







    


  
  


   

  





