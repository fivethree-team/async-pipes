import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyPipe } from './empty.pipe';

@NgModule({
  declarations: [EmptyPipe],
  imports: [CommonModule],
  exports: [EmptyPipe]
})
export class EmptyModule {}
