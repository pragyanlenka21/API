import { Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardComponent } from './card/card.component';
import { FormsComponent } from './forms/forms.component';

export const routes: Routes = [
    {
        path: '',
        component: CardComponent,
        title : 'Product List'
    },
    {
        path: 'product-list',
        component: CardComponent,
        title : 'Product List'
    },
    {
        path: 'card-details/:id',
        component: CardDetailsComponent,
        title : 'Product Details'
    },
    {
        path: 'forms',
        component: FormsComponent,
        title : 'Dashboard'
    }
];
