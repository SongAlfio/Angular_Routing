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
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA_fFQbtHShNvWyHgnHdYeMsdEnScWQ6Jq1gNL4UTQZiNDD_3nw5kUJfSqzEiXlwyA6EQ1zeUMzqz7AmV8Y1gQq2fEyT7p2D17ktjFaIpWVQ9SniVHf2JKNEiJBST9pWGIA6ss3cZ3l_r3gKNo56X5a5-5Wk7ayzBXoqfpP1YifgXP4FGsQom2IuLhW-HIuhlEs'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}