import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {
  PendingModule,
  EmptyModule,
  ErrorModule
} from '@fivethree/async-pipes';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    PendingModule,
    EmptyModule,
    ErrorModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
