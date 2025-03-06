// src/app/services/app.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  add(start: number, amount: number): Observable<any> {
    return this.http.get(` http://localhost:5101/api/calculator/add?start=${start}&amount=${amount}`);
    // http://localhost:5101/api/calculator/subtract?start=10&amount=5
  }
  subtract(start: number, amount: number): Observable<any> {
    return this.http.get(` http://localhost:5101/api/calculator/subtract?start=${start}&amount=${amount}`);
  }
}
