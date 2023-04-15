import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from './hide-header.directive';
import { ProfileEditPage } from '../profile/profile-edit.page';
import { IonicStorageModule } from '@ionic/storage-angular';




@NgModule({
  declarations: [
    HideHeaderDirective,
  ],
  imports: [
    CommonModule, IonicStorageModule.forRoot({
      name: 'mydatabase'
    })
  ],
  exports: [
    HideHeaderDirective
  ]
})
export class SharedDirectivesModule { }
