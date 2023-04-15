import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProgressPage implements OnInit {

  items: any[] = [];
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    dob: '01/01/1980',
    height: '180 cm',
    weight: '80 kg',
    latestWorkout: '13/04/2023',
    workoutStreak: '5 days',
    img: 'https:://picsum.photos/200/300',
    badges: ['golden member']
  };

  constructor() {
    this.items = [
      {
        text: 'Settings',
        icon: 'settings-outline'
      }, {
        text: 'Billing Details',
        icon: 'briefcase-outline'
      }, {
        text: 'User Management',
        icon: 'person-outline'
      }, {
        text: 'Reset Data',
        icon: 'close-circle-outline'
      }, {
        text: 'Logout',
        icon: 'alert-circle-outline'
      },
    ]
  }

  ngOnInit() {
  }

  shareOnSocialMedia() { }

}
