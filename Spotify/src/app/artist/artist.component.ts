import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import { Location } from '@angular/common'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit{
  routeObs!: Observable<ParamMap>; 
  artist : any; 
  spotifyServiceObs!: Observable<Object>;
  data!: Object;
  loading!: boolean;
  o!:Observable<Object>;
  
  
  constructor(
    private route: ActivatedRoute, 
    private service: SpotifyService,
    private location: Location,
    public http: HttpClient 
    ) {}


    ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
    }


    getRouterParam = (params: ParamMap) =>
    {
      let artistId = params.get('id'); 
      console.log (artistId); 
      this.spotifyServiceObs = this.service.getArtist(artistId) ;
      this.spotifyServiceObs.subscribe((data)=>this.artist = data)
      
    }

    
    back() : void
     {
       this.location.back();
     }
}
