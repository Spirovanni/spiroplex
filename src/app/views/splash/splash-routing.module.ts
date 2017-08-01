import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './splash.component';

const routes: Routes = [
    {
        path: '',
        component: SplashComponent,
        data: {
            title: 'Splash'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SplashRoutingModule {}
