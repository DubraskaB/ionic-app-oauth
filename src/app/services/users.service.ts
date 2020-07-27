import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
//import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url: string;

  constructor(private _http:Http) { this.url = 'http://localhost:3000'; }

  //GET 
  getHello(){ //Metodo para iniciar sesión
    return this._http.get(this.url+'/test/hello')
      .pipe(map(res => res.json()));
  }

  promotion(token){ 
    var body = 'Authorization='+'Bearer '+token;
    var headers = new Headers({ 'Authorization': 'Bearer '+token });
    return this._http.post(this.url+'/api/promotion', body, {headers: headers})
      .pipe(map(res => res.json()));
  }

  promotions(token){ 
    var body = 'Authorization='+'Bearer '+token;
    var headers = new Headers({ 'Authorization': 'Bearer '+token });
    return this._http.post(this.url+'/api/promotions', body, {headers: headers})
      .pipe(map(res => res.json()));
  }

  login(username, password){ 
    var body = 'username='+username+'&password='+password+'&grant_type=password'+'&client_id=null'+'&client_secret=null';
    var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post(this.url+'/auth/login', body, {headers: headers})
      .pipe(map(res => res.json()));
  }

  register(username, password){ 
    var body = 'username='+username+'&password='+password+'&grant_type=password'+'&client_id=null'+'&client_secret=null';
    var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post(this.url+'/auth/register', body, {headers: headers})
      .pipe(map(res => res.json()));
  }

}