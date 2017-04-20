import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  //private productUrl = 'http://54.83.73.119:4002/bjspdpapi/getpdp?productid=10001';
  //private productUrl = 'http://sajanjohn.com/cookie/ajax.php';
  private productUrl = 'todo.json'
  private headers = new Headers({'x-ibm-client-id': 'default'});
  private withCredentials = true;
  constructor(private http: Http){}
  getData(http){
    console.log("test");
    return http.get(this.productUrl, {headers: this.headers},{withCredentials:this.withCredentials})
    .toPromise();
  }


}
