import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adviceinterface } from './adviceinterface';

@Injectable({
  providedIn: 'root'
})
export class GetAdviceServiceService {
  private APIURL = 'https://api.adviceslip.com/advice'
  constructor(private http:HttpClient) { }

  getAdvice():Observable<Adviceinterface>{
    return this.http.get<Adviceinterface>(this.APIURL);
  }
}
