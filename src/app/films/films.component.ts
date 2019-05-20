import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  movies = [
  'Le Parrain',
  'Star Wars',
  'Avengers',
  'Dikkenek'
  ]

  showMovies = true;

  constructor() { }



  ngOnInit() {
  }

}
