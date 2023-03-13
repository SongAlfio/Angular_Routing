import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: 'any'  
  })
export class OpenfoodfactsService {
    //url per oauth: https://developer.spotify.com/console/get-search-item/
   //Ottengo il modulo HttpClient
   constructor(private http: HttpClient) { }
   searchFood(namefood: string) {
    const url = `'https://world.openfoodfacts.org/cgi/search.pl?search_terms=${namefood}&page_size=2&json=true'`;
    const headers = new HttpHeaders({'User-Agent' : 'MyFoodApp - Android - Version 1.0 - https://myfoodapp.com'})

    //this.FoodObs.subscribe(this.getData);
    //console.log(this.FoodObs)
    let FoodObs = this.http.get(url, { headers });
    return FoodObs;
   }


   
   
     
  //Ritorno un observable ai componenti che richiedono il servizio
    }
