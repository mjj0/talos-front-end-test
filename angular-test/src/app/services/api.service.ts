import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = `${environment.apiUrl}`;
  private readonly httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  get(route: string): any {
    return this.http
      .get(`${this.apiUrl}/${route}`, this.httpOptions)
      .toPromise();
  }
}
