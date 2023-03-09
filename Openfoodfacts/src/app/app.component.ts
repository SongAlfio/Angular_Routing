import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Openfoodfacts';

  ngOnInit(): void {
  }

  constructor(private http: HttpClient){}
  loading!: boolean
  FoodObs!:Observable<Object>;
  data!: object

  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.FoodObs = this.http.get('https://openfoodfacts.github.io/api-documentation/');
    this.FoodObs.subscribe(this.getData);
    console.log(this.FoodObs)
  }
  getData(getData: any) {
    this.data = new Object(getData);
    this.loading = false;
    }
}

