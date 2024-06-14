import { Routes } from '@angular/router';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'cocktails', 
        pathMatch: 'full'
    },
    {
        path: 'cocktails',
        component: CocktailsListComponent
    },
    {
        path: 'cocktails/:cocktailId',
        component: CocktailDetailComponent
    },
];
