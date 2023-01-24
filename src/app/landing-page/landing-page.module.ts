import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomePresentationComponent } from './home-container/home-presentation/home-presentation.component';
import { PledgePresentationComponent } from './home-container/pledge-presentation/pledge-presentation.component';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomePresentationComponent,
    PledgePresentationComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
