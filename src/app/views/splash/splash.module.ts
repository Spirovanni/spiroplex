import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { SplashComponent } from './splash.component';
import { SplashRoutingModule } from './splash-routing.module';

@NgModule({
  imports: [
    SplashRoutingModule,
    CarouselModule.forRoot(),
    ChartsModule
  ],
  declarations: [ SplashComponent ]
})
export class SplashModule { }
