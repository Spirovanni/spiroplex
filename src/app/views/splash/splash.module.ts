import { NgModule } from '@angular/core';

import { SplashComponent } from './splash.component';
import { SplashRoutingModule } from './splash-routing.module';

@NgModule({
    imports: [
      SplashRoutingModule
    ],
    declarations: [ SplashComponent ]
})
export class SplashModule { }
