import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  postEmployee(data: any) {
    return this.http.post<any>("http://localhost:3001/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getEmployee() {
    return this.http.get<any>("http://localhost:3001/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateEmployee(data: any, id: any) {
    return this.http.put<any>("http://localhost:3001/posts/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteEmployee(id: any) {
    return this.http.delete<any>("http://localhost:3001/posts/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}