import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomePresentationComponent } from './home-container/home-presentation/home-presentation.component';
import { PledgePresentationComponent } from './home-container/pledge-presentation/pledge-presentation.component';
import { LandingService } from './landing.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomePresentationComponent,
    PledgePresentationComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    OverlayModule,
    ReactiveFormsModule
  ],
  providers :[
    LandingService,
  ]
})
export class LandingPageModule { }
