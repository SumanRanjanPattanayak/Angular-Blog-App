import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }
  api()
  {
    return this.http.get("http://localhost:5166/api/BlogQA");
  }
}
