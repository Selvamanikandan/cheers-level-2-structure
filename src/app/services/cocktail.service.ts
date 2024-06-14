import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICocktail } from '../model/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  get bookmarkIds(): string[] {
    const bookmarIds = sessionStorage.getItem('bookmarkIds');
    return bookmarIds?.split(',') || [];
  }

  set bookmarkIds(bookmarkId: string) {
    const bookmarkIds: string[] = this.bookmarkIds;
    const index = bookmarkIds.indexOf(bookmarkId);
    if(index > -1) {
      bookmarkIds.splice(index, 1);
    } else {
      bookmarkIds.push(bookmarkId);
    }
    if(bookmarkIds?.length) {
      sessionStorage.setItem('bookmarkIds', bookmarkIds?.toString());
    } else {
      sessionStorage.removeItem('bookmarkIds');
    }
  }

  getAllCocktails(): Observable<ICocktail[]> {
    return this.http.get<ICocktail[]>('/cockails')
  }

  getCocktailById(id: string): Observable<ICocktail> {
    return this.http.get<ICocktail>(`/cockails/${id}`)
  }
}
