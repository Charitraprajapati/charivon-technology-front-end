import { Routes } from '@angular/router';
import { Middle } from './middle/middle';
import { Whatwedo } from './whatwedo/whatwedo';
import { Home } from './home/home';
import { Industries } from './industries/industries';
import { Contact } from './contact/contact';


export const routes: Routes = [
            // {
            //     path:'', redirectTo:'middle', pathMatch:'full'
            // },
            {
                path:'whatwedo', component:Whatwedo

            },
            {
                path : 'home', component:Middle
            },
            {
                path:'',  component:Middle
            },{
                path : 'industries', component:Industries
            },
            {
                path : 'contact', component : Contact
            },
           
           
            
];
