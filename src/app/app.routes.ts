import { Routes } from '@angular/router';
import { Middle } from './middle/middle';
import { Whatwedo } from './whatwedo/whatwedo';
import { Home } from './home/home';


export const routes: Routes = [
            {

                path:'', redirectTo:'middle', pathMatch:'full'
            },
            {
                path:'middle', component:Middle
            },
            {
                path:'whatwedo', component:Whatwedo

            },
            {
                path : 'home',redirectTo:'middle', pathMatch:'full'
            }
];
