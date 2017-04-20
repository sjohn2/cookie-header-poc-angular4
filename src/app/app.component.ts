import { Component } from '@angular/core';
import {Http, HttpModule} from '\@angular/http';
import 'rxjs/add/operator/map'

import { AppService } from './app.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent {
  
  name:string;
  productData: any = {};
  error: boolean = false;
  constructor(private AppService: AppService) {
    this.name = 'Hello';
    this.AppService = AppService;
  }
  ngOnInit(){
   //Initialized
  }
  getProdData(){
      AppService.getData().then((res) => {
      console.log(res.json());
      this.productData = res.json();
    }).catch((err) => {
      this.productData = err;
      this.error = true;
      console.log(`An error occured, status code: ${err.status}`);
    })
  }
   
     
}
