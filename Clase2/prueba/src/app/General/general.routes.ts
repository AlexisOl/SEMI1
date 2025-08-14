import { Routes } from '@angular/router';
import { VistaGlobalComponent } from './vista-global/vista-global.component';
import { PoetasComponent } from './poetas/poetas.component';

export const poemasRoutes: Routes = [


    {path: '', component: VistaGlobalComponent},
    {path: 'poetas', component: PoetasComponent},


    
];
