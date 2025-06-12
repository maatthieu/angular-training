import { Routes } from '@angular/router';
import { Page1 } from './routing/page1/page1';
import { Page2 } from './routing/page2/page2';

export const routes: Routes = [
    { path: 'page1', component: Page1 },
    { path: 'page2/:id', component: Page2 },
    { path: '**', redirectTo: 'page1' }
];
