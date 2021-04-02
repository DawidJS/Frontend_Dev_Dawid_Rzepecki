import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirLines } from '../Models/Airline';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Array<AirLines>> {
    return this.httpClient.get<Array<AirLines>>('https://iata-and-icao-codes.p.rapidapi.com/airlines',
      {
        headers: {
          "x-rapidapi-key": "ff7b82d3f1msh66b000f64f780e1p1916dejsn31636a57ad05",
          "x-rapidapi-host": "iata-and-icao-codes.p.rapidapi.com"
        }
      });
  }


}