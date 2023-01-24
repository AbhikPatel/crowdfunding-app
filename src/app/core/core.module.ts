import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './components/master/master.component';
import { HeaderComponent } from './components/master/header/header.component';



@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MasterComponent
  ]
})
export class CoreModule { }
