import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { Movie } from './movie';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  movieName:string =''
  reachedMovie!:Movie;
  showBug:boolean = false;
  constructor(private service:MovieService){}

  search(movieName: string) {
    this.service.getMovie(movieName).subscribe(
      movie => {
        console.log(movie);
        this.showBug = false;
        this.reachedMovie = movie;
        this.bug();
        console.log(this.reachedMovie.Title)
        console.log(this.reachedMovie.Year)
        console.log(this.reachedMovie.Director)
      },
      error => {

        console.error('Ocorreu um erro:', error);
      }
    );
  }

  bug(){
    if(!this.reachedMovie.Director){
      this.showBug = true;
    }
  }

}
