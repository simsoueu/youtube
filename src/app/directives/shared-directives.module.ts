import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from './hide-header.directive';
import { ProfileEditPage } from '../profile/profile-edit.page';




@NgModule({
  declarations: [
    HideHeaderDirective,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HideHeaderDirective
  ]
})
export class SharedDirectivesModule { }
