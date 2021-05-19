import { Injectable } from "@angular/core";
import { jsonfile } from "./charts"
@Injectable({
    providedIn:'root'
})
export class chartsservice
{
    private Items:jsonfile[]=
    [
      {
        "Date_YMD": "2020-03-14",
        "States": "Goa",
        "Confirmed": 0,
        "Recovered": 0,
        "Deceased": 0,
        "ICMR_RTPCR": 0.0,
        "Vaccine_Doses_administered": 0
      },
      {
        "Date_YMD": "2020-03-15",
        "States": "Goa",
        "Confirmed": 0,
        "Recovered": 0,
        "Deceased": 0,
        "ICMR_RTPCR": 0.0,
        "Vaccine_Doses_administered": 0
      },
      {
        "Date_YMD": "2020-03-16",
        "States": "Goa",
        "Confirmed": 0,
        "Recovered": 0,
        "Deceased": 0,
        "ICMR_RTPCR": 0.0,
        "Vaccine_Doses_administered": 0
      },
      {
        "Date_YMD": "2020-03-17",
        "States": "Goa",
        "Confirmed": 0,
        "Recovered": 0,
        "Deceased": 0,
        "ICMR_RTPCR": 0.0,
        "Vaccine_Doses_administered": 0
      },
      {
        "Date_YMD": "2020-03-18",
        "States": "Goa",
        "Confirmed": 0,
        "Recovered": 0,
        "Deceased": 0,
        "ICMR_RTPCR": 0.0,
        "Vaccine_Doses_administered": 0
      },
      {
        "Date_YMD": "2020-03-19",
        "States": "Goa",
        "Confirmed": 0,
        "Recovered": 0,
        "Deceased": 0,
        "ICMR_RTPCR": 0.0,
        "Vaccine_Doses_administered": 0
      },
      
      {
        "Date_YMD": "2020-05-17",
        "States": "Goa",
        "Confirmed": 9,
        "Recovered": 0,
        "Deceased": 0,
        "ICMR_RTPCR": 8785.0,
        "Vaccine_Doses_administered": 0
      },
      {
        "Date_YMD": "2021-03-07",
        "States": "Goa",
        "Confirmed": "48",
        "Recovered": "60",
        "Deceased": "0",
        "ICMR_RTPCR": "503674.0",
        "Vaccine_Doses_administered": "43058"
      },
      {
        "Date_YMD": "2021-03-08",
        "States": "Goa",
        "Confirmed": "54",
        "Recovered": "110",
        "Deceased": "0",
        "ICMR_RTPCR": "504938.0",
        "Vaccine_Doses_administered": "46801"
      },
      {
        "Date_YMD": "2021-03-10",
        "States": "Goa",
        "Confirmed": "69",
        "Recovered": "57",
        "Deceased": "0",
        "ICMR_RTPCR": "507998.0",
        "Vaccine_Doses_administered": "54615"
      },
      {
        "Date_YMD": "2021-03-20",
        "States": "Goa",
        "Confirmed": "154",
        "Recovered": "56",
        "Deceased": "0",
        "ICMR_RTPCR": "524230.0",
        "Vaccine_Doses_administered": "89508"
      },
      {
        "Date_YMD": "2021-03-22",
        "States": "Goa",
        "Confirmed": "85",
        "Recovered": "81",
        "Deceased": "0",
        "ICMR_RTPCR": "527106.0",
        "Vaccine_Doses_administered": "92961"
      },
      {
        "Date_YMD": "2021-03-24",
        "States": "Goa",
        "Confirmed": "140",
        "Recovered": "73",
        "Deceased": "0",
        "ICMR_RTPCR": "530780.0",
        "Vaccine_Doses_administered": "99012"
      },
      {
        "Date_YMD": "2020-03-14",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-15",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-16",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-17",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-18",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-19",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-20",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-21",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-22",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-23",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-24",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-25",
        "States": "Goa",
        "Confirmed": "3",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-26",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-27",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-28",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-29",
        "States": "Goa",
        "Confirmed": "2",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-30",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-03-31",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-01",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-02",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "220.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-03",
        "States": "Goa",
        "Confirmed": "1",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-04",
        "States": "Goa",
        "Confirmed": "1",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-05",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-06",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-07",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-08",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-09",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "344.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-10",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "1",
        "Deceased": "0",
        "ICMR_RTPCR": "354.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-11",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "4",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-12",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "406.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-13",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "440.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-14",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "479.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-15",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "1",
        "Deceased": "0",
        "ICMR_RTPCR": "556.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-16",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "611.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-17",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "673.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-18",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "758.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-19",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "1",
        "Deceased": "0",
        "ICMR_RTPCR": "826.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-20",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "901.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-21",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "1004.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-22",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "1116.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-23",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "1206.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-24",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": null,
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-25",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-26",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-27",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "1541.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-28",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "1776.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-29",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "1871.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-04-30",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "2031.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-01",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "2181.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-02",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "2372.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-03",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "2548.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-04",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "2899.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-05",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "3096.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-06",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "3411.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-07",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-08",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "4140.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-09",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "4524.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-10",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "4848.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-11",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "5307.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-12",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-13",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "0.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-14",
        "States": "Goa",
        "Confirmed": "8",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "6736.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-15",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "7304.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-16",
        "States": "Goa",
        "Confirmed": "5",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "8011.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-17",
        "States": "Goa",
        "Confirmed": "9",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "8785.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-18",
        "States": "Goa",
        "Confirmed": "9",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "8785.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-19",
        "States": "Goa",
        "Confirmed": "8",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "9549.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-20",
        "States": "Goa",
        "Confirmed": "4",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "10136.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-21",
        "States": "Goa",
        "Confirmed": "2",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "10859.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-22",
        "States": "Goa",
        "Confirmed": "2",
        "Recovered": "9",
        "Deceased": "0",
        "ICMR_RTPCR": "11362.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-23",
        "States": "Goa",
        "Confirmed": "1",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "11945.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-24",
        "States": "Goa",
        "Confirmed": "11",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "12499.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-25",
        "States": "Goa",
        "Confirmed": "1",
        "Recovered": "3",
        "Deceased": "0",
        "ICMR_RTPCR": "12860.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-26",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "9",
        "Deceased": "0",
        "ICMR_RTPCR": "13303.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-27",
        "States": "Goa",
        "Confirmed": "1",
        "Recovered": "9",
        "Deceased": "0",
        "ICMR_RTPCR": "13911.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-28",
        "States": "Goa",
        "Confirmed": "1",
        "Recovered": "1",
        "Deceased": "0",
        "ICMR_RTPCR": "14782.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-29",
        "States": "Goa",
        "Confirmed": "0",
        "Recovered": "3",
        "Deceased": "0",
        "ICMR_RTPCR": "16141.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-30",
        "States": "Goa",
        "Confirmed": "1",
        "Recovered": "1",
        "Deceased": "0",
        "ICMR_RTPCR": "17871.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-05-31",
        "States": "Goa",
        "Confirmed": "1",
        "Recovered": "2",
        "Deceased": "0",
        "ICMR_RTPCR": "19491.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-01",
        "States": "Goa",
        "Confirmed": "2",
        "Recovered": "6",
        "Deceased": "0",
        "ICMR_RTPCR": "20780.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-02",
        "States": "Goa",
        "Confirmed": "6",
        "Recovered": "7",
        "Deceased": "0",
        "ICMR_RTPCR": "22378.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-03",
        "States": "Goa",
        "Confirmed": "47",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "23816.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-04",
        "States": "Goa",
        "Confirmed": "40",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "25300.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-05",
        "States": "Goa",
        "Confirmed": "30",
        "Recovered": "8",
        "Deceased": "0",
        "ICMR_RTPCR": "26208.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-06",
        "States": "Goa",
        "Confirmed": "71",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "27402.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-07",
        "States": "Goa",
        "Confirmed": "33",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "29739.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-08",
        "States": "Goa",
        "Confirmed": "30",
        "Recovered": "2",
        "Deceased": "0",
        "ICMR_RTPCR": "31455.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-09",
        "States": "Goa",
        "Confirmed": "29",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "32194.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-10",
        "States": "Goa",
        "Confirmed": "28",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "35332.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-11",
        "States": "Goa",
        "Confirmed": "30",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "37858.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-12",
        "States": "Goa",
        "Confirmed": "46",
        "Recovered": "2",
        "Deceased": "0",
        "ICMR_RTPCR": "39298.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-13",
        "States": "Goa",
        "Confirmed": "60",
        "Recovered": "1",
        "Deceased": "0",
        "ICMR_RTPCR": "40723.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-14",
        "States": "Goa",
        "Confirmed": "41",
        "Recovered": "4",
        "Deceased": "0",
        "ICMR_RTPCR": "41835.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-15",
        "States": "Goa",
        "Confirmed": "28",
        "Recovered": "11",
        "Deceased": "0",
        "ICMR_RTPCR": "42703.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-16",
        "States": "Goa",
        "Confirmed": "37",
        "Recovered": "0",
        "Deceased": "0",
        "ICMR_RTPCR": "44378.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-17",
        "States": "Goa",
        "Confirmed": "27",
        "Recovered": "11",
        "Deceased": "0",
        "ICMR_RTPCR": "45685.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-18",
        "States": "Goa",
        "Confirmed": "49",
        "Recovered": "13",
        "Deceased": "0",
        "ICMR_RTPCR": "46996.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-19",
        "States": "Goa",
        "Confirmed": "20",
        "Recovered": "9",
        "Deceased": "0",
        "ICMR_RTPCR": "49718.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-20",
        "States": "Goa",
        "Confirmed": "29",
        "Recovered": "11",
        "Deceased": "0",
        "ICMR_RTPCR": "51404.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-21",
        "States": "Goa",
        "Confirmed": "64",
        "Recovered": "6",
        "Deceased": "0",
        "ICMR_RTPCR": "52301.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-24",
        "States": "Goa",
        "Confirmed": "42",
        "Recovered": "84",
        "Deceased": "0",
        "ICMR_RTPCR": "56925.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-25",
        "States": "Goa",
        "Confirmed": "44",
        "Recovered": "46",
        "Deceased": "0",
        "ICMR_RTPCR": "58584.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-26",
        "States": "Goa",
        "Confirmed": "44",
        "Recovered": "35",
        "Deceased": "0",
        "ICMR_RTPCR": "60350.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-27",
        "States": "Goa",
        "Confirmed": "89",
        "Recovered": "50",
        "Deceased": "0",
        "ICMR_RTPCR": "61687.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-29",
        "States": "Goa",
        "Confirmed": "53",
        "Recovered": "46",
        "Deceased": "0",
        "ICMR_RTPCR": "64375.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-06-30",
        "States": "Goa",
        "Confirmed": "64",
        "Recovered": "72",
        "Deceased": "0",
        "ICMR_RTPCR": "66491.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-07-02",
        "States": "Goa",
        "Confirmed": "95",
        "Recovered": "64",
        "Deceased": "0",
        "ICMR_RTPCR": "70738.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-07-03",
        "States": "Goa",
        "Confirmed": "94",
        "Recovered": "38",
        "Deceased": "0",
        "ICMR_RTPCR": "72691.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-07-06",
        "States": "Goa",
        "Confirmed": "52",
        "Recovered": "125",
        "Deceased": "0",
        "ICMR_RTPCR": "77033.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-07-08",
        "States": "Goa",
        "Confirmed": "136",
        "Recovered": "51",
        "Deceased": "0",
        "ICMR_RTPCR": "82555.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-07-10",
        "States": "Goa",
        "Confirmed": "100",
        "Recovered": "74",
        "Deceased": "0",
        "ICMR_RTPCR": "87865.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-07-15",
        "States": "Goa",
        "Confirmed": "198",
        "Recovered": "67",
        "Deceased": "0",
        "ICMR_RTPCR": "99234.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-07-18",
        "States": "Goa",
        "Confirmed": "180",
        "Recovered": "92",
        "Deceased": "0",
        "ICMR_RTPCR": "105731.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-07-24",
        "States": "Goa",
        "Confirmed": "190",
        "Recovered": "210",
        "Deceased": "0",
        "ICMR_RTPCR": "119455.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-07-28",
        "States": "Goa",
        "Confirmed": "168",
        "Recovered": "185",
        "Deceased": "0",
        "ICMR_RTPCR": "126655.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-11-12",
        "States": "Goa",
        "Confirmed": "107",
        "Recovered": "192",
        "Deceased": "0",
        "ICMR_RTPCR": "318541.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-11-19",
        "States": "Goa",
        "Confirmed": "136",
        "Recovered": "157",
        "Deceased": "0",
        "ICMR_RTPCR": "327986.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-11-23",
        "States": "Goa",
        "Confirmed": "75",
        "Recovered": "104",
        "Deceased": "0",
        "ICMR_RTPCR": "334198.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-11-28",
        "States": "Goa",
        "Confirmed": "198",
        "Recovered": "163",
        "Deceased": "0",
        "ICMR_RTPCR": "345201.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-12-04",
        "States": "Goa",
        "Confirmed": "94",
        "Recovered": "124",
        "Deceased": "0",
        "ICMR_RTPCR": "356109.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-12-08",
        "States": "Goa",
        "Confirmed": "159",
        "Recovered": "146",
        "Deceased": "0",
        "ICMR_RTPCR": "363062.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-12-10",
        "States": "Goa",
        "Confirmed": "95",
        "Recovered": "159",
        "Deceased": "0",
        "ICMR_RTPCR": "366174.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-12-11",
        "States": "Goa",
        "Confirmed": "104",
        "Recovered": "130",
        "Deceased": "0",
        "ICMR_RTPCR": "367818.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-12-19",
        "States": "Goa",
        "Confirmed": "127",
        "Recovered": "110",
        "Deceased": "0",
        "ICMR_RTPCR": "380426.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-12-25",
        "States": "Goa",
        "Confirmed": "80",
        "Recovered": "101",
        "Deceased": "0",
        "ICMR_RTPCR": "389879.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2020-12-27",
        "States": "Goa",
        "Confirmed": "72",
        "Recovered": "79",
        "Deceased": "0",
        "ICMR_RTPCR": "392413.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2021-01-01",
        "States": "Goa",
        "Confirmed": "69",
        "Recovered": "78",
        "Deceased": "0",
        "ICMR_RTPCR": "400669.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2021-01-02",
        "States": "Goa",
        "Confirmed": "95",
        "Recovered": "104",
        "Deceased": "0",
        "ICMR_RTPCR": "402289.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2021-01-06",
        "States": "Goa",
        "Confirmed": "92",
        "Recovered": "82",
        "Deceased": "0",
        "ICMR_RTPCR": "408710.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2021-01-07",
        "States": "Goa",
        "Confirmed": "119",
        "Recovered": "90",
        "Deceased": "0",
        "ICMR_RTPCR": "410575.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2021-01-08",
        "States": "Goa",
        "Confirmed": "83",
        "Recovered": "105",
        "Deceased": "0",
        "ICMR_RTPCR": "412662.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2021-01-12",
        "States": "Goa",
        "Confirmed": "92",
        "Recovered": "94",
        "Deceased": "0",
        "ICMR_RTPCR": "419548.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2021-01-17",
        "States": "Goa",
        "Confirmed": "60",
        "Recovered": "59",
        "Deceased": "0",
        "ICMR_RTPCR": "427935.0",
        "Vaccine_Doses_administered": "0"
      },
      {
        "Date_YMD": "2021-01-18",
        "States": "Goa",
        "Confirmed": "53",
        "Recovered": "66",
        "Deceased": "0",
        "ICMR_RTPCR": "429020.0",
        "Vaccine_Doses_administered": "426"
      },
      {
        "Date_YMD": "2021-01-19",
        "States": "Goa",
        "Confirmed": "112",
        "Recovered": "115",
        "Deceased": "0",
        "ICMR_RTPCR": "431275.0",
        "Vaccine_Doses_administered": "426"
      },
      {
        "Date_YMD": "2021-01-20",
        "States": "Goa",
        "Confirmed": "87",
        "Recovered": "84",
        "Deceased": "0",
        "ICMR_RTPCR": "433077.0",
        "Vaccine_Doses_administered": "426"
      },
      {
        "Date_YMD": "2021-01-24",
        "States": "Goa",
        "Confirmed": "53",
        "Recovered": "102",
        "Deceased": "0",
        "ICMR_RTPCR": "439616.0",
        "Vaccine_Doses_administered": "1561"
      },
      {
        "Date_YMD": "2021-01-27",
        "States": "Goa",
        "Confirmed": "53",
        "Recovered": "90",
        "Deceased": "0",
        "ICMR_RTPCR": "443903.0",
        "Vaccine_Doses_administered": "2311"
      },
      {
        "Date_YMD": "2021-01-30",
        "States": "Goa",
        "Confirmed": "93",
        "Recovered": "76",
        "Deceased": "0",
        "ICMR_RTPCR": "449280.0",
        "Vaccine_Doses_administered": "4117"
      },
      {
        "Date_YMD": "2021-02-01",
        "States": "Goa",
        "Confirmed": "60",
        "Recovered": "86",
        "Deceased": "0",
        "ICMR_RTPCR": "452039.0",
        "Vaccine_Doses_administered": "4509"
      },
      {
        "Date_YMD": "2021-02-02",
        "States": "Goa",
        "Confirmed": "106",
        "Recovered": "62",
        "Deceased": "0",
        "ICMR_RTPCR": "454356.0",
        "Vaccine_Doses_administered": "5422"
      },
      {
        "Date_YMD": "2021-02-03",
        "States": "Goa",
        "Confirmed": "63",
        "Recovered": "70",
        "Deceased": "0",
        "ICMR_RTPCR": "456130.0",
        "Vaccine_Doses_administered": "6326"
      },
      {
        "Date_YMD": "2021-02-05",
        "States": "Goa",
        "Confirmed": "56",
        "Recovered": "78",
        "Deceased": "0",
        "ICMR_RTPCR": "459485.0",
        "Vaccine_Doses_administered": "7939"
      },
      {
        "Date_YMD": "2021-02-06",
        "States": "Goa",
        "Confirmed": "65",
        "Recovered": "56",
        "Deceased": "0",
        "ICMR_RTPCR": "460994.0",
        "Vaccine_Doses_administered": "8257"
      },
      {
        "Date_YMD": "2021-02-08",
        "States": "Goa",
        "Confirmed": "57",
        "Recovered": "85",
        "Deceased": "0",
        "ICMR_RTPCR": "463300.0",
        "Vaccine_Doses_administered": "8352"
      },
      {
        "Date_YMD": "2021-02-11",
        "States": "Goa",
        "Confirmed": "45",
        "Recovered": "59",
        "Deceased": "0",
        "ICMR_RTPCR": "468179.0",
        "Vaccine_Doses_administered": "11391"
      },
      {
        "Date_YMD": "2021-02-18",
        "States": "Goa",
        "Confirmed": "52",
        "Recovered": "51",
        "Deceased": "0",
        "ICMR_RTPCR": "478148.0",
        "Vaccine_Doses_administered": "14218"
      },
      {
        "Date_YMD": "2021-02-20",
        "States": "Goa",
        "Confirmed": "57",
        "Recovered": "62",
        "Deceased": "0",
        "ICMR_RTPCR": "481571.0",
        "Vaccine_Doses_administered": "16183"
      },
      {
        "Date_YMD": "2021-02-21",
        "States": "Goa",
        "Confirmed": "39",
        "Recovered": "44",
        "Deceased": "0",
        "ICMR_RTPCR": "482622.0",
        "Vaccine_Doses_administered": "16183"
      },
      {
        "Date_YMD": "2021-02-22",
        "States": "Goa",
        "Confirmed": "29",
        "Recovered": "53",
        "Deceased": "0",
        "ICMR_RTPCR": "483675.0",
        "Vaccine_Doses_administered": "16811"
      },
      {
        "Date_YMD": "2021-02-27",
        "States": "Goa",
        "Confirmed": "61",
        "Recovered": "50",
        "Deceased": "0",
        "ICMR_RTPCR": "492143.0",
        "Vaccine_Doses_administered": "20794"
      },
      {
        "Date_YMD": "2021-03-02",
        "States": "Goa",
        "Confirmed": "47",
        "Recovered": "48",
        "Deceased": "0",
        "ICMR_RTPCR": "496089.0",
        "Vaccine_Doses_administered": "26408"
      },
      {
        "Date_YMD": "2021-03-03",
        "States": "Goa",
        "Confirmed": "70",
        "Recovered": "42",
        "Deceased": "0",
        "ICMR_RTPCR": "497806.0",
        "Vaccine_Doses_administered": "30501"
      },
      {
        "Date_YMD": "2021-03-06",
        "States": "Goa",
        "Confirmed": "70",
        "Recovered": "45",
        "Deceased": "0",
        "ICMR_RTPCR": "502509.0",
        "Vaccine_Doses_administered": "43051"
      },
      {
        "Date_YMD": "2021-03-07",
        "States": "Goa",
        "Confirmed": "48",
        "Recovered": "60",
        "Deceased": "0",
        "ICMR_RTPCR": "503674.0",
        "Vaccine_Doses_administered": "43058"
      },
      {
        "Date_YMD": "2021-03-08",
        "States": "Goa",
        "Confirmed": "54",
        "Recovered": "110",
        "Deceased": "0",
        "ICMR_RTPCR": "504938.0",
        "Vaccine_Doses_administered": "46801"
      }
      
    ]
     
    getItems(): jsonfile[]{
        return this.Items;

      }
}