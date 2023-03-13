import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OpenFoodfactsService {
  
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=2&json=true`;
    const headers = new HttpHeaders({'User-Agent' : 'MyFoodApp - Android - Version 1.0 - https://myfoodapp.com'});
    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
    
 //Ritorno un observable ai componenti che richiedono il servizio
  }

}
