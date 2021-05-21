import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { jsonfile } from './corona';
@Injectable({
  providedIn: 'root'
})
export class CoronaService implements OnInit {
  BannerData: BehaviorSubject<any> = new BehaviorSubject('')
  url_banner = "https://api.covid19india.org/website_data.json";
  url_state="https://us-central1-tgs-internal-saige-dev-001.cloudfunctions.net/di_init_covid19_stats_access";
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  getBanners(): Observable<any> {
    return this.http.get(this.url_banner)
  }
  getState():Observable<jsonfile[]>  {
    return this.http.get<jsonfile[]>(this.url_state);
  }
}