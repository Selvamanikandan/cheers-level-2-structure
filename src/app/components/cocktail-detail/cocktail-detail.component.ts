import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ICocktail } from '../../model/cocktail';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss'
})
export class CocktailDetailComponent {

  selectedId: string;
  bookmarkedIds: string[] = [];
  cocktailDetail$: Observable<ICocktail>;
  constructor(private route: ActivatedRoute, private cocktailService: CocktailService){
  }
  
  ngOnInit() {
    this.selectedId = this.route.snapshot.params['cocktailId'];
    this.cocktailDetail$ = this.cocktailService.getCocktailById(this.selectedId);
    this.bookmarkedIds = this.cocktailService.bookmarkIds;     
  }
  
  addBookmark(id: string) {
    this.cocktailService.bookmarkIds = id;
    this.bookmarkedIds = this.cocktailService.bookmarkIds;     
  }
}
