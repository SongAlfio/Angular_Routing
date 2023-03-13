import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OpenfoodfactsService } from './Openfoodfact.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit  {

  namefood!: string;
  results: any;
  title = 'Openfoodfacts';  
  loading!: boolean
  FoodObs!:Observable<Object>;
  data!: object

  ngOnInit(): void {
  }

  constructor(public openfoodfacts: OpenfoodfactsService,
              private http: HttpClient) {}

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




    submit(namefood: HTMLInputElement): void {

      if (!namefood.value) {
        return;
      }
      this.namefood = namefood.value;
      this.FoodObs = this.openfoodfacts.searchFood(this.namefood);
      
      this.FoodObs.subscribe((data) => { this.results = data; console.log(this.results) });
    }
  
    renderResults(res: any): void {
      this.results = null;
      if (res && res.tracks && res.tracks.items) {
        this.results = res.tracks.items;
      }
    }
}

