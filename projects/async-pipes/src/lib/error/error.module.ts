import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPipe } from './error.pipe';

@NgModule({
  declarations: [ErrorPipe],
  imports: [CommonModule],
  exports: [ErrorPipe],
  providers: []
})
export class ErrorModule {}
