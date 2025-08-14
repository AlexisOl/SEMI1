import { Routes } from '@angular/router';
import { VistaGlobalComponent } from './General/vista-global/vista-global.component';
import { poemasRoutes } from './General/general.routes';

export const routes: Routes = [


    {path: 'poemas', loadChildren: ()  => import('./General/general.routes').then(p => p.poemasRoutes )},

    {path: '', pathMatch:'full',  redirectTo: 'poemas'}
];
