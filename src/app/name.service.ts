import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(private http: HttpClient) { }

  onSendService(fromData: FormData): Observable<any> {
    if (/github/.test(location.hostname)) {
      return this.http.post<any>('https://pwapps.net/api/regex.php', fromData);
    }
    else {
      return this.http.post<any>('http://localhost:3006/angular.php', fromData);
    }
  }
}
