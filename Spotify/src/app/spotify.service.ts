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
        'Bearer BQDRsVhoCG12WqQNuiqhaCzn2JcvFroRgIsEJbqRZLMzX_SSCY_-4C7BbWv7m8DQuQpdpeFJJZSqHiMnFDldkne9Kn1AiDWWtbhvwlQVG-JV3RqHcwoTOd4PqXLnCp5915uBzDTk08D6v6HogXts5tqiR7vsOcGVhieOEZSyo7D6NHlmKdiLgzshjieMtg2P-TK1'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}