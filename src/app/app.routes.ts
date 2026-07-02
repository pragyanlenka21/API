import { Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
    {
        path: '',
        component: CardComponent,
    },
    {
        path: 'card-details/:id',
        component: CardDetailsComponent,
    }
];
