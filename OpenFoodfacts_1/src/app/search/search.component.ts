import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenFoodfactsService } from '../open-foodfacts.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query!: string;
  title = 'first-routed-app';
  obsTrack!: Observable<Object>;
  results: any;
  
}
