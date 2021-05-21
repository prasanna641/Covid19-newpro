import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../shared/corona.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jsonfile1=[];
  confirmed:number;
  recovered:number;
  death:number;
  vaccine:number;
  fun2()
  {
    this.fun();
    this.jsonfile1=[];
    this.fun();
    console.log(this.jsonfile1)
  }

  fun()
  {
  let date: Date = new Date();
  let date1=date.getTime();
  
  console.log(date1);
  for(let index=0;index<this.jsonfile1.length;index++)
{
  let date3 : Date=new Date(this.jsonfile1[index].Date_YMD);
  console.log(date3.getTime())
 
  if(date3.getTime()==date1)
  {
    this.confirmed=this.jsonfile1[index].Confirmed;
    this.recovered=this.jsonfile1[index].Recovered;
    this.death=this.jsonfile1[index].Deceased;
    this.vaccine=this.jsonfile1[index].Vaccine_Doses_administered;

  }
}
  }
  constructor(private cs:CoronaService) {
  }
    ngOnInit():void {
      this.cs.getstate()
      .subscribe(data=>this.jsonfile1=data);
      this.fun();
      this.fun2();
      
  }
}
 