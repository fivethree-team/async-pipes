import { PendingPipe } from './pending.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PendingPipe],
  imports: [CommonModule],
  exports: [PendingPipe],
  providers: []
})
export class PendingModule {}
