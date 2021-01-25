import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(private http:HttpClient) { }

  onSendService(fromData: FormData):Observable<any>{
    return this.http.post<any>('https://ketubah/kalendar/angular.php', fromData);
  }
}
