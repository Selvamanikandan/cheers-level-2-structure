import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CocktailService } from '../../services/cocktail.service';
import { FormsModule } from '@angular/forms';
import { FilterByKeyPipe } from '../../pipes/filter-by-key.pipe';
import { RouterModule } from '@angular/router';
import { ICocktail } from '../../model/cocktail';

@Component({
  selector: 'app-cocktails-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FilterByKeyPipe ],
  templateUrl: './cocktails-list.component.html',
  styleUrl: './cocktails-list.component.scss'
})
export class CocktailsListComponent implements OnInit {
  cocktailName: string;
  cocktails$: Observable<ICocktail[]>;
  cocktails: ICocktail[];
  bookmarkedIds: string[] = [];
  constructor(private cocktailService: CocktailService){}
  
  ngOnInit() {
    this.cocktails$ = this.cocktailService.getAllCocktails();
    this.bookmarkedIds = this.cocktailService.bookmarkIds;
  }

  addBookmark(id: string) {
    this.cocktailService.bookmarkIds = id;
    this.bookmarkedIds = this.cocktailService.bookmarkIds;     
  }
}
