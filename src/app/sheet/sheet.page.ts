import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { type } from 'os';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.page.html',
  styleUrls: ['./sheet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})



export class SheetPage implements OnInit {

  items = [
    {
      text: 'Create a Short',
      icon: 'videocam-outline'
    }, {
      text: 'Upload a video',
      icon: 'videocam-outline'
    }, {
      text: 'Create a Short',
      icon: 'videocam-outline'
    }, {
      text: 'Create a Short',
      icon: 'videocam-outline'
    },
  ]

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
