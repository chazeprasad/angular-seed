import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


interface LoginResponse {
  accessToken: string;
  accessExpiration: number;
}


@Injectable()
export class AppDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const params = new HttpParams().set('q', 'cironunes');

    return this.http.get('url', {params})
    .map(this.extractData)
    .catch(this.handleError)
  }

  postData():Observable<any>{

    return this.http.post<LoginResponse>('api/login', {
      login: 'foo',
      password: 'bar'
    });
  }


  // -------------------------------- //
  extractData(res: any){
    return res.json() || {} ;
  }
  handleError(err: any) {
    return Observable.throw('err');
  }

}
