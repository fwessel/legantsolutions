import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SystemsComponent } from './systems/systems.component';
import { ComponentsComponent } from './components/components.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CapacitorsComponent } from './capacitors/capacitors.component';
import { DiodesComponent } from './diodes/diodes.component';
import { ResistorsComponent } from './resistors/resistors.component';
import { SwitchesComponent } from './switches/switches.component';
import { TransformersComponent } from './transformers/transformers.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            /*
            {
                path: 'systems',
                loadComponent: () => import('./systems/systems.component').then(m => m.SystemsComponent)
            },
            {
                path: 'components',
                loadComponent: () => import('./components/components.component').then(m => m.ComponentsComponent)
            },
            {
                path: 'components/capacitors',
                loadComponent: () => import('./capacitors/capacitors.component').then(m => m.CapacitorsComponent)
            },
            {
                path: 'components/diodes',
                loadComponent: () => import('./diodes/diodes.component').then(m => m.DiodesComponent)
            },
            {
                path: 'components/resistors',
                loadComponent: () => import('./resistors/resistors.component').then(m => m.ResistorsComponent)
            },
            {
                path: 'components/switches',
                loadComponent: () => import('./switches/switches.component').then(m => m.SwitchesComponent)
            },
            {
                path: 'components/transformers',
                loadComponent: () => import('./transformers/transformers.component').then(m => m.TransformersComponent)
            },
            {
                path: 'components/miscellaneous',
                loadComponent: () => import('./miscellaneous/miscellaneous.component').then(m => m.MiscellaneousComponent)
            },
            {
                path: 'diagnostics',
                loadComponent: () => import('./diagnostics/diagnostics.component').then(m => m.DiagnosticsComponent)
            },
            */
            {
                path: 'contact',
                loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
            },
            {
                path: 'about',
                loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
            },
        ]
    },
    { 
        path: '**',
        redirectTo: '' 
    }
];
