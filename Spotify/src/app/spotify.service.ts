import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}=TRADE&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBe_8oLLEIOfLE8qnGV1oFzbnyBwA6Y3zxpdoLbBEqdPwBmewIB-l3PoS3yXhEyDoitirehX7sRLVvyHrYJOhlMuIa6-h5qrlhqxVKUz2S5wJMkwEAsGA5nHYkqVxnTctw7Q0eAOB8oCktm1Pa9wKSA62u0EnTirNjYBSdDDHz8OFQ4oiCG8GCwtey9mRPIAb6t'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}