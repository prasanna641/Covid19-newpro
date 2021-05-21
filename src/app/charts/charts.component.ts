
import { Component, OnInit} from '@angular/core';  
import { CoronaService } from '../shared/corona.service';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClient } from '@angular/common/http';
import{jsonfile} from '../shared/corona';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
 jsonfile1=[];
  a:string;
  b:number;
  c:number;
  d:number;
  file=[];
  file1=[];
  file2=[]
  title:string;
  type:string;
  data =[];
  columnNames: any;
  options:any;
  width:number;
  height:number;
  title1:string;
  type1:string;
  data1=[];
  options1:any;
  title2:string;
  type2:string;
  data2=[];
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
 
  
  fun()

 {
  
  let date: Date = new Date(this.start);  
  let date1: Date =new Date(this.end);   
  for(let index=0;index<this.jsonfile1.length;index++)
{
  let date3 : Date=new Date(this.jsonfile1[index].Date_YMD);
  if(this.jsonfile1[index].State==this.selectedDay)
  {
   // &&(date.getTime()<date3.getTime()) &&(date3.getTime()<date1.getTime())
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
    this.data = [["hi",2],["hello",3]];
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
    console.log(this.data1)
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
      result=[];
  
  constructor(private cs:CoronaService,public http:HttpClient) {
}
getData()
{
  return this.http.get<jsonfile[]>('https://us-central1-tgs-internal-saige-dev-001.cloudfunctions.net/di_init_covid19_stats_access').subscribe
  ((res)=>{
    this.jsonfile1=res
    console.log(this.jsonfile1);
  })
    this.fun();
  }


  ngOnInit():void {
    
    this.getData();

}



}







    


  
  


   

  





