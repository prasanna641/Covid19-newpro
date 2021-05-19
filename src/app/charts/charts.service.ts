import { Injectable } from "@angular/core";
import { jsonfile } from "./charts"
@Injectable({
    providedIn:'root'
})
export class chartsservice
{
    private Items:jsonfile[]=[
      {
          "Date_YMD": "2021-02-18",
          "States": "Goa",
          "Confirmed": 52,
          "Recovered": 51,
          "Deceased": 0,
          "ICMR_RTPCR": 478148.0,
          "Vaccine_Doses_administered": 14218
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
          "Date_YMD": "2020-06-16",
          "States": "Assam",
          "Confirmed": 201,
          "Recovered": 206,
          "Deceased": 0,
          "ICMR_RTPCR": 227109.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-06-17",
          "States": "Assam",
          "Confirmed": "184",
          "Recovered": "231",
          "Deceased": "0",
          "ICMR_RTPCR": "235214.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-19",
          "States": "Assam",
          "Confirmed": "0",
          "Recovered": "218",
          "Deceased": "0",
          "ICMR_RTPCR": "258797.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-20",
          "States": "Assam",
          "Confirmed": "249",
          "Recovered": "136",
          "Deceased": "0",
          "ICMR_RTPCR": "273047.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-21",
          "States": "Assam",
          "Confirmed": "332",
          "Recovered": "202",
          "Deceased": "0",
          "ICMR_RTPCR": "288306.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-22",
          "States": "Assam",
          "Confirmed": "267",
          "Recovered": "161",
          "Deceased": "0",
          "ICMR_RTPCR": "301557.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-04-30",
          "States": "Bihar",
          "Confirmed": 22,
          "Recovered": 20,
          "Deceased": 0,
          "ICMR_RTPCR": 22672.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-05-03",
          "States": "Bihar",
          "Confirmed": "36",
          "Recovered": "7",
          "Deceased": "0",
          "ICMR_RTPCR": "26951.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-04",
          "States": "Bihar",
          "Confirmed": "11",
          "Recovered": "3",
          "Deceased": "0",
          "ICMR_RTPCR": "28345.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-05",
          "States": "Bihar",
          "Confirmed": "7",
          "Recovered": "31",
          "Deceased": "0",
          "ICMR_RTPCR": "28791.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-06",
          "States": "Bihar",
          "Confirmed": "7",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "29328.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-08",
          "States": "Bihar",
          "Confirmed": "29",
          "Recovered": "49",
          "Deceased": "0",
          "ICMR_RTPCR": "30320.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-04-28",
          "States": "Delhi",
          "Confirmed": 206,
          "Recovered": 201,
          "Deceased": 0,
          "ICMR_RTPCR": 43370.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-05-03",
          "States": "Delhi",
          "Confirmed": "427",
          "Recovered": "106",
          "Deceased": "0",
          "ICMR_RTPCR": "60246.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-04",
          "States": "Delhi",
          "Confirmed": "349",
          "Recovered": "69",
          "Deceased": "0",
          "ICMR_RTPCR": "64108.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-05",
          "States": "Delhi",
          "Confirmed": "206",
          "Recovered": "37",
          "Deceased": "0",
          "ICMR_RTPCR": "67852.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-09",
          "States": "Delhi",
          "Confirmed": "224",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "84226.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-11",
          "States": "Delhi",
          "Confirmed": "310",
          "Recovered": "60",
          "Deceased": "0",
          "ICMR_RTPCR": "97678.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-03-26",
          "States": "Kerala",
          "Confirmed": 19,
          "Recovered": 7,
          "Deceased": 0,
          "ICMR_RTPCR": 0.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-03-27",
          "States": "Kerala",
          "Confirmed": "39",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-03-29",
          "States": "Kerala",
          "Confirmed": "20",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-03-30",
          "States": "Kerala",
          "Confirmed": "32",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-04-01",
          "States": "Kerala",
          "Confirmed": "24",
          "Recovered": "2",
          "Deceased": "0",
          "ICMR_RTPCR": "7965.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-04-02",
          "States": "Kerala",
          "Confirmed": "21",
          "Recovered": "2",
          "Deceased": "0",
          "ICMR_RTPCR": "8456.0",
          "Vaccine_Doses_administered": "0"
        },
       {
          "Date_YMD": "2020-06-11",
          "States": "Ladakh",
          "Confirmed": 20,
          "Recovered": 4,
          "Deceased": 0,
          "ICMR_RTPCR": 10855.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-06-12",
          "States": "Ladakh",
          "Confirmed": 104,
          "Recovered": 4,
          "Deceased": 0,
          "ICMR_RTPCR": 10986.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-06-13",
          "States": "Ladakh",
          "Confirmed": "198",
          "Recovered": "10",
          "Deceased": "0",
          "ICMR_RTPCR": "11135.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-14",
          "States": "Ladakh",
          "Confirmed": "112",
          "Recovered": "12",
          "Deceased": "0",
          "ICMR_RTPCR": "11135.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-15",
          "States": "Ladakh",
          "Confirmed": "6",
          "Recovered": "2",
          "Deceased": "0",
          "ICMR_RTPCR": "11260.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-05-01",
          "States": "Odisha",
          "Confirmed": 11,
          "Recovered": 14,
          "Deceased": 0,
          "ICMR_RTPCR": 34133.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-05-02",
          "States": "Odisha",
          "Confirmed": 6,
          "Recovered": 1,
          "Deceased": 0,
          "ICMR_RTPCR": 36593.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-05-03",
          "States": "Odisha",
          "Confirmed": "2",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "38658.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-04",
          "States": "Odisha",
          "Confirmed": "7",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "41128.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-06",
          "States": "Odisha",
          "Confirmed": "28",
          "Recovered": "1",
          "Deceased": "0",
          "ICMR_RTPCR": "47454.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-05-16",
          "States": "Punjab",
          "Confirmed": 14,
          "Recovered": 952,
          "Deceased": 0,
          "ICMR_RTPCR": 50613.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-05-20",
          "States": "Punjab",
          "Confirmed": 3,
          "Recovered": 152,
          "Deceased": "0",
          "ICMR_RTPCR": "57737.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-22",
          "States": "Punjab",
          "Confirmed": "1",
          "Recovered": "28",
          "Deceased": "0",
          "ICMR_RTPCR": "62399.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-23",
          "States": "Punjab",
          "Confirmed": "16",
          "Recovered": "23",
          "Deceased": "0",
          "ICMR_RTPCR": "63567.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-25",
          "States": "Punjab",
          "Confirmed": "21",
          "Recovered": "15",
          "Deceased": "0",
          "ICMR_RTPCR": "67213.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-07-20",
          "States": "Sikkim",
          "Confirmed": 22,
          "Recovered": 2,
          "Deceased": 0,
          "ICMR_RTPCR": 16906.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-07-21",
          "States": "Sikkim",
          "Confirmed": "25",
          "Recovered": "16",
          "Deceased": "0",
          "ICMR_RTPCR": "17564.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-22",
          "States": "Sikkim",
          "Confirmed": "108",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "19484.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-23",
          "States": "Sikkim",
          "Confirmed": "22",
          "Recovered": "10",
          "Deceased": "0",
          "ICMR_RTPCR": "20050.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-24",
          "States": "Sikkim",
          "Confirmed": "17",
          "Recovered": "15",
          "Deceased": "0",
          "ICMR_RTPCR": "20785.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2021-02-23",
          "States": "Gujarat",
          "Confirmed": 348,
          "Recovered": 294,
          "Deceased": 0,
          "ICMR_RTPCR": 11550722.0,
          "Vaccine_Doses_administered": 905054
        },
        {
          "Date_YMD": "2021-02-26",
          "States": "Gujarat",
          "Confirmed": 460,
          "Recovered": 315,
          "Deceased": 0,
          "ICMR_RTPCR": 11666635.0,
          "Vaccine_Doses_administered": 1001170
        },
        {
          "Date_YMD": "2021-03-02",
          "States": "Gujarat",
          "Confirmed": "454",
          "Recovered": "361",
          "Deceased": "0",
          "ICMR_RTPCR": "11812132.0",
          "Vaccine_Doses_administered": "1171503"
        },
        {
          "Date_YMD": "2021-03-04",
          "States": "Gujarat",
          "Confirmed": "480",
          "Recovered": "369",
          "Deceased": "0",
          "ICMR_RTPCR": "11894510.0",
          "Vaccine_Doses_administered": "1421761"
        },
        {
          "Date_YMD": "2021-03-10",
          "States": "Gujarat",
          "Confirmed": "675",
          "Recovered": "484",
          "Deceased": "0",
          "ICMR_RTPCR": "12145245.0",
          "Vaccine_Doses_administered": "2162924"
        },
      {
          "Date_YMD": "2020-04-25",
          "States": "Haryana",
          "Confirmed": 12,
          "Recovered": 5,
          "Deceased": 0,
          "ICMR_RTPCR": 20270.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-04-26",
          "States": "Haryana",
          "Confirmed": 9,
          "Recovered": 8,
          "Deceased": 0,
          "ICMR_RTPCR": 21467.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-04-27",
          "States": "Haryana",
          "Confirmed": "5",
          "Recovered": "14",
          "Deceased": "0",
          "ICMR_RTPCR": "22993.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-04-28",
          "States": "Haryana",
          "Confirmed": "7",
          "Recovered": "11",
          "Deceased": "0",
          "ICMR_RTPCR": "24826.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-04-29",
          "States": "Haryana",
          "Confirmed": "3",
          "Recovered": "1",
          "Deceased": "0",
          "ICMR_RTPCR": "26148.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-06-15",
          "States": "Manipur",
          "Confirmed": 32,
          "Recovered": 60,
          "Deceased": 0,
          "ICMR_RTPCR": 26458.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-06-16",
          "States": "Manipur",
          "Confirmed": 10,
          "Recovered": 8,
          "Deceased": 0,
          "ICMR_RTPCR": 0.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-06-17",
          "States": "Manipur",
          "Confirmed": "52",
          "Recovered": "33",
          "Deceased": "0",
          "ICMR_RTPCR": "29865.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-18",
          "States": "Manipur",
          "Confirmed": "54",
          "Recovered": "7",
          "Deceased": "0",
          "ICMR_RTPCR": "30476.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-19",
          "States": "Manipur",
          "Confirmed": "75",
          "Recovered": "19",
          "Deceased": "0",
          "ICMR_RTPCR": "32093.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-07-04",
          "States": "Mizoram",
          "Confirmed": 2,
          "Recovered": 3,
          "Deceased": 0,
          "ICMR_RTPCR": 14509.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-07-05",
          "States": "Mizoram",
          "Confirmed": "22",
          "Recovered": "3",
          "Deceased": "0",
          "ICMR_RTPCR": "14981.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-06",
          "States": "Mizoram",
          "Confirmed": "11",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "15006.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-07",
          "States": "Mizoram",
          "Confirmed": "1",
          "Recovered": "6",
          "Deceased": "0",
          "ICMR_RTPCR": "15058.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-08",
          "States": "Mizoram",
          "Confirmed": "5",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "15183.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-07-08",
          "States": "Tripura",
          "Confirmed": 57,
          "Recovered": 76,
          "Deceased": 0,
          "ICMR_RTPCR": 75641.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-07-09",
          "States": "Tripura",
          "Confirmed": 16,
          "Recovered": 14,
          "Deceased": 0,
          "ICMR_RTPCR": 77439.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-07-10",
          "States": "Tripura",
          "Confirmed": "142",
          "Recovered": "34",
          "Deceased": "0",
          "ICMR_RTPCR": "79429.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-12",
          "States": "Tripura",
          "Confirmed": "105",
          "Recovered": "46",
          "Deceased": "0",
          "ICMR_RTPCR": "83353.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-13",
          "States": "Tripura",
          "Confirmed": "26",
          "Recovered": "54",
          "Deceased": "0",
          "ICMR_RTPCR": "86211.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-06-20",
          "States": "Nagaland",
          "Confirmed": 3,
          "Recovered": 13,
          "Deceased": 0,
          "ICMR_RTPCR": 9128.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-06-21",
          "States": "Nagaland",
          "Confirmed": "10",
          "Recovered": "3",
          "Deceased": "0",
          "ICMR_RTPCR": "9971.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-22",
          "States": "Nagaland",
          "Confirmed": "69",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "10599.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-23",
          "States": "Nagaland",
          "Confirmed": "50",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "11173.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-24",
          "States": "Nagaland",
          "Confirmed": "17",
          "Recovered": "7",
          "Deceased": "0",
          "ICMR_RTPCR": "11867.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-07-03",
          "States": "Jharkhand",
          "Confirmed": 112,
          "Recovered": 13,
          "Deceased": 0,
          "ICMR_RTPCR": 151699.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-07-08",
          "States": "Jharkhand",
          "Confirmed": "116",
          "Recovered": "66",
          "Deceased": "0",
          "ICMR_RTPCR": "164504.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-10",
          "States": "Jharkhand",
          "Confirmed": "250",
          "Recovered": "14",
          "Deceased": "0",
          "ICMR_RTPCR": "172032.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-26",
          "States": "Jharkhand",
          "Confirmed": "508",
          "Recovered": "183",
          "Deceased": "0",
          "ICMR_RTPCR": "259096.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-10-30",
          "States": "Jharkhand",
          "Confirmed": "323",
          "Recovered": "421",
          "Deceased": "0",
          "ICMR_RTPCR": "3274987.0",
          "Vaccine_Doses_administered": "0"
        },
       {
          "Date_YMD": "2020-05-24",
          "States": "Karnataka",
          "Confirmed": 130,
          "Recovered": 46,
          "Deceased": 0,
          "ICMR_RTPCR": 206313.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-05-26",
          "States": "Karnataka",
          "Confirmed": "101",
          "Recovered": "59",
          "Deceased": "0",
          "ICMR_RTPCR": "228914.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-28",
          "States": "Karnataka",
          "Confirmed": "115",
          "Recovered": "53",
          "Deceased": "0",
          "ICMR_RTPCR": "252078.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-02",
          "States": "Karnataka",
          "Confirmed": "388",
          "Recovered": "75",
          "Deceased": "0",
          "ICMR_RTPCR": "319628.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-05",
          "States": "Karnataka",
          "Confirmed": "515",
          "Recovered": "83",
          "Deceased": "0",
          "ICMR_RTPCR": "360720.0",
          "Vaccine_Doses_administered": "0"
        },
       {
          "Date_YMD": "2020-05-24",
          "States": "Karnataka",
          "Confirmed": "130",
          "Recovered": "46",
          "Deceased": "0",
          "ICMR_RTPCR": "206313.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-26",
          "States": "Karnataka",
          "Confirmed": "101",
          "Recovered": "59",
          "Deceased": "0",
          "ICMR_RTPCR": "228914.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-28",
          "States": "Karnataka",
          "Confirmed": "115",
          "Recovered": "53",
          "Deceased": "0",
          "ICMR_RTPCR": "252078.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-02",
          "States": "Karnataka",
          "Confirmed": "388",
          "Recovered": "75",
          "Deceased": "0",
          "ICMR_RTPCR": "319628.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-05",
          "States": "Karnataka",
          "Confirmed": "515",
          "Recovered": "83",
          "Deceased": "0",
          "ICMR_RTPCR": "360720.0",
          "Vaccine_Doses_administered": "0"
        },
         {
          "Date_YMD": "2020-05-24",
          "States": "Karnataka",
          "Confirmed": "130",
          "Recovered": "46",
          "Deceased": "0",
          "ICMR_RTPCR": "206313.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-26",
          "States": "Karnataka",
          "Confirmed": "101",
          "Recovered": "59",
          "Deceased": "0",
          "ICMR_RTPCR": "228914.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-28",
          "States": "Karnataka",
          "Confirmed": "115",
          "Recovered": "53",
          "Deceased": "0",
          "ICMR_RTPCR": "252078.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-02",
          "States": "Karnataka",
          "Confirmed": "388",
          "Recovered": "75",
          "Deceased": "0",
          "ICMR_RTPCR": "319628.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-05",
          "States": "Karnataka",
          "Confirmed": "515",
          "Recovered": "83",
          "Deceased": "0",
          "ICMR_RTPCR": "360720.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-08-14",
          "States": "Meghalaya",
          "Confirmed": 35,
          "Recovered": 34,
          "Deceased": 0,
          "ICMR_RTPCR": 42706.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-08-15",
          "States": "Meghalaya",
          "Confirmed": 64,
          "Recovered": 15,
          "Deceased": 0,
          "ICMR_RTPCR": 42910.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-08-16",
          "States": "Meghalaya",
          "Confirmed": "82",
          "Recovered": "79",
          "Deceased": "0",
          "ICMR_RTPCR": "43800.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-08-17",
          "States": "Meghalaya",
          "Confirmed": "44",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-08-18",
          "States": "Meghalaya",
          "Confirmed": "39",
          "Recovered": "6",
          "Deceased": "0",
          "ICMR_RTPCR": "44234.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2021-01-08",
          "States": "Rajasthan",
          "Confirmed": 471,
          "Recovered": 537,
          "Deceased": 0,
          "ICMR_RTPCR": 5427159.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2021-01-15",
          "States": "Rajasthan",
          "Confirmed": "310",
          "Recovered": "377",
          "Deceased": "0",
          "ICMR_RTPCR": "5568441.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2021-01-22",
          "States": "Rajasthan",
          "Confirmed": "201",
          "Recovered": "416",
          "Deceased": "0",
          "ICMR_RTPCR": "5705383.0",
          "Vaccine_Doses_administered": "43947"
        },
        {
          "Date_YMD": "2021-01-24",
          "States": "Rajasthan",
          "Confirmed": "167",
          "Recovered": "468",
          "Deceased": "0",
          "ICMR_RTPCR": "5744724.0",
          "Vaccine_Doses_administered": "93525"
        },
        {
          "Date_YMD": "2021-01-26",
          "States": "Rajasthan",
          "Confirmed": "125",
          "Recovered": "257",
          "Deceased": "0",
          "ICMR_RTPCR": "5771559.0",
          "Vaccine_Doses_administered": "161332"
        },
      {
          "Date_YMD": "2020-05-15",
          "States": "Telangana",
          "Confirmed": 40,
          "Recovered": 7,
          "Deceased": 0,
          "ICMR_RTPCR": 0.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-05-16",
          "States": "Telangana",
          "Confirmed": "55",
          "Recovered": "12",
          "Deceased": "0",
          "ICMR_RTPCR": "23388.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-17",
          "States": "Telangana",
          "Confirmed": "42",
          "Recovered": "21",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-18",
          "States": "Telangana",
          "Confirmed": "41",
          "Recovered": "10",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
       {
          "Date_YMD": "2020-06-30",
          "States": "Chandigarh",
          "Confirmed": 6,
          "Recovered": 15,
          "Deceased": 0,
          "ICMR_RTPCR": 7689.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-07-01",
          "States": "Chandigarh",
          "Confirmed": "6",
          "Recovered": "3",
          "Deceased": "0",
          "ICMR_RTPCR": "7792.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-02",
          "States": "Chandigarh",
          "Confirmed": "4",
          "Recovered": "22",
          "Deceased": "0",
          "ICMR_RTPCR": "7938.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-03",
          "States": "Chandigarh",
          "Confirmed": "4",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "8074.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-06-06",
          "States": "Puducherry",
          "Confirmed": 3,
          "Recovered": 5,
          "Deceased": 0,
          "ICMR_RTPCR": 8118.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-06-07",
          "States": "Puducherry",
          "Confirmed": "12",
          "Recovered": "1",
          "Deceased": "0",
          "ICMR_RTPCR": "8274.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-08",
          "States": "Puducherry",
          "Confirmed": "9",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "8472.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-09",
          "States": "Puducherry",
          "Confirmed": "4",
          "Recovered": "2",
          "Deceased": "0",
          "ICMR_RTPCR": "8752.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-03-30",
          "States": "Tamil Nadu",
          "Confirmed": 17,
          "Recovered": 2,
          "Deceased": 0,
          "ICMR_RTPCR": 0.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-03-31",
          "States": "Tamil Nadu",
          "Confirmed": "57",
          "Recovered": "2",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-04-01",
          "States": "Tamil Nadu",
          "Confirmed": "110",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-04-02",
          "States": "Tamil Nadu",
          "Confirmed": "75",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2021-01-29",
          "States": "Lakshadweep",
          "Confirmed": 1,
          "Recovered": 14,
          "Deceased": 0,
          "ICMR_RTPCR": 0.0,
          "Vaccine_Doses_administered": 746
        },
        {
          "Date_YMD": "2021-01-30",
          "States": "Lakshadweep",
          "Confirmed": "9",
          "Recovered": "16",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "807"
        },
        {
          "Date_YMD": "2021-01-31",
          "States": "Lakshadweep",
          "Confirmed": "8",
          "Recovered": "19",
          "Deceased": "0",
          "ICMR_RTPCR": "2328.0",
          "Vaccine_Doses_administered": "807"
        },
        {
          "Date_YMD": "2021-02-01",
          "States": "Lakshadweep",
          "Confirmed": "12",
          "Recovered": "7",
          "Deceased": "0",
          "ICMR_RTPCR": "2919.0",
          "Vaccine_Doses_administered": "807"
        },
      {
          "Date_YMD": "2020-03-25",
          "States": "Maharashtra",
          "Confirmed": 15,
          "Recovered": 1,
          "Deceased": 0,
          "ICMR_RTPCR": 0.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-03-15",
          "States": "Total_India",
          "Confirmed": 27,
          "Recovered": 4,
          "Deceased": 0,
          "ICMR_RTPCR": 0.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-03-16",
          "States": "Total_India",
          "Confirmed": "15",
          "Recovered": "1",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-03-18",
          "States": "Total_India",
          "Confirmed": "37",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-03-16",
          "States": "Total_India",
          "Confirmed": "15",
          "Recovered": "1",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-03-18",
          "States": "Total_India",
          "Confirmed": "37",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-03-20",
          "States": "Total_India",
          "Confirmed": "58",
          "Recovered": "3",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-03-21",
          "States": "Total_India",
          "Confirmed": "78",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-05-29",
          "States": "Uttarakhand",
          "Confirmed": 216,
          "Recovered": 23,
          "Deceased": 0,
          "ICMR_RTPCR": 26951.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-05-31",
          "States": "Uttarakhand",
          "Confirmed": "158",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "30438.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-01",
          "States": "Uttarakhand",
          "Confirmed": "52",
          "Recovered": "120",
          "Deceased": "0",
          "ICMR_RTPCR": "31703.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-06",
          "States": "Uttarakhand",
          "Confirmed": "88",
          "Recovered": "78",
          "Deceased": "0",
          "ICMR_RTPCR": "36638.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-04-29",
          "States": "West Bengal",
          "Confirmed": 28,
          "Recovered": 10,
          "Deceased": 0,
          "ICMR_RTPCR": 14620.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2021-03-01",
          "States": "West Bengal",
          "Confirmed": "198",
          "Recovered": "212",
          "Deceased": "0",
          "ICMR_RTPCR": "8579292.0",
          "Vaccine_Doses_administered": "1124158"
        },
        {
          "Date_YMD": "2020-05-25",
          "States": "Chhattisgarh",
          "Confirmed": "40",
          "Recovered": "3",
          "Deceased": "0",
          "ICMR_RTPCR": "55022.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-26",
          "States": "Chhattisgarh",
          "Confirmed": "68",
          "Recovered": "12",
          "Deceased": "0",
          "ICMR_RTPCR": "57479.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-27",
          "States": "Chhattisgarh",
          "Confirmed": "4",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "59320.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-06-01",
          "States": "Miscellaneous",
          "Confirmed": "139",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-02",
          "States": "Miscellaneous",
          "Confirmed": "784",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-03",
          "States": "Miscellaneous",
          "Confirmed": "709",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-04-18",
          "States": "Uttar Pradesh",
          "Confirmed": 126,
          "Recovered": 26,
          "Deceased": 0,
          "ICMR_RTPCR": 28484.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-04-22",
          "States": "Uttar Pradesh",
          "Confirmed": "112",
          "Recovered": "11",
          "Deceased": "0",
          "ICMR_RTPCR": "42192.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-03",
          "States": "Uttar Pradesh",
          "Confirmed": "158",
          "Recovered": "56",
          "Deceased": "0",
          "ICMR_RTPCR": "95841.0",
          "Vaccine_Doses_administered": "0"
        },
       {
          "Date_YMD": "2020-04-04",
          "States": "Andhra Pradesh",
          "Confirmed": 28,
          "Recovered": 0,
          "Deceased": 0,
          "ICMR_RTPCR": 0.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-04-05",
          "States": "Andhra Pradesh",
          "Confirmed": "64",
          "Recovered": "3",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-04-08",
          "States": "Andhra Pradesh",
          "Confirmed": "34",
          "Recovered": "1",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-04-10",
          "States": "Andhra Pradesh",
          "Confirmed": "18",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "6374.0",
          "Vaccine_Doses_administered": "0"
        },
       {
          "Date_YMD": "2020-03-26",
          "States": "Madhya Pradesh",
          "Confirmed": 5,
          "Recovered": 0,
          "Deceased": 0,
          "ICMR_RTPCR": 0.0,
          "Vaccine_Doses_administered": 0
        },
        {
          "Date_YMD": "2020-03-28",
          "States": "Madhya Pradesh",
          "Confirmed": "10",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-03-29",
          "States": "Madhya Pradesh",
          "Confirmed": "0",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "0.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-05-18",
          "States": "Himachal Pradesh",
          "Confirmed": "10",
          "Recovered": "2",
          "Deceased": "0",
          "ICMR_RTPCR": "18224.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-20",
          "States": "Himachal Pradesh",
          "Confirmed": "18",
          "Recovered": "3",
          "Deceased": "0",
          "ICMR_RTPCR": "21147.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-05-21",
          "States": "Himachal Pradesh",
          "Confirmed": "42",
          "Recovered": "5",
          "Deceased": "0",
          "ICMR_RTPCR": "22641.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-07-07",
          "States": "Arunachal Pradesh",
          "Confirmed": "6",
          "Recovered": "13",
          "Deceased": "0",
          "ICMR_RTPCR": "28072.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-08",
          "States": "Arunachal Pradesh",
          "Confirmed": "11",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "28581.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-09",
          "States": "Arunachal Pradesh",
          "Confirmed": "15",
          "Recovered": "11",
          "Deceased": "0",
          "ICMR_RTPCR": "29232.0",
          "Vaccine_Doses_administered": "0"
        },
      {
          "Date_YMD": "2020-04-16",
          "States": "Jammu and Kashmir",
          "Confirmed": "14",
          "Recovered": "2",
          "Deceased": "0",
          "ICMR_RTPCR": "5680.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-04-18",
          "States": "Jammu and Kashmir",
          "Confirmed": "13",
          "Recovered": "9",
          "Deceased": "0",
          "ICMR_RTPCR": "6937.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-04-19",
          "States": "Jammu and Kashmir",
          "Confirmed": "13",
          "Recovered": "5",
          "Deceased": "0",
          "ICMR_RTPCR": "7895.0",
          "Vaccine_Doses_administered": "0"
        },
       {
          "Date_YMD": "2020-07-01",
          "States": "Andaman and Nicobar Islands",
          "Confirmed": "3",
          "Recovered": "5",
          "Deceased": "0",
          "ICMR_RTPCR": "15982.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-02",
          "States": "Andaman and Nicobar Islands",
          "Confirmed": "9",
          "Recovered": "1",
          "Deceased": "0",
          "ICMR_RTPCR": "16278.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-07-03",
          "States": "Andaman and Nicobar Islands",
          "Confirmed": "7",
          "Recovered": "3",
          "Deceased": "0",
          "ICMR_RTPCR": "16626.0",
          "Vaccine_Doses_administered": "0"
        },
       {
          "Date_YMD": "2021-04-13",
          "States": "Andaman and Nicobar Islands",
          "Confirmed": "8",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "341557.0",
          "Vaccine_Doses_administered": "48901"
        },
        {
          "Date_YMD": "2021-04-15",
          "States": "Andaman and Nicobar Islands",
          "Confirmed": "15",
          "Recovered": "4",
          "Deceased": "0",
          "ICMR_RTPCR": "345485.0",
          "Vaccine_Doses_administered": "60898"
        },
        {
          "Date_YMD": "2021-04-16",
          "States": "Andaman and Nicobar Islands",
          "Confirmed": "27",
          "Recovered": "28",
          "Deceased": "0",
          "ICMR_RTPCR": "347489.0",
          "Vaccine_Doses_administered": "67734"
        },
       {
          "Date_YMD": "2020-06-20",
          "States": "Dadra and Nagar Haveli and Daman and Diu",
          "Confirmed": "17",
          "Recovered": "12",
          "Deceased": "0",
          "ICMR_RTPCR": "27617.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-21",
          "States": "Dadra and Nagar Haveli and Daman and Diu",
          "Confirmed": "5",
          "Recovered": "1",
          "Deceased": "0",
          "ICMR_RTPCR": "27839.0",
          "Vaccine_Doses_administered": "0"
        },
        {
          "Date_YMD": "2020-06-22",
          "States": "Dadra and Nagar Haveli and Daman and Diu",
          "Confirmed": "15",
          "Recovered": "0",
          "Deceased": "0",
          "ICMR_RTPCR": "28364.0",
          "Vaccine_Doses_administered": "0"
        },
      ]
      
      
        
    getItems(): jsonfile[]{
        return this.Items;

      }
}