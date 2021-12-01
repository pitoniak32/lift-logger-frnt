import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiftLogsComponent } from './liftlogs.component';



@NgModule({
  exports: [
    LiftLogsComponent,
  ],
  declarations: [
    LiftLogsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LiftLogsModule { }
